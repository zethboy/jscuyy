// CARA BUAT OBJEK DI JAVASCRIPT 
// OBJEK LITERAL

// let mahasiswa1 = {
//   nama: 'yogi', 
//   energy : 10,
//   makan: function(porsi){
//     this.energy = this.energy + porsi
//     console.log(`selamat datang ${this.nama}, selamat makan!`)
//   }
// }

// let mahasiswa2 = {
//   nama: 'allea', 
//   energy : 10,
//   makan: function(porsi){
//     this.energy = this.energy + porsi
//     console.log(`selamat datang ${this.nama}, selamat makan!`)
//   }
// }

// FUNGSI DEKLARASI


function mahasiswa(nama, energy){
  let mahasiswa = {};
  mahasiswa.nama = nama
  mahasiswa.energy = energy

  mahasiswa.makan = function (porsi){
    this.energy += porsi
    console.log(`halo ${this.nama}, selamat makan`)
  }
  return mahasiswa
}
let yogi = mahasiswa('Yogi', 14)

// CONTRUCTION FUNCTION

// OBJEK CREATE