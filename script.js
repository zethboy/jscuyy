const app = document.querySelector('#app')
const header = document.createElement('h1')
const headerContent = document.createTextNode('Belajar DOM bosss')

header.appendChild(headerContent)
app.appendChild(header)

header.style.color = 'red'
header.style.backgroundColor = 'grey'

header.style.textAlign = 'center'
header.innerHTML = 'YOGI NUGRAHA'

header.style.fontSize = '60px'

const p = document.getElementsByTagName('p')
for (let i = 0; i < 4; i++){
  p[i].style.backgroundColor = 'yellow'
}

const parag = document.querySelector('#parag')
parag.style.color = 'blue'

const judul = document.querySelector('#judul')
judul.innerHTML = '<em>Yomannn</em>'

const sec = document.querySelector('#r')
sec.innerHTML = '<div><ul><li>yogi</li><li>nugraha</li><li>alcantara</li></ul></div>'
