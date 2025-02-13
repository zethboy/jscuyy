const container = document.querySelector('.container')
const jumbo = document.querySelector('.cat1')
const thumbs = document.querySelectorAll('.cat')


container.addEventListener('click', function(e){
  if (e.target.className == 'cat' ){
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function(){
      jumbo.classList.remove('fade');
    }, 500)
    thumbs.forEach(function(thumb){
      // if (thumb.classList.contains('active')){
      //   thumb.classList.remove('active')
      // }
      // atau
      thumb.className = 'cat'
    })
    e.target.classList.add('active')
  }
}) 
