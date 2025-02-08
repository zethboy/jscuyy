// const card = document.querySelectorAll('.card')
// const hilang = document.querySelectorAll('.close')
// hilang.addEventListener('click', function(){
//   card.style.display = "none"
// })

// dom traversal

const hilang = document.querySelectorAll('.close')

// for (let i = 0; i < hilang.length; i++){
//   hilang[i].addEventListener('click', function(e){
//     // hilang[i].parentElement.style.display = 'none'
//     e.target.parentElement.style.display = 'none'
//   })
// }

hilang.forEach(function(el){
  el.addEventListener('click', function(e){
    e.target.parentElement.style.display = 'none'
  })
})

const nama = document.querySelectorAll('.nama')
for(let i = 0; i < nama.length; i++){
nama[i].addEventListener('click', function(na){
  
  na.target.nextElementSibling.style.color = 'red'
})
}