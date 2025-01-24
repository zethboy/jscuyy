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

// const angka = Number(prompt('Masukkan angka :'))
// if(isNaN(angka)){
//   alert(`Masukkan angka yang benar !`)
// } 
// else {
//   if (angka % 2 == 0){
//     alert(`Angka ${angka} adalah genap`)
//   }
//   if(angka % 2 != 0){
//     alert(`Angka ${angka} adalah ganjil`)
//   }
// }

// const random = Math.floor(Math.random() * 10) + 1
// console.log(random)
// const tebak = Number(prompt('Tebak angka dari 1 - 10'))
// if(isNaN(tebak)){
//   alert(`Masukkan angka!`)
// }
// else{
//   if(tebak == random){
//     alert(`Selamat ! Tebakanmu benar.`)
//   }
//   if(tebak > 10 | tebak < 1){
//     alert(`Masukkan angka dari 1 - 10`)
//   }
//   else{
//     if(tebak < random){
//       alert(`Tebakan terlalu kecil`)
//     }
//     if(tebak > random){
//       alert(`Tebakan terlalu besar`)
//     }
//   }
// }

// const random = Math.floor(Math.random()*10) + 1
// let tebak =0
// let jumTebak = 0
// while(true){
//   const tebak = Number(prompt(`Masukkan angka tebakan 1 -10 : `))
//   jumTebak ++
//   if (isNaN(tebak)){
//     alert(`Masukkan angka !`)
//     continue
//   }
//   if(tebak < 1 || tebak > 10){
//     alert(`Masukkan angka dari 1 - 10`)
//     continue
//   }
//   if(tebak == random){
//     alert(`Selamat tebakanmu benar !`)
//     break
//   }
//   if(tebak > random){
//     alert(`Tebakkan terlalu besar`)
//   }
//   else{
//     alert(`Tebakkan terlalu kecil`)
//   }
// }
// alert(`Jumlah percobaan : ${jumTebak}`)

// ===== 1D1C 1/1/25 =====

// 1. Buat sebuah fungsi bernama printNumbers yang menerima satu parameter n. Fungsi ini akan mencetak angka dari 1 sampai n ke konsol.

// function printNumbers (n){
//   for (let i = 1; i <= n; i++){
//     console.log(i)
//   }
// }
// printNumbers(5)

// // 2. Buat sebuah fungsi bernama reverseString yang menerima sebuah string dan mengembalikannya dalam urutan terbalik.

// function reverseString(word){
//   console.log(word.split('').reverse().join(''))
// }
// reverseString('hello')

// // 3. Buat sebuah fungsi bernama sumArray yang menerima sebuah array angka dan mengembalikan jumlah total elemen di dalam array.

// let jumlah = 0
// function sumArray(angka){
//   for(let i = 0; i < angka.length; i++)
//   jumlah += angka[i]
//   console.log(jumlah)
// }
// sumArray([1,2,3,4,5])

// // 4. Buat sebuah fungsi bernama isEven yang menerima satu parameter angka dan mengembalikan true jika angka tersebut genap, atau false jika ganjil.

// function isEven(n){
//   if(n % 2 == 0){
//     console.log(true)
//   }
//   else{
//     console.log(false)
//   }
// }
// isEven(4)
// isEven(7)

// // 5. Gunakan prompt untuk meminta pengguna memasukkan nama mereka, lalu gunakan alert untuk menyapa mereka dengan nama tersebut

// const nama = prompt('Masukkan nama :')
// alert(`Hello, ${nama}`)

// 1. Buat sebuah fungsi bernama findFactors yang menerima satu angka positif dan mengembalikan array dari semua faktor bilangan tersebut.

// function findFactors(n){
//  let faktor = []
//  for (let i = 1; i <= n; i++ ){
//   if (n % i == 0){
//     faktor.push(i)
//   } 
//  }
//  return(faktor)
// }
// console.log(findFactors(12))

// // 2. Buat sebuah fungsi bernama isPalindrome yang menerima sebuah string dan mengembalikan true jika string tersebut adalah palindrome (dibaca sama dari depan dan belakang), atau false jika tidak.


// function isPalindrome (word){
//   const katabalik = word.split('').reverse().join('') 
//   return word == katabalik

//   }

//   console.log(isPalindrome("katak"))

// // 3. Buat sebuah fungsi bernama filterEvenNumbers yang menerima sebuah array angka, dan mengembalikan array baru yang hanya berisi angka genap dari array tersebut.

// function filterEvenNumbers(angka){
//   let genap = []
//   for (let i = 0; i < angka.length; i++){
//     if(angka[i] % 2 == 0){
//       genap.push(angka[i])
//     }
//   }
//   return genap
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5]))

