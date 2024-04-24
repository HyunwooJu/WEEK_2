const readline = require('readline');

// 1부터 100 사이의 랜덤한 숫자 생성
const randomNumber = Math.floor(Math.random() * 100) + 1;

// 사용자로부터 입력을 받기 위한 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 사용자가 숫자를 맞출 때까지 반복
let attempts = 0;
function askQuestion() {
    rl.question("1부터 100 사이의 숫자를 맞춰보세요: ", (input) => {
        // 입력한 횟수 증가
        attempts++;

        // 입력한 숫자를 정수로 변환
        const guess = parseInt(input);

        // 입력한 숫자와 랜덤한 숫자 비교
        if (guess === randomNumber) {
            console.log(`정답입니다! 숫자는 ${randomNumber}였습니다.`);
            console.log(`시도한 횟수: ${attempts}`);
            rl.close();
        } else if (guess > randomNumber) {
            console.log("더 낮은 숫자입니다.");
            askQuestion();
        } else {
            console.log("더 높은 숫자입니다.");
            askQuestion();
        }
    });
}

askQuestion();
