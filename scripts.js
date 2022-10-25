function displayDate() {
    document.getElementById('demo').innerHTML = Date()
}

document.querySelector('button').addEventListener("click", () => {
    alert('You click the button')
})

window.addEventListener('resize', ()=> {
    document.getElementById('demo').innerHTML = "You resized the window"
})

window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'v':
            document.body.style.backgroundColor = 'violet'
            break
        case 'r':
            document.body.style.backgroundColor = 'red'
            break
        case 'g':
            document.body.style.backgroundColor = 'orange'
            break
        case 'b':
            document.body.style.backgroundColor = 'blue'
            break
    }
})