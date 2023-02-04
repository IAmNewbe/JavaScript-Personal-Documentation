
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;

    if (isCoffeeMakerReady) {
        resolve('Kopi berhasil dibuat');
    } else {
        reject('Mesin Kopi tidak bisa digunakan!');
    }
};

const makeCoffee = new Promise(executorFunction);
console.log(makeCoffee);

const Mesin = (resolve, reject) => {
    const isTeaReady = false;
    if (isTeaReady) {
        resolve('Teh Berhasil dibuat');
    } else {
        reject('Mesin Kopi tidak bisa digunakan');
    }
};

const HandlerSuccess = resolvedValue => {
    console.log(resolvedValue);
};

const HandlerRejected = rejectionReason => {
    console.log(rejectionReason);
};

const makeTea = new Promise(Mesin);
makeTea.then(HandlerSuccess, HandlerRejected);

//ONREJECTED WITH CATCH

const Milky = (resolve, reject) => {
    const isMilkReady = false;
    
    if (isMilkReady) {
        resolve("Milk Ready to serve");
    } else {
        reject("Mesin susu tidak dapat digunakan.");
    }
}

const handlerSuccess = resolvedValue => {
    console.log(resolvedValue);
};

const handlerRejected = rejectionReason => {
    console.log(rejectionReason);
};

const makeMilk = new Promise(Milky);
makeMilk
    .then(handlerSuccess)
    .catch(handlerRejected)

//Promise Berantai
const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
        Arabica: 250,
        Robusta: 60,
        Liberica: 80,
    },
};

const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if (state.seedStocks[type] >= miligrams) {
            state.seedStocks[type] -= miligrams;
            resolve('Biji kopi didapatkan');
        } else {
            reject('Maaf stock kopi habis');
        }
    });
};

function reserveACoffee(type, miligrams) {
    getSeeds(type, miligrams)
        .then(MakeCoffee)
        .then(servingToTable)
        .then(resolvedValue => {
            console.log(resolvedValue);
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
        });
}

const MakeCoffee = seeds => {
    return new Promise((resolve, reject) => {
        if (state.isCoffeeMakerReady) {
            resolve('Kopi berhasil diciptakan');
        } else {
            reject('Maaf Mesin sedang Rusak');
        }
    });
};

const servingToTable = coffee => {
    return new Promise(resolve => {
        resolve('Pesanan kopi sudah siap')
    });
};

reserveACoffee("Arabica", 380);

//PROMISE ALL
const arabicaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Kopi arabica selesai');
        }, 4000);
    });
};

const robustaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Kopi robusta selesai');
        }, 2000);
    });
};

const libericaOrder = () => {
    return new Promise(resolve => {
        resolve('Kopi liberica selesai');
    }, 3000);
};

const promise = [arabicaOrder(), robustaOrder(), libericaOrder()];

Promise.all(promise)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });

    