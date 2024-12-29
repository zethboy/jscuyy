// // let usia = prompt('masukkan tahun anda lahir')

// //  usia = 2024 - usia

// // console.log('heyhoo usia kamu adalah ' + usia )
// // alert('usia kamu adalah ' + usia)
// //=================================

// let nama = 'yogi nugraha' //string
// let usia = 19              // integer
// let tinggiBadan = 174.5 // double float
// let beratBadan
// let pacar = 3 // null = tidak bernilai

// beratBadan = 60

// // if(pacar == null ){
// //     pacar = 'belum punya'
// // }
// // else{
// //     pacar = 'udah punya'
// // }
// //=============================

// switch(pacar){
//     case 1:
//         pacar = 'punya satu aja'
//     break
//     case 2:
//         pacar = 'mayan'
//     break
//     case 3 :
//         pacar = 'banyak coii'
//     break
//     default:
//         pacar = 'belum punya'
//     break
// }


// alert(`nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`)

// buat array
// const arraySaya = ['Yogi', 'Aya']
// console.log(arraySaya)
// arraySaya.push ('nadine')
// console.log(arraySaya)

// if (arraySaya.includes('Aya')){
//     const posisi = arraySaya.indexOf('Aya')
//     const before = posisi - 1
//     const after = posisi + 1
//     const posisiBefore = arraySaya[before]
//     const posisiAfter = arraySaya[after]

//     console.log(`posisi sebelum aya ${posisiBefore}`)
//     console.log(`posisi sesudah  aya ${posisiAfter}`)
//     console.log(`posisi Aya ada di index ke ${posisi}`)
// }
// else {
//     console.log(`Aya tidak ada`)
// }

// const arrySaya = [] 

// arrySaya[0] = 'manggo'
// arrySaya[1] = 'avocado'
// arrySaya[2] = 'watermelon'

// console.log(arrySaya)

// const arraySaya = [1, 2, 3, 4, 5, 6, 7]
// const newArraySaya = [...arraySaya]
// newArraySaya[1] = 9
// console.log(arraySaya)
// console.log(newArraySaya)

// const arraySaya = ['yogi', 2, {allea : true}, {renata : function(){ console.log('renata lopyu')},}, ['aya', 'respa']]
// arraySaya[3].renata()

// const arraySaya = ['yogi', 2, {allea : true}, {renata : function(){ console.log('renata lopyu')},}, ['aya', 'respa']]
// console.log(arraySaya[4][1])

// const arraySaya = [1, 2, 3]
// const arrayKamu = [5, 6, 7]

// const mergeArray = arraySaya.concat(arrayKamu)
// for (list of mergeArray) console.log(list) == urutan
// for (list in mergeArray) console.log(list) == urutan indeks
// mergeArray.map((value, index) => console.log(index, value)) ututan buat liat dua duanya

// const data = [
//     {
//         name : 'Yogi',
//         position : "front end",
//         age : 35
//     },
//     {
//         name : 'Allea',
//         position : "back end",
//         age : 28
//     },
//     {
//         name : 'Ayaa',
//         position : "pacar",
//         age : 7
//     },
//     {
//         name : 'Respa',
//         position : "well",
//         age : 19
//     }
// ]
// data.map((value, index) => {
//     console.log(value.name)
// }) == buat munculin nama doang

// data.sort((a, b) => b.age - a.age).map((value) =>
//     console.log(value)
// ) == buat nampilin urutan umur

// data.filter((x) => x.age > 20).map((value) => console.log(value)) filter dari umur lebih 20

// data.sort((a, b) => a.age - b.age).filter((x) => x.age > 20).map((value) => console.log(value)) == gabungan filter umur lebih dan urutan umur 

// function

// function yogi(){
//     return 'Yogiiii'
// }
//  alert(yogi())

// function yogi(woi){
//     return woi
// }
//  alert(yogi('hehehe'))

//  function yogi(woi){
//     console.log(woi) 
// }
//  yogi('hehehe')

// function yogi(woi, zebra, kadal){
//     console.log(woi, zebra) 
//     console.log(kadal)
// }
//  yogi('hehehe', 'hihih', 'huhuhu')