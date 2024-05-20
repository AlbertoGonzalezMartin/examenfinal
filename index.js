let botonE = document.getElementById('boton-e')
let minotaE = document.getElementById('minota-e')
let minota = 10

function boton1() {
    botonE.textContent = " o al menos eso espero"
    minotaE.textContent = "esta es la nota que me vas a poner:" + minota
}

function subirNota() {
    if (minota < 11) {
        minota += 1
        minotaE.textContent = "no te compliques una matricula de honor sabes que te gustaria poner :)  " + minota
    }
}

function bajarNota() {
    if (minota > 4) {
        minota = minota - 1
        minotaE.textContent = "esta es la nota que me vas a poner:  " + minota
    }
    if (minota == 4) {
        minota += 1
        minotaE.textContent = "vengaa profee no me suspendas porfa:  " + minota
    }
}

let notatrenesE = document.getElementById('notatrenes-e')
let notalinkedinE = document.getElementById('notalinkedin-e')
let notaexamenE = document.getElementById('notaexamen-e')
let notatrenes = 5
let notalinkedin = 5
let notaexamen = 5
function subirNota2() {
    if (notatrenes < 10) {
        notatrenes += 1
        notatrenesE.textContent = notatrenes
    }
}

function bajarNota2() {
    if (notatrenes > 0) {
        notatrenes = notatrenes - 1
        notatrenesE.textContent = notatrenes
    }
}

function subirNota3() {
    if (notalinkedin < 10) {
        notalinkedin += 1
        notalinkedinE.textContent = notalinkedin
    }
}

function bajarNota3() {
    if (notalinkedin > 0) {
        notalinkedin = notalinkedin - 1
        notalinkedinE.textContent = notalinkedin
    }
}

function subirNota4() {
    if (notaexamen < 10) {
        notaexamen += 1
        notaexamenE.textContent = notaexamen
    }
}

function bajarNota4() {
    if (notaexamen > 0) {
        notaexamen = notaexamen - 1
        notaexamenE.textContent = notaexamen
    }
}



let mediaE = document.getElementById('media-e')
let media = ((notatrenes + notalinkedin)/2*10/7) + (notaexamen * 10/3)        
mediaE.textContent = media

function media1() {
    let media = ((notatrenes + notalinkedin)/2*7/10) + (notaexamen * 3/10)        
    mediaE.textContent = media
}