console.log('Hello, world!');

for (let i = 1; i <= 15; i++) {
    console.log('Count: ' + i);
}

// 1부터 1000까지의 수 중 3의 배수의 합을 구하는 코드
let sum = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
        sum = sum + i; 
    }
}
console.log(sum);