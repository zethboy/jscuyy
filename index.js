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
const arraySaya = ['Yogi', 'Aya']
console.log(arraySaya)
arraySaya.push ('nadine')
console.log(arraySaya)

if (arraySaya.includes('nadine')){
    const posisi = arraySaya.indexOf('nadine')
    console.log(`posisi Aya ada di index ke ${posisi}`)
}
else {
    console.log(`Aya tidak ada`)
}