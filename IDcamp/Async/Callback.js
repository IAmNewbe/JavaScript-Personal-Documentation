const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(() => {
        coffee = "kopi sudah jadi";
        callback(coffee);
    }, 3000);
    
}

// const coffee = orderCoffee();
// console.log(coffee); //null
orderCoffee(coffee => {
    console.log(coffee);
});