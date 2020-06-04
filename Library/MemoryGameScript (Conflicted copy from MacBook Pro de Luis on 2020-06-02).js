var juego = {
    GameCont: document.getElementById('GameBody__Container'),

    nivel: 1,

    vidas: 10,

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

    generarTemplate: function (number) {
        // let number = Math.floor(Math.random() * 2)
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

    ganarNivel: function() {
        nivel = nivel+1
        juego.iniciaJuego()
    },

    ocultarCartas: function () {
        for (let i = 0; i === 16; i++) {
            // borrar clases
        }
    },

    generarResultado: function () {
        let a = juego.arrayComparar[0]
        let b = juego.arrayComparar[1]
        if (a === b) {
            // ganaste una
            juego.cartasExpuestas[0].classList.add('expuesta')
            juego.cartasExpuestas[1].classList.add('expuesta')
        } else if (a !== b) {
            if (juego.vidas < 5) {
                // restar vidas del tablero
                // voltear cartas
            } else {
                juego.vidas -= 1
                // voltear cartas
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
        } else {
            if (carta.classList.contains("expuesta")) {
                carta.removeEventListener('click')
            } else {
                carta.classList.add("colorGray")
            }
        }
        juego.cartasExpuestas.push(carta)
        juego.limite()
    },

    iniciaJuego: function () {
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


juego.iniciaJuego()