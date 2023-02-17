const body = document.querySelector('body'),
  modeToggle = body.querySelector('.mode-toggle')
sidebar = body.querySelector('nav')
sidebarToggle = body.querySelector('.sidebar-toggle')
const logout = body.querySelector('#logout')
const addLoadBtn = document.getElementById('addLoadBtn')
const cancelAddLoadBtn = document.getElementById('cancelAddLoadBtn')
const newLoadFormDiv = document.getElementById('newLoadFormDiv')
const loadsTableDiv = document.getElementById('loadsTableDiv')

let getMode = localStorage.getItem('mode')
if (getMode && getMode === 'dark') {
  body.classList.toggle('dark')
}

let getStatus = localStorage.getItem('status')
if (getStatus && getStatus === 'close') {
  sidebar.classList.toggle('close')
}

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark')
  if (body.classList.contains('dark')) {
    localStorage.setItem('mode', 'dark')
  } else {
    localStorage.setItem('mode', 'light')
  }
})

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('close')
  if (sidebar.classList.contains('close')) {
    localStorage.setItem('status', 'close')
  } else {
    localStorage.setItem('status', 'open')
  }
})

logout.addEventListener('click', () => {
  clearLocal()
  location.assign('/login')
})

const interceptResponseCode = (res) => {
  if (res?.status == 401) {
    alert(
      'Your access to these system have expired. Please login again to regain access.',
    )
    clearLocal()
    location.assign('/login')
  }
}

addLoadBtn.addEventListener('click', (event) => {
  newLoadFormDiv.classList.remove('d-none')
  loadsTableDiv.classList.add('d-none')
  addLoadBtn.classList.add('d-none')
  cancelAddLoadBtn.classList.remove('d-none')
})

cancelAddLoadBtn.addEventListener('click', (event) => {
  newLoadFormDiv.classList.add('d-none')
  loadsTableDiv.classList.remove('d-none')
  addLoadBtn.classList.remove('d-none')
  cancelAddLoadBtn.classList.add('d-none')
})