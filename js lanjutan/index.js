// CARA BUAT OBJEK DI JAVASCRIPT 
// OBJEK LITERAL

let mahasiswa1 = {
  nama: 'yogi', 
  energy : 10,
  makan: function(porsi){
    this.energy = this.energy + porsi
    console.log(`selamat datang ${this.nama}, selamat makan!`)
  }
}

let mahasiswa2 = {
  nama: 'allea', 
  energy : 10,
  makan: function(porsi){
    this.energy = this.energy + porsi
    console.log(`selamat datang ${this.nama}, selamat makan!`)
  }
}

// FUNGSI DEKLARASI

// CONTRUCTION FUNCTION

// OBJEK CREATE