let person = {
    name: '박종진',
    age: 30,
    hobbies: ['축구', '독서', '코딩'],
    tall: 175,
    gender: '',
    height: 180,
    sayHello: function() {
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }
}

let dog = {
    name: '뽀삐',
    age: 3,
    breed: '골든리트리버',
    bark: function() {
        console.log('멍멍!');
    }
}

let dog2 = {
    name: '뽀삐2'
}

let dog3 = { ...dog }
dog3.name = "뽀삐3";

let personDog = { ...person, ...dog };


console.log(person.name);
console.log(person.sayHello());
console.log(dog.bark());
console.log(dog3.bark());
