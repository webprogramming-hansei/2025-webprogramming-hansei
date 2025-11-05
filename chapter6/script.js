// 번호별 색상 매핑 함수
function getColorClass(number) {
    if (number >= 1 && number <= 10) return 'ball-yellow';
    if (number >= 11 && number <= 20) return 'ball-blue';
    if (number >= 21 && number <= 30) return 'ball-red';
    if (number >= 31 && number <= 40) return 'ball-gray';
    if (number >= 41 && number <= 45) return 'ball-green';
    return 'ball-gray';
}

// 로또번호 생성 함수 (1~45 중 중복없는 6개)
function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.sort((a, b) => a - b); // 오름차순 정렬
}

// 현재 시간 포맷팅
function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 결과 화면에 번호 표시
function displayResult(numbers) {
    const resultBalls = document.getElementById('resultBalls');
    resultBalls.innerHTML = '';
    
    numbers.forEach((num, index) => {
        setTimeout(() => {
            const ball = document.createElement('div');
            ball.className = `lotto-ball ${getColorClass(num)}`;
            ball.textContent = num;
            ball.style.animationDelay = `${index * 0.1}s`;
            resultBalls.appendChild(ball);
        }, index * 100);
    });
}

// 히스토리에 추가
function addToHistory(numbers, time) {
    const historyList = document.getElementById('historyList');
    
    // 빈 메시지 제거
    const emptyMessage = historyList.querySelector('.empty-message');
    if (emptyMessage) {
        emptyMessage.remove();
    }
    
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    
    const timeDiv = document.createElement('div');
    timeDiv.className = 'history-time';
    timeDiv.textContent = time;
    
    const numbersDiv = document.createElement('div');
    numbersDiv.className = 'history-numbers';
    
    numbers.forEach(num => {
        const ball = document.createElement('div');
        ball.className = `history-ball ${getColorClass(num)}`;
        ball.textContent = num;
        numbersDiv.appendChild(ball);
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '삭제';
    deleteBtn.onclick = () => {
        historyItem.remove();
        saveHistory();
        
        // 히스토리가 비어있으면 빈 메시지 표시
        if (historyList.children.length === 0) {
            historyList.innerHTML = '<p class="empty-message">아직 생성된 번호가 없습니다</p>';
        }
    };
    
    historyItem.appendChild(timeDiv);
    historyItem.appendChild(numbersDiv);
    historyItem.appendChild(deleteBtn);
    
    historyList.insertBefore(historyItem, historyList.firstChild);
}

// 로컬 스토리지에 히스토리 저장
function saveHistory() {
    const historyList = document.getElementById('historyList');
    const items = historyList.querySelectorAll('.history-item');
    const history = [];
    
    items.forEach(item => {
        const time = item.querySelector('.history-time').textContent;
        const numbers = Array.from(item.querySelectorAll('.history-ball')).map(ball => parseInt(ball.textContent));
        history.push({ time, numbers });
    });
    
    localStorage.setItem('lottoHistory', JSON.stringify(history));
}

// 로컬 스토리지에서 히스토리 불러오기
function loadHistory() {
    const saved = localStorage.getItem('lottoHistory');
    if (saved) {
        const history = JSON.parse(saved);
        history.forEach(item => {
            addToHistory(item.numbers, item.time);
        });
    }
}

// 히어로 섹션에 45개의 공 생성
function createFloatingBalls() {
    const container = document.getElementById('floatingBalls');
    
    for (let i = 1; i <= 45; i++) {
        const ball = document.createElement('div');
        ball.className = `floating-ball ${getColorClass(i)}`;
        ball.textContent = i;
        
        // 랜덤 위치
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        ball.style.left = `${randomX}%`;
        ball.style.top = `${randomY}%`;
        
        // 랜덤 애니메이션 속도
        const randomDuration = 15 + Math.random() * 20; // 15~35초
        const randomDelay = Math.random() * 5; // 0~5초
        ball.style.animationDuration = `${randomDuration}s`;
        ball.style.animationDelay = `${randomDelay}s`;
        
        container.appendChild(ball);
    }
}

// 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    // 히어로 섹션 공 생성
    createFloatingBalls();
    
    // 히스토리 불러오기
    loadHistory();
    
    // 생성 버튼 클릭
    document.getElementById('generateBtn').addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        const time = getCurrentTime();
        
        displayResult(numbers);
        addToHistory(numbers, time);
        saveHistory();
    });
    
    // 히스토리 전체 삭제
    document.getElementById('clearHistoryBtn').addEventListener('click', () => {
        if (confirm('모든 히스토리를 삭제하시겠습니까?')) {
            const historyList = document.getElementById('historyList');
            historyList.innerHTML = '<p class="empty-message">아직 생성된 번호가 없습니다</p>';
            localStorage.removeItem('lottoHistory');
        }
    });
});
