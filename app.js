let gameSeq = [];
let userSeq = [];

let colors = ["yellow", "green", "purple", "red"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {

    if (start === false) {
        console.log("Game started");
        start = true;
    }

    levelUp();
})

function btnFlash(select) {
    select.classList.add("flash");

    setTimeout(function () {
        select.classList.remove("flash")
    }, 300);
}

function userFlash(select) {
    select.classList.add("userFlash");

    setTimeout(function () {
        select.classList.remove("userFlash")
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq)
    btnFlash(randBtn);
}


function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1)
};

function checkAns(idx) {
    // console.log(`current level : ${level}`)


    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {

            setTimeout(levelUp, 1000);
        }

        console.log("same valuse");

    } else {
        h2.innerHTML = `Game over Your Score was <b>${level}</b> <br/> Press any key to start`;

        setInterval(function () {
            document.querySelector("body").style.backgroundColor = "red"
        }, 100);
        reset();
    }

}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
