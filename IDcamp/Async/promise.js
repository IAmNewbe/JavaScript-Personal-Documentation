const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true; //false => else
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    }else{
        reject("Mesin kopi tidak bisa digunakan");
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);