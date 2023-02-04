// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
// };
 
// const isCoffeeMachineReady = true;
// // module.exports = {coffeeStock, isCoffeeMachineReady}; 
// //export default coffeeStock //if single Value
// export {coffeeStock, isCoffeeMachineReady};

class Wolf {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    howl() {
      return 'Auuuuuuuuu';
    }
  }
  
  // TODO 2
  module.exports = Wolf; 