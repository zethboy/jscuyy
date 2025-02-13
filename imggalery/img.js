const container = document.querySelector('.container')
const jumbo = document.querySelector('.cat1')


container.addEventListener('click', function(e){
  if (e.target.className == 'cat' ){
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function(){
      jumbo.classList.remove('fade');
    }, 500)
  }
}) 