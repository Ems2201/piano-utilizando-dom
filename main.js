// peguei todas as teclas
const keys = document.querySelectorAll(".key")

// tocar notas
function playNote(event) {
    
    let audioKeyCode = getKeyCode(event);
    
    // tipo ou tecla pressionada
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    
    // se a tecla existe
    const cantFoundAnyKey = !key

    if(cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
} 

function getKeyCode(event) {
    let keyCode;

    const isKeyBoard = event.type === "keydown" // boolean
    if(isKeyBoard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}


function registerEvents() {

    // clicar com mouse
    keys.forEach( function (key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })

    // clicar com teclados
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)