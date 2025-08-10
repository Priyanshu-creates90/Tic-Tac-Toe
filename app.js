let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=() =>{
    turno=true;
    enableboxes();
    count=0;
    msgcontainer.classList.add("hide");
}
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turno){
            box.innerText="O";
            turno=false;
            count++;
        }
        else{
            box.innerText="X";
            turno=true;
            count++;
        }
        box.disabled =true;
        draw();
        checkwinner();
 });
 });

const draw=()=>{
    console.log(count);
    if (count>=9){
    msg.innerText= `draw`;
    msgcontainer.classList.remove("hide");
    }
 }
 const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
  const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
    const showwinner=(winner) =>{
        msg.innerText=  `Congratulations.Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
 const checkwinner=() => {
    for(let pattern of winpatterns){
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;
        
       if(pos1val!=""&&pos2val !="" &&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("winner",pos1val);
           
             showwinner (pos1val);
            }
            
       }
    }
 };
resetBtn.addEventListener("click",resetgame);
newGame.addEventListener("click",resetgame);
