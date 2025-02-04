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