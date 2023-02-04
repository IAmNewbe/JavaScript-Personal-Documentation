
//.THEN = BERFUNGSI MENGAMBIL NILAI DARI PROMISE

const stock = {
    coffeeBeans: 2,
    water: 1000
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250){
            resolve("stock mencukupi untuk membuat kopi");
        }else {
            reject("stock tidak cukup");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock().then(handleSuccess, handleFailure);