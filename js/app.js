// Darkmood to Lightmood Begins

let body = document.querySelector("body")
let moodBtn = document.querySelector("nav .moodBtn");

function darkMood (){
    body.classList.toggle('moodShift')

    if (body.classList.contains("moodShift")){
        logoImg.src="./Images/Asset 1.png"
    } else{
        logoImg.src="./Images/Asset 2.png"
    }
}

moodBtn.addEventListener('click' , darkMood)

const logoImg = document.getElementById('logo');

// Darkmood to Lightmood Ends

// Cursor Effect Begins

let cursor = document.querySelector('.cursor');
let cursorSm = document.querySelector('.cursorSm');

function cursorEffect(event) {
    let left = event.pageX
    let top = event.pageY

    cursor.style.left = `${left}px`
    cursor.style.top = `${top}px`
    cursorSm.style.left = `${left}px`
    cursorSm.style.top = `${top}px`

}

window.addEventListener("mousemove" , cursorEffect )

// Cursor Effect Ends

