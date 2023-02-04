/*
Ketika pergi ke sebuah kedai kopi bersama rekan kerja, 
kita biasanya memesan kopi secara bersamaan. 
Meskipun kopi yang kita pesan berbeda, 
tak jarang pelayanan mengantarkan pesanan bersamaan. Nah, 
pada kasus inilah pelayan menggunakan teknik Promise.all().
*/

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

const boilWater = () => {
    return new Promise((resolve, reject) => {
      console.log('Memanaskan air...');
      setTimeout(() => {
        resolve('Air panas sudah siap!');
      }, 2000);
    });
  };
   
  const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
      console.log('Menggiling biji kopi...');
      setTimeout(() => {
        resolve('Bubuk kopi sudah siap!');
      }, 1000);
    });
  };

function makeEspresso() {
    checkAvailability()
      .then((value) => {
        console.log(value);
        return checkStock();
      })
      .then((value) => {
        console.log(value);
        const promises = [boilWater(), grindCoffeeBeans()];
   
        return Promise.all(promises);
      })
      .then((value) => {
        console.log(value)
        return brewCoffee();
      })
      .then((value) => {
        console.log(value);
        state.isCoffeeMachineBusy = false;
      })
      .catch((rejectedReason) => {
        console.log(rejectedReason);
        state.isCoffeeMachineBusy = false;
      });
  }
   
  makeEspresso();