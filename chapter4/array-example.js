let handsomePeople = ['차은우', '김수현', '이민호', '박보검', '박종진'];
console.log(handsomePeople[0]);
console.log(handsomePeople[1]);

for (let i = 0; i < handsomePeople.length; i++) {
    console.log(handsomePeople[i]);
}

handsomePeople.push('송중기');
console.log(handsomePeople[handsomePeople.length - 1]);
handsomePeople.pop();
console.log(handsomePeople[handsomePeople.length - 1]);

// let length = handsomePeople.length;
// for (let i = 0; i < length; i++) {
//     handsomePeople.pop();
// }
// console.log(handsomePeople);

handsomePeople.sort();
console.log(handsomePeople);

let numbers = [20, 30, 34, 40, 42, 45, 1, 11, 100];
function compare(a, b) {
    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
}
numbers.sort(compare);
console.log(numbers);
