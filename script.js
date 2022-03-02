'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expect;

// const answer = ["n","a","s","t","y"];
const answers = ["nasty","style","young","human","world","night","phone","cream","index","saint"];
let j = 0;
const bgcr = document.querySelectorAll("body")[0];

//正解の設定

const answer = answers[Math.floor(Math.random()*9)]
let success = 0;

const digle = function(guessWord) {
    
    let guessLetters = [];
    let ansLetter = 0;

    if (answer === guessWord){
        success = 1;
    }

    if (guessWord.length !== 5){
        const error = document.getElementById("error");
        error.innerText = "Error! Wrong length.";
        return "Error! Wrong length.";
    }

    for (let i = 0; i < 5; i++){
        guessLetters.push(guessWord[i]);
    }

    let result = guessLetters.map((letter,index) => {
        ansLetter = answer.indexOf(letter);

        if (ansLetter === -1){
            return "black";
        } else if (ansLetter === index) {
            return "green";
        } else {
            return "yellow";
        }
    })
    return appear(guessLetters,result);
}

const appear = (letters,colors) => {
    j ++;
    for (let c = 1; c <= 5; c++){
        document.getElementById(`c${j}${c}`).innerText = letters[c-1];
        document.getElementById(`c${j}${c}`).style.color = colors[c-1];
    }
    if (success === 1){
        description.innerText = "Success!";
        error.innerText = "";
        bgcr.style.background =  "linear-gradient(45deg, rgba(192, 64, 198, 0.8) -141%, rgba(229, 233, 77, 0.8))";
        setTimeout(() => {
            window.location.reload();
        }, 8000);

    }
    if (j > 5){
        buttonElement.removeEventListener("click",callDigle);
        description.innerText = "残念！ 2秒後に更新";
        description.style.color = "red";
        bgcr.style.background =  "linear-gradient(45deg, rgba(139, 86, 38, 0.8) 39%, rgba(245, 228, 41, 0.8))";
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
}

const callDigle = () => {

    const input = document.getElementById("guess").value;
    digle(input);
}

const buttonElement = document.getElementById("submit");

buttonElement.addEventListener("click",callDigle);
