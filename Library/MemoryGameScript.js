var juego = {
    GameCont: document.getElementById('GameBody__Container'),
    GameLost: document.getElementById('GameLost'),
    GameLifes: document.getElementById('GameLifes__lifes'),
    GameName: document.getElementById('UserName'),
    nivel: 1,

    vidas: 16,

    puntos: 0,

    arrayComparar: [],

    cartasExpuestas: [],

    imagenes: ['Bee',
            'Crab',
            'Flamengo',
            'Gato',
            'OsoBlanco',
            'PezAmarillo',
            'Tucan',
            'Zebra',
            ],
    
    templateCard: function (imagen, idOne) {
        return `<div class="GameBody__Card">
                    <a href='#' class="GameBody__Card--Front colorGray" id='${idOne}'>
                        <p class="GameBody__CardIcon">*</p>
                    </a href='#'>
                    <a href='#' class="GameBody__Card--Back"  style="background-image: url('/Images/${imagen}.jpg'); background-size: cover; background-repeat: no-repeat;"></a href='#'>
                </div>`
    },

    templateFinal: function (final) {
        return `<div class="GameBody__Win">
                    <p class="GameBody__CardIcon">${final}</p>
                </div>`
    },

    templateButton: function (texto) {
        return `<a class="GameBody__button" onClick="juego.iniciarJuego()">${texto}</a>`
    },

    generarTemplate: function (number) {
        // let number = Math.floor(Math.random() * 2)
        juego.GameCont.innerHTML = ''
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 5], (juego.imagenes[number + 5]) + 1)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number], (juego.imagenes[number]) + 1)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 1], (juego.imagenes[number + 1]) + 1)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 3], (juego.imagenes[number + 3]) + 1)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 7], (juego.imagenes[number + 7]) + 1)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 2], (juego.imagenes[number + 2]) + 1)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 5], (juego.imagenes[number + 5]) + 2)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 2], (juego.imagenes[number + 2]) + 2)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 1], (juego.imagenes[number + 1]) + 2)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 4], (juego.imagenes[number + 4]) + 1)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 4], (juego.imagenes[number + 4]) + 2)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 6], (juego.imagenes[number + 6]) + 1)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number], (juego.imagenes[number]) + 2)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 6], (juego.imagenes[number + 6]) + 2)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 3], (juego.imagenes[number + 3]) + 2)
        juego.GameCont.innerHTML += juego.templateCard(juego.imagenes[number + 7], (juego.imagenes[number + 7]) + 2)
    },

    ocultarCartas: function () {
        let x = juego.cartasExpuestas[0]
        let y = juego.cartasExpuestas[1]
        setTimeout(() => {
            x.classList.add('colorGray')
            y.classList.add('colorGray')
        }, 1000)
    },

    borrarCartas: function () {
        juego.arrayComparar.pop()
        juego.arrayComparar.pop()
        juego.cartasExpuestas.pop()
        juego.cartasExpuestas.pop()
    },

    ganar: function () {
        if (juego.puntos === 8) {
            setTimeout(()=>{
                juego.GameCont.innerHTML = this.templateFinal('¡Ganaste!')
            }, 600)
        }
    },

    generarResultado: function () {
        let a = juego.arrayComparar[0]
        let b = juego.arrayComparar[1]
        if (a === b) {
            // ganaste una
            juego.cartasExpuestas[0].classList.add('expuesta')
            juego.cartasExpuestas[1].classList.add('expuesta')
            juego.borrarCartas()
            juego.puntos += 1
            juego.ganar()
        } else if (a !== b) {
            if (juego.vidas < 2) {
                juego.GameLost.innerHTML = 'Perdiste'
                juego.GameLifes.innerHTML = 'X'
                juego.borrarCartas()
                juego.GameCont.innerHTML = this.templateFinal('Perdiste')
                juego.GameCont.innerHTML += this.templateButton('Iniciar')
            } else if (juego.vidas < 9) {
                juego.vidas -= 1
                let corazones = ''
                function producirCorazones() {
                    for (let i = 0; i < juego.vidas; i++) {
                        corazones = corazones + '♥'
                    }
                }
                producirCorazones()
                setTimeout(() => {
                    juego.GameLifes.innerHTML = corazones}, 700)
                juego.ocultarCartas()
                juego.borrarCartas()
                juego.GameLost.innerHTML = '-1 Vidas. ¡No te rindas!'
                setTimeout(() => {
                    juego.GameLost.innerHTML = ''
                }, 2000)
            } else {
                juego.vidas -= 1
                juego.ocultarCartas()
                juego.borrarCartas()
                juego.GameLost.innerHTML = '¡Buen intento!'
                setTimeout(() => {
                    juego.GameLost.innerHTML = ''
                }, 2000)
            }
        }
        
    },

    limite: function () {
        if (juego.arrayComparar.length == 2) {
            juego.generarResultado()
        }
    },

    elegirCarta: function(carta, dato){
        juego.arrayComparar.push(dato)
        if (carta.classList.contains("colorGray")) {
            carta.classList.remove("colorGray")
            juego.cartasExpuestas.push(carta)
        } else {
            if (carta.classList.contains("expuesta")) {
                juego.arrayComparar.pop()
            } else {
                carta.classList.add("colorGray")
            }
        }
        juego.limite()
    },

    iniciaJuego: function () {
        let UserName = prompt('escribe aquí tu nombre')
        juego.GameName.innerHTML = UserName
        juego.generarTemplate(0)
        
        let Bee1 = document.getElementById('Bee1')
        Bee1.addEventListener('click', () => {juego.elegirCarta(Bee1, 'Bee')})
        let Bee2 = document.getElementById('Bee2')
        Bee2.addEventListener('click', () => {juego.elegirCarta(Bee2, 'Bee')})
        let Crab1 = document.getElementById('Crab1')
        Crab1.addEventListener('click', () => {juego.elegirCarta(Crab1, 'Crab')})
        let Crab2 = document.getElementById('Crab2')
        Crab2.addEventListener('click', () => {juego.elegirCarta(Crab2, 'Crab')})
        let Flamengo1 = document.getElementById('Flamengo1')
        Flamengo1.addEventListener('click', () => {juego.elegirCarta(Flamengo1, 'Flamengo')})
        let Flamengo2 = document.getElementById('Flamengo2')
        Flamengo2.addEventListener('click', () => {juego.elegirCarta(Flamengo2, 'Flamengo')})
        let Gato1 = document.getElementById('Gato1')
        Gato1.addEventListener('click', () => {juego.elegirCarta(Gato1, 'Gato')})
        let Gato2 = document.getElementById('Gato2')
        Gato2.addEventListener('click', () => {juego.elegirCarta(Gato2, 'Gato')})
        let OsoBlanco1 = document.getElementById('OsoBlanco1')
        OsoBlanco1.addEventListener('click', () => {juego.elegirCarta(OsoBlanco1, 'OsoBlanco')})
        let OsoBlanco2 = document.getElementById('OsoBlanco2')
        OsoBlanco2.addEventListener('click', () => {juego.elegirCarta(OsoBlanco2, 'OsoBlanco')})
        let PezAmarillo1 = document.getElementById('PezAmarillo1')
        PezAmarillo1.addEventListener('click', () => {juego.elegirCarta(PezAmarillo1, 'PezAmarillo')})
        let PezAmarillo2 = document.getElementById('PezAmarillo2')
        PezAmarillo2.addEventListener('click', () => {juego.elegirCarta(PezAmarillo2, 'PezAmarillo')})
        let Tucan1 = document.getElementById('Tucan1')
        Tucan1.addEventListener('click', () => {juego.elegirCarta(Tucan1, 'Tucan')})
        let Tucan2 = document.getElementById('Tucan2')
        Tucan2.addEventListener('click', () => {juego.elegirCarta(Tucan2, 'Tucan')})
        let Zebra1 = document.getElementById('Zebra1')
        Zebra1.addEventListener('click', () => {juego.elegirCarta(Zebra1, 'Zebra')})
        let Zebra2 = document.getElementById('Zebra2')
        Zebra2.addEventListener('click', () => {juego.elegirCarta(Zebra2, 'Zebra')})

        // juego.generarListeners()
    },



}