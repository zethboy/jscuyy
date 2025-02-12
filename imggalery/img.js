const container = document.querySelector('.container')
const jumbo = document.querySelector('.cat1')


container.addEventListener('click', function(e){
  if (e.target.className == 'cat' ){
    jumbo.src = e.target.src;
  }
}) 