// console.log(1);
// console.log(2);
// console.log(3);

// function worker() {
//     return new Promise(function (resolve, reject) {
//         let sum = 0;
//         for (let i = 0; i < 1000000000; i++) {
//             sum += i;
//         }
//         resolve(sum);
//     });
// }
// worker().then(result => console.log(result));
// console.log(4);
// console.log(5);


// function asyncWorker(callback) {
//     setTimeout(function () {
//         callback();
//     }, 3000);
// }

// function sayHello() {
//     console.log("Hello!");
// }

// setTimeout(sayHello, 5000);
// let intervalHandle = setInterval(sayHello, 1000);
// setTimeout(function() {
//     console.log("Stopping...");
//     clearInterval(intervalHandle);
// }, 7000);

function asyncWorker() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(2);
            resolve();
        }, 3000);
    });
}

async function main() {
    console.log(1);
    await asyncWorker();
    console.log(3);
}

main();

// asyncWorker()
// .then(function() {
//     console.log("Async work complete!");
//     console.log(6);
// });

/*
function add(a, b) {
    return a + b;
}

let add = (a, b) => {
    return a + b;
}

let add = (a, b) => a + b;

add(function () {

}, () => {});
*/