// const card = document.querySelectorAll('.card')
// const hilang = document.querySelectorAll('.close')
// hilang.addEventListener('click', function(){
//   card.style.display = "none"
// })

// dom traversal

const hilang = document.querySelectorAll('.close')

for (let i = 0; i < hilang.length; i++){
  hilang[i].addEventListener('click', function(e){
    // hilang[i].parentElement.style.display = 'none'
    e.target.parentElement.style.display = 'none'
  })
}