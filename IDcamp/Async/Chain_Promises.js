const state = {
    stock: {
        coffeeBeans: 250,
        water:1000
    },
    isMachineCoffeeBusy: false
}

const checkAvailability = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (!state.isMachineCoffeeBusy){
                resolve("Mesin Kopi siap");
            }else{
                reject("mesin Kopi tidak siap");
            }
        }, 1000);
    });
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isMachineCoffeeBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250){
                resolve("Stock cukup");
            }else{
                reject("Stock tidak cukup");
            }
        },1000);
    })
}

const brewCoffee = () => {
    console.log("...sedang membuat kopi")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap")
        }, 2000);
    });
}

function makeCoffee() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isMachineCoffeeBusy = false;
        })
        .catch((rejectionReason) => {
            console.log(rejectionReason);
            state.isCoffeeMachineBusy = false;
        })
}

makeCoffee();