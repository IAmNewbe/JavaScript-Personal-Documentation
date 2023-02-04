
let abc = prompt('Input data: ');

let array = [2,4,5,6,8];

for (let i = 0; i<array.length - 1 ; i++){
    for (let j = 0; j < array.length- 1; j++){
        if (array[j]>array[j+1]){
            let a = array[j];
            array[j] = array[j+1];
            array[j+1] = a;
        }
    }
} 

console.log(array);
console.log(abc);