const app = document.querySelector('#app')
const header = document.createElement('h1')
const headerContent = document.createTextNode('Belajar DOM bosss')

header.appendChild(headerContent)
app.appendChild(header)

header.style.color = 'red'
header.style.backgroundColor = 'grey'

header.style.textAlign = 'center'
header.innerHTML = 'YOGI NUGRAHA'