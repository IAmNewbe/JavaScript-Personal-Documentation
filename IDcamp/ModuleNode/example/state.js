//Pada ES6 module, jika kita hanya mengekspor satu nilai pada sebuah berkas JavaScript baik itu 
//primitive value, function, array, object ataupun class, kita gunakan keyword export default

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200,
};

const isCoffeeMakerReady = true;

// export default coffeeStock;
export {coffeeStock, isCoffeeMakerReady};

