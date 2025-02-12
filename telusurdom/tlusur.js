// const card = document.querySelectorAll('.card')
// const hilang = document.querySelectorAll('.close')
// hilang.addEventListener('click', function(){
//   card.style.display = "none"
// })

// dom traversal

// const hilang = document.querySelectorAll('.close')

// for (let i = 0; i < hilang.length; i++){
//   hilang[i].addEventListener('click', function(e){
//     // hilang[i].parentElement.style.display = 'none'
//     e.target.parentElement.style.display = 'none'
//   })
// }

// hilang.forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.target.parentElement.style.display = 'none'
//     e.preventDefault()
//     e.stopPropagation()
//   })
// })

// const nama = document.querySelector('.nama')
// for(let i = 0; i < nama.length; i++){
// nama[i].addEventListener('click', function(na){
  
//   na.target.nextElementSibling.style.color = 'red'
// })
// }
// console.log(nama.parentElement.parentElement);

// const cards = document.querySelectorAll('.card')
// cards.forEach(function(card){
// card.addEventListener('click', function(c){
//   alert('ok')
// })})

const container = document.querySelector('.container')

container.addEventListener('click', function(e){
  console.log(e.target)
  if(e.target.className == 'close'){
    e.target.parentElement.style.backgroundColor = 'red';
    e.preventDefault()
  }
})