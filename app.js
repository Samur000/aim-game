const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list ')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#04FF00', '#2B62E7', '#D629EF', '#E99F1D', '#eb4034', '#e534eb', '#34d3eb', '#f0f0f0']
let score = 0
let time = 0

startBtn.addEventListener('click', (event) => {
   event.preventDefault()
   screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
   if (event.target.classList.contains('time-btn')) {
      time = +event.target.getAttribute('data-time')
      screens[1].classList.add('up')   
      startGame()
   }
})

board.addEventListener('click', event => {
   if (event.target.classList.contains('circle')) {
      score++
      event.target.remove()
      createRandomCircle()
   }
})

function startGame() {
   setInterval(decreaseTime, 1000, );
   createRandomCircle()
   setTime(time)
}

function decreaseTime() {
   if (time === 0) {
      finisGame()
   } else {
      let current = --time
      if (current < 10) {
         current = `0${current}`
      }
      setTime(current)
   }
}

function setTime(value) {
   timeEl.innerHTML = `00:${value}`
}

function finisGame() {
   timeEl.parentElement.classList.add('hide')
   board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
   const circle = document.createElement('div')
   const size = getRandomNumber(15, 60)
   const color = getRandomColor()
   circle.style.background = color

   const {width, height} = board.getBoundingClientRect()

   const x = getRandomNumber(0, width -size)
   const y = getRandomNumber(0, height - size)

   circle.style.top = `${x}px`
   circle.style.left = `${y}px`


   circle.style.width = `${size}px`
   circle.style.height = `${size}px`
   circle.classList.add('circle')

   board.append(circle)
}

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}