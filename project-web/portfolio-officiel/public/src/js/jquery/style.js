
export const body = document.querySelector('body')
let choiInput = document.getElementById('diffBgc')

const blue = document.getElementById('blue')
const whitesmoke = document.getElementById('whitesmoke')
const black = document.getElementById('black')

const colors = ['blue', '#1b1b1b', '#cccccc']

blue.addEventListener('click', function () {
    body.style.backgroundColor = colors[0]
})

whitesmoke.addEventListener('click', function () {
    body.style.backgroundColor = colors[2]
})

black.addEventListener('click', function () {
    body.classList.remove('.black')
})

export { colors }
