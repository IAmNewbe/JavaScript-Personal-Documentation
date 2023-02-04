try {
    console.log("Awal blok try");
    wkwk
    console.log("Akhir blok try");
} catch (error) {
    console.log("terjadi eror");
    console.log(error.name); //Nama error yang terjadi.
    console.log(error.message); //Pesan tentang detail error.
    console.log(error.stack); //Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.
}finally{
    console.log("akan tetap dijalankan no matter what")
}
 
/* output
Awal blok try
Akhir blok try
*/