// // 4. Buat sebuah fungsi bernama capitalizeWords yang menerima sebuah string yang berisi beberapa kata, dan mengembalikan string di mana huruf pertama dari setiap kata diubah menjadi huruf kapital.
// function capitalizeWords (sentence){
//   let words = sentence.split(" ")
//   let capitalizeWords = words.map(word => {
//     return word[0].toUpperCase() + word.slice(1)
//   })
//   return capitalizeWords.join(" ")
// }
// console.log(capitalizeWords("halo dunia"))

// // 5. Buat sebuah fungsi bernama countCharacterFrequency yang menerima sebuah string dan mengembalikan sebuah objek yang menunjukkan jumlah kemunculan setiap huruf dalam string tersebut. Abaikan spasi.

// function countCharacterFrequency(str) {
//   // Hilangkan spasi dan ubah string menjadi huruf kecil
//   let cleanedString = str.replace(/\s+/g, "").toLowerCase();
  
//   // Objek untuk menyimpan hasil frekuensi
//   let frequency = {};
  
//   // Iterasi setiap huruf dalam string
//   for (let char of cleanedString) {
//     if (frequency[char]) {
//       frequency[char] += 1; // Tambahkan jika huruf sudah ada
//     } else {
//       frequency[char] = 1; // Inisialisasi jika huruf belum ada
//     }
//   }
  
//   return frequency; // Kembalikan objek frekuensi
// }

// console.log(countCharacterFrequency("hello world")); 
// // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

// console.log(countCharacterFrequency("javascript is awesome"));
// // Output: { j: 1, a: 3, v: 1, s: 3, c: 1, r: 1, i: 2, t: 1, e: 2, w: 1, o: 1, m: 1 }

// menghitung luas segitiga
// const alas = Number(prompt('Masukkan alas :'))
// const tinggi = Number(prompt('Masukkan tinggi :'))
// const hasil = 1/2 * alas * tinggi 
// if(isNaN(alas) | isNaN(tinggi)){
//   alert(`Haraf Masukkan angka`)
// }
// else{
//   alert(`Luas segitiga adalah : ${hasil}`)
// }

// reverse word
// function reverseString(word){
  
//   const hasil = word.split('').reverse().join('')
//   console.log(hasil)
// }
// reverseString('yogi')

// function isPrima(number){
  
//   if(number % 2 == 0 || number != 2){
//     console.log(`bilangan ${number} bukan bilangan prima`)
//   }
//   else{
//     console.log(`bilangan ${number} adalah bilangan prima`)
//   }
// }
// isPrima(2)

// ganjil number
// const numbers = Array.from({length : 100}, (_, index) => index + 1)
// for (let i = 1; i <= 100; i++){
//   if(i % 2 != 0){
//     console.log(i)
//   }
// }

// operasi penghitungan
// const input1 = Number(prompt('Masukkan angka peratama :'))
// const input2 = Number(prompt('Masukkan angka kedua :'))
// const input3 = Number(prompt('Apa yang ingin anda lakukan :\n 1. penjumlahan\n 2. pengurangan\n 3. perkalian\n 4. pembagian'))
// let hasil = []
// switch(input3){
//   case 1 :
//      hasil = input1 + input2
//     alert(`Hasil penjumlahan = ${hasil}`)
//     break
//   case 2 :
//     hasil = input1 - input2
//     alert(`Hasil pengurangan = ${hasil}`)
//     break
//   case 3 :
//     hasil = input1 * input2
//     alert(`Hasil perkalian = ${hasil}`)
//     break
//   case 4 :
//     hasil = input1 / input2
//     alert(`Hasil pembagian = ${hasil}`)
//     break
// }

// perbandingan detik ke jam dan menit

// function convertTime (second){
// const jam = Math.floor(second / 3600)
// const sisaWaktu = second % 3600
// const menit = Math.floor(sisaWaktu / 60)
// const detik = sisaWaktu % 60
// return `${jam}:${menit}:${detik}`
// }
// console.log(convertTime(3661))
// console.log(convertTime(7261))
// console.log(convertTime(7324))

// memfilter  bilangan terbesar dan terkecil

function findMaxMin(){
  let numbers = []
  for (let i = 0; i < 5; i++){
    let input = parseInt(prompt(`Masukkan angka ke -${i + 1}`))
    numbers.push(input)
  }
  const maxNumber = Math.max(...numbers)
  const minNumber = Math.min(...numbers)

  console.log(`Angka terbesar adalah ${maxNumber}`)
  console.log(`Angka terkecil adalah ${minNumber}`)
}

findMaxMin()


