function getPilKom(){
  const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getRules(comp, user) {
  if (user == comp) return 'SARUA&nbsp;&nbsp;AJG';
  if (user == 'gajah') return (comp == 'orang') ? 'ADUY MEUNANG!' : 'GEBLOH ELEH!';
  if (user == 'orang') return (comp == 'gajah') ? 'GEBLOH ELEH!' : 'ADUY MEUNANG!';
  if (user == 'semut') return (comp == 'orang') ? 'GEBLOH ELEH!' : 'ADUY MEUNANG!';
}


const pGajah = document.querySelector('.gajah')
const pSemut = document.querySelector('.semut')
const pOrang = document.querySelector('.orang')

pGajah.addEventListener('click', function(){
  const pilkom = getPilKom()
  const pilPlay = pGajah.className
  const hasil = getRules(pilkom, pilPlay)
  const imgComp = document.querySelector('.img-komputer')
  imgComp.setAttribute('src', './bahan/' + pilkom + '.png')
  const info = document.querySelector('.info')
  info.innerHTML = hasil
  
})
pSemut.addEventListener('click', function(){
  const pilkom = getPilKom()
  const pilPlay = pSemut.className
  const hasil = getRules(pilkom, pilPlay)
  const imgComp = document.querySelector('.img-komputer')
  imgComp.setAttribute('src', './bahan/' + pilkom + '.png')
  const info = document.querySelector('.info')
  info.innerHTML = hasil
})
pOrang.addEventListener('click', function(){
  const pilkom = getPilKom()
  const pilPlay = pOrang.className
  const hasil = getRules(pilkom, pilPlay)
  const imgComp = document.querySelector('.img-komputer')
  imgComp.setAttribute('src', './bahan/' + pilkom + '.png')
  const info = document.querySelector('.info')
  info.innerHTML = hasil
  
})