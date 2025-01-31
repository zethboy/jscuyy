// dom manipulation
// buat elemen baru
const pBaru = document.createElement('p')
const textPB = document.createTextNode('paragraf baru')
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPB)
// tempatkan dimana si pb ini (disimpan di  akhir section a)

const sectionA = document.querySelector('#a')
sectionA.appendChild(pBaru)
