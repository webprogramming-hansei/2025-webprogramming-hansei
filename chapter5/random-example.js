let randomValue = Math.random();
let floorValaue = Math.floor(randomValue);
let roundValaue = Math.round(randomValue);
let ceilValue = Math.ceil(randomValue);
console.log('random', randomValue);
console.log('floor', floorValaue);
console.log('round', roundValaue);
console.log('ceil', ceilValue);

// 1부터 20까지의 랜덤 정수
let randValue = Math.floor(Math.random() * 20) + 1;
console.log('1~20', randValue);

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
