function changeTitle() {
    let titleElement = document.querySelector('#title');
    titleElement.innerHTML = '우아 바꼈네';
}

let eventTestButton = document.querySelector('#eventTestButton');
eventTestButton.addEventListener('click', () => {
    let titleElement = document.querySelector('#title');
    titleElement.innerHTML = '우아 바꼈네';
});

let addHandsomeButton = document.querySelector('#addHandsomeButton');
addHandsomeButton.addEventListener('click', () => {
    let ulElement = document.querySelector('ul');
    let newLi = document.createElement('li');
    newLi.innerHTML = '박종진';
    ulElement.appendChild(newLi);
});