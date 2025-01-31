// dom manipulation
// buat elemen baru
const pBaru = document.createElement('p')
const textPB = document.createTextNode('paragraf baru')
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPB)
// tempatkan dimana si pb ini (disimpan di  akhir section a)
const sectionA = document.querySelector('#a')
sectionA.appendChild(pBaru)

// membuat li baru
const liBaru = document.createElement('li')
const textLiBaru = document.createTextNode('item 1,5')
// simpan tulisan ke li
liBaru.appendChild(textLiBaru)
// mau disimpen dimana (abis item 1 section b)
const sectionB = document.querySelector('section#b ul')
const liLok = sectionB.querySelector('li:nth-child(2)')
sectionB.insertBefore(liBaru, liLok)


// remove link ig

const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

// mengganti node
const secB = document.querySelector('#b')
const p4 = secB.querySelector('p:nth-child(1)') //bisa juga p doang karen p4 ada di indek ke 1

const h2baru = document.createElement('h2')
const texth2b = document.createTextNode('belajar ganti node')

h2baru.appendChild(texth2b)

secB.replaceChild(h2baru, p4)