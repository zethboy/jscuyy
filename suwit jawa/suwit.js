function getPilKom(){
  const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getRules(comp, user){
  if( user == comp ) return 'SERI!';
   if( user == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
   if( user == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
   if( user == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
   return 'memasukkan pilihan yang salah!';
}