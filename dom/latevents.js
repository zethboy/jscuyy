const p3 = document.querySelector('.p3')
function ubahwarna3() {
  p3.style.backgroundColor = 'red' 
}

const p2 = document.querySelector('.p2')
function ubahwarna() {
  p2.style.backgroundColor = 'Green' 
}
p2.onclick = ubahwarna


const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function(){
  const ul = document.querySelector('section#b ul')
  const liBaru = document.createElement('li')
  const textLi = document.createTextNode('item baru')
  liBaru.appendChild(textLi)
  ul.appendChild(liBaru)
})

const p1 = document.querySelector('.p1')
function ubahwarna1(){
  p1.style.color = 'pink'
}
p1.onclick = ubahwarna1

