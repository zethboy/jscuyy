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

// function sum (a, b){
//     console.log(a + b)
// } function biasa

// const sum2 = (a, b) => {
//     console.log(a + b)
// } == arrow function

// sum(3, 5)

// function ling (phi, r){
//     console.log(phi * r * r)
// }
// ling(3.14, 7)

// function seg (a, t){
//     console.log(1/2 * a * t)
// }
// seg(10, 8)

// function pp (p, l){
//     console.log(p * l)
// }
// pp(6, 4)

// function jg (a, t){
//     console.log(a * t )
// }
// jg(16, 10)


// LOOPING
// for (let i = 0; i < 6; i++){
//   if(i % 2 == 0){
//     console.log(i, 'adalah bilangan genap')
//   }
//   else{
//     console.log(i, 'adlah bilangan ganjil')
//   }
// }
// //  ataau bisa pake while
// let i = 0
// while(i < 6){
//   if(i % 2 == 0){
//     console.log(i, 'adalah bilangan genap')
//   }
//   else{
//     console.log(i, 'adlah bilangan ganjil')
//   }
//   i++
// }
// // bisa juga pake do
// let j = 0
// do{
//   if(j % 2 == 0){
//     console.log(j, 'adalah bilangan genap')
//   }
//   else{
//     console.log(j, 'adlah bilangan ganjil')
//   }
//   j++
// }while(j<6)


// TUGASSSS
// let total = 0
// const x = [3, 5, 12]
// for (let i = 0; i < x.length; i++){
//   console.log(x[i])
//   total += x[i]
// }console.log('total penjumlahan : ', total)

// let jumlah = 0
// let i = 0
// while(i<x.length){
//   console.log(x[i])
//   jumlah += x[i]
//   i++
// }console.log('total penjumlahan : ', jumlah)


// let hasil = 0
// let z = 0
// do{
//   console.log(x[z])
//   hasil += x[z]
//   z++
// }while(z<x.length)console.log('total penjumlahan : ', hasil)

// const klubBola = ['liverpool', 'chelsea', 'munyuk', 'city']
// console.log(klubBola)

// for(let klub of klubBola){
//   console.log(klub)
// } in untuk index

// klubBola.forEach((klub, index)=>{
//   console.log(klub, index)
// }) ini untuk dapetin array + indexnya 

// klubBola.map((klub, index) => {
//   console.log(klub, index + 1) 
// }) map juga samaa

// asyncronous
// function satu(){
//   console.log('satu')
// }
// function dua(){
//   setTimeout(()=>{
//     console.log('dua')
//   }, 3000)
  
// }
// function tiga(){
//   console.log('tiga')
// }
// satu()
// dua()
// tiga()

// misal fitur login

// const token = ~~[Math.random() * 12345678]
// const picture = ['1.jpg', '2.jpg', '3.jpg']

// function login(username){
//   return(token, username)
// }
// function getUsser(token){
//   if(token) return{apiKey : "xkey1234"}
// }
// function getPicture(apiKey) {
//   if(apiKey) return picture
// }
// const user = login("Yogi Nugraha")
// console.log(user, token)
// const apiKey = getUsser(user, token)
// console.log(apiKey)
// const getUserPicture = getPicture(apiKey)
// console.log(getUserPicture)

// const firstInput= Number(prompt('Silahkan masukkan angka pertama :'))
// const secondInput= Number(prompt('Silahkan masukkan angka ke dua :'))
// const whatsNeed = Number(prompt("Apa yang ingin anda lakukan\n 1. Penjumlahan\n 2. Pengurangan\n 3.Perkalian\n 4. Pembagian\n *Masukkan kode angka"))
// switch (whatsNeed){
//   case 1:
//     const penjumlahan = firstInput + secondInput
//     alert(`Hasil penjumlahan dari ${firstInput} ditambah ${secondInput} adalah = ${penjumlahan}`)
//     break
//   case 2:
//     const pengurangan = firstInput - secondInput
//     alert(`Hasil pengurangan dari ${firstInput} dikurangi ${secondInput} adalah = ${pengurangan}`)
//     break
//     case 3:
//     const perkalian = firstInput * secondInput
//     alert(`Hasil perkalian dari ${firstInput} dikali ${secondInput} adalah = ${perkalian}`)
//     break
//     case 4:
//     const pembagiann = firstInput / secondInput
//     alert(`Hasil pembagian dari ${firstInput} dibagi ${secondInput} adalah = ${pembagiann}`)
//     break
//     default:
//     alert(`Tolong masukkan kode yang sudah tertera!`)
    
//     }