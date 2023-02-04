
//PROMISE TANPA ASYNC_AWAIT
/*const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
 
makeCoffee();
*/

//MENGGUNAKAN ASYNC AWAIT
const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 1;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

async function makeCoffee (){
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    }
    catch(rejectedReason){
        console.log(rejectedReason);
    }   
}

makeCoffee();

/*
async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeEspresso();
*/