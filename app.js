let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
let count = 0;

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        turno = !turno;
        box.disabled = true;
        count++;
        checkWinner();
        checkDraw();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText && 
            boxes[a].innerText === boxes[b].innerText && 
            boxes[b].innerText === boxes[c].innerText) {
            showWinner(boxes[a].innerText);
            return;
        }
    }
};

const checkDraw = () => {
    if (count === 9 && msgContainer.classList.contains("hide")) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => boxes.forEach(box => box.disabled = true);
const enableBoxes = () => boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
});

const resetGame = () => {
    turno = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
