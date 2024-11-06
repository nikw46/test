// 設定測驗問題
const questions = [
    {
        question: "你通常選擇什麼交通方式？",
        options: ["開車", "大眾運輸", "步行或騎車"]
    },
    {
        question: "你每週吃肉的頻率是？",
        options: ["每天", "3-4 次", "很少或不吃"]
    },
    {
        question: "突然獲得一個休假日你會？",
        options: ["在家睡覺", "約朋友出門", "自己出門走走"]
    }
];

let currentQuestionIndex = 0;

// 開始測驗，顯示第一題
function startQuiz() {
    goToStep('quiz');
    loadQuestion();
}

// 載入測驗題目
function loadQuestion() {
    const questionContainer = document.getElementById("questionContainer");
    const questionData = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options.map((option, index) => `
            <button class="option-button" onclick="nextQuestion()">${option}</button>
        `).join('')}
    `;
}

// 切換至下一個步驟或問題
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        goToStep('inputName');
    }
}

// 切換至下一個步驟
function goToStep(stepId) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(stepId).style.display = 'block';
}

// 確認名字
function checkName() {
    const userNameInput = document.getElementById("userNameInput").value;
    const correctName = "許芳綺";  // 修改為目標名字

    if (userNameInput === correctName) {
        goToStep('finalChoice');
    } else {
        document.getElementById("nameError").style.display = 'block';
    }
}

// 根據選擇顯示結果
function goToResult(choice) {
    if (choice === 'yes') {
        goToStep('congrats');
    } else if (choice === 'think') {
        goToStep('thinkAgain');
    }
}
