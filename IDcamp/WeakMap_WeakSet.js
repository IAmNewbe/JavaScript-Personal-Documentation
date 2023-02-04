// Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
// WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
// WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.

// let visitsCountMap = new Map(); // Menyimpan daftar user

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let jonas = { name: "Jonas" };
// countUser(jonas);                // Menambahkan user "Jonas"

// jonas = null;                    // Data object "Jonas" dihapus

// // delay dibutuhkan untuk menunggu garbage collector bekerja
// setTimeout(function() {
//    console.log(visitsCountMap);
// }, 10000)

// /* output
// Map(1) { { name: 'Jonas' } => 1 }
// */

const { inspect } = require('util');

let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/