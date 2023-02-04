//NORMAL CONDITION NO ERROR
/*
let json = '{ "name": "Yoda", "age": 20 }';
// JSON.parse akan melakukan parsing atau konversi dari variabel json (String) 
//menjadi sebuah object. Skenario 
//seperti di atas akan banyak kita temui 
//ketika melakukan request ke API.
try {
    let user = JSON.parse(json);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

*/

//IF THERE'S MISSING VARIABLE
let json = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        //THROWING ERRROR
        throw new SyntaxError("'name' is required.");
    }
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

//JIKA ADA VARIABLE YG TIDAK TERDEFINISI
let jon = '{ "name": "Yoda", "age": 20 }';
try {
    let use = JSON.parse(jon);
 
    if (!use.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(use.name); // Yoda
    console.log(use.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
