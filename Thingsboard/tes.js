let temp =  [{
        "ts": 1540892498884,
        "value": 22.4
    }, {
        "ts": 1540892528847,
        "value": 20.45
    }, {
        "ts": 1540892558845,
        "value": 22.3
    }]

const val = temp[0];
let sum = 0;
for (let i in temp){
    sum += temp[i]['value'];
}
const val2 = val[1];
console.log(sum);
