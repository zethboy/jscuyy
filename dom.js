const tombolcuy = document.querySelector('#tombol')
tombolcuy.addEventListener('click', function(){
  // document.body.style.backgroundColor = 'orange'
  document.body.classList.toggle('tombol')
})

const tRandom = document.createElement('button')
const textT = document.createTextNode('acak warna')
tRandom.appendChild(textT)
tRandom.setAttribute('type', 'button')
tombolcuy.after(tRandom)

tRandom.addEventListener('click', function(){
  const r = Math.round(Math.random() * 255 + 1)
  const g = Math.round(Math.random() * 255 + 1)
  const b = Math.round(Math.random() * 255 + 1)
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})

const sMerah = document.querySelector('input[name = sMerah]')
const sHijau = document.querySelector('input[name = sHijau]')
const sBiru = document.querySelector('input[name = sBiru]')

sMerah.addEventListener('input', function(){
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})
sHijau.addEventListener('input', function(){
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})
sBiru.addEventListener('input', function(){
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})

document.body.addEventListener('mousemove', function(event){
const posX = Math.round((event.clientX / window.innerWidth) * 255)
const posY = Math.round((event.clientY / window.innerHeight) * 255)
document.body.style.backgroundColor = 'rgb('+ posX +', '+ posY +', 100)'
})