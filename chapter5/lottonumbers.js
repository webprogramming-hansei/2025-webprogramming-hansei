// 1~45까지의 수 중 랜덤하게 6개 추출
// 방법 1
// 1. 랜덤하게 1부터 45까지의 수 중 1하나를 생성
// 2. 생성한 수를 배열에 추가, 단, 배열에 이미 존재하면, 다시 2번 수행
// 3. 총 6개의 수가 배열에 추가되면, 1~2번 반복동작을 종료
let lottoNumbers = [];

while (lottoNumbers.length < 6) {  
    let randNum = Math.floor(Math.random() * 45) + 1;
    if (!lottoNumbers.includes(randNum)) {
        lottoNumbers.push(randNum);
    } 
}
lottoNumbers.sort((a, b) => a - b);
console.log('lotto numbers', lottoNumbers);

// 방법 2
// 1. 배열에 1부터 45까지의 수를 추가
// 2. 배열에서 숫자 한개씩 추출
// 3. 2번은 총 6번 수행
let lottoNumbers2 = [];
for (let i = 1; i <= 45; i++) {
    lottoNumbers2.push(i);
}   
let selectedNumbers = [];   
for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * lottoNumbers2.length);
    let selectedNum = lottoNumbers2.splice(index, 1)[0];
    selectedNumbers.push(selectedNum);
}
selectedNumbers.sort((a, b) => a - b);
console.log('lotto numbers 2', selectedNumbers);