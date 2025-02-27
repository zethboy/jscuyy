// CARA BUAT OBJEK DI JAVASCRIPT 
// OBJEK LITERAL
// TIDAK EFEKTIF UNTUK OBJEK YANG BANYAK
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

const methodMhs = {
  makan : function (porsi){
    this.energy += porsi
    console.log(`halo ${this.nama}, selamat makan`)
  }
}

function mahasiswa(nama, energy){
  let mahasiswa = {};
  mahasiswa.nama = nama
  mahasiswa.energy = energy
  mahasiswa.makan = methodMhs.makan

 
  return mahasiswa
}
let yogi = mahasiswa('Yogi', 14)

// CONTRUCTION FUNCTION

// function mahasiswa(nama, energy){
//   this.nama = nama
//   this.energy = energy

//   this.makan = function (porsi){
//     this.energy += porsi
//     console.log(`halo ${this.nama}, selamat makan`)
//   }
// }

// let allea = new mahasiswa('allea', 12)


// OBJEK CREATE