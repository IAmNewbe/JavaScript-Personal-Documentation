
console.log('Selamat datang!');
 
setTimeout(() => {
  console.log('Terimakasih sudah mampir, silakan datang kembali!')
}, 3000);
 
console.log('Ada yang bisa dibantu?');

//Callback function 

const getCake = callback => {
    let cake = null;
    console.log('sedang membuat kue, silakan tunggu ....');

    setTimeout(function() {
        cake = 'kue selesai.';
        callback(cake);
    }, 3000);

    return cake;
};

getCake(cake => {
    console.log(cake);
});