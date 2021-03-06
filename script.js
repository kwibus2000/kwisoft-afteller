const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const countdown = document.getElementById('countdown')
const year = document.getElementById('year')
const loading = document.getElementById('loading')
const newyear = document.getElementById('newyear')
const engel = document.getElementById('engel')

const currentYear = new Date().getFullYear()

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

// Set text
newyear.innerHTML = `kwisoft &copy; ${currentYear} - ik wens jullie een geweldig ${
  currentYear + 1
}!`

// Set background year
year.innerText = currentYear + 1

// inplakken
function toonEngel() {
  engel.classList.add('active')
}

function verbergEngel() {
  engel.classList.remove('active')
}

function myTimer() {
  const d = new Date()
  if (d < newYearTime) {
    setTimeout(() => {
      verbergEngel()
    }, 5000)
    setTimeout(() => {
      toonEngel()
    }, 55000)
  } else {
    clearInterval(interval)
    return 0
  }
}

// Update countdown time
function updateCountdown() {
  const currentTime = new Date()
  const diff = newYearTime - currentTime

  const d = Math.floor(diff / 1000 / 60 / 60 / 24)
  const h = Math.floor(diff / 1000 / 60 / 60) % 24
  const m = Math.floor(diff / 1000 / 60) % 60
  const s = Math.floor(diff / 1000) % 60

  // Add values to DOM
  days.innerHTML = d
  hours.innerHTML = h < 10 ? '0' + h : h
  minutes.innerHTML = m < 10 ? '0' + m : m
  seconds.innerHTML = s < 10 ? '0' + s : s
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove()
  countdown.style.display = 'flex'
}, 1000)

// Run every second
setInterval(updateCountdown, 1000)

const interval = setInterval(myTimer, 60000)
