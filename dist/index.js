const BTN = ["Top1", "Top2", "Top3",
    "Mid1", "Mid2", "Mid3",
    "Btm1", "Btm2", "Btm3",
];
const WINNING_PROB = [
    ["Top1", "Top2", "Top3"],
    ["Mid1", "Mid2", "Mid3"],
    ["Btm1", "Btm2", "Btm3"],
    ["Top1", "Mid1", "Btm1"],
    ["Top2", "Mid2", "Btm2"],
    ["Top3", "Mid3", "Btm3"],
    ["Top3", "Mid2", "Btm1"],
    ["Top1", "Mid2", "Btm3"]
];


function Start() {
    for (let i = 0; i < BTN.length; i++) {
        let btn = document.getElementById(BTN[i]);
        if (btn.disabled) {
            btn.removeAttribute("disabled");
        }
        btn.classList.add("cursor-pointer");
        btn.classList.remove("cursor-not-allowed");
    }
    sessionStorage.setItem("turn", "X");
}

function Play(id) {
    let CurrentBtn = document.getElementById(id);
    let value = sessionStorage.getItem("turn");
    if (value == "X") {
        CurrentBtn.setAttribute("disabled", "");
        CurrentBtn.classList.remove("cursor-pointer");
        CurrentBtn.classList.add("cursor-not-allowed");
        CurrentBtn.innerHTML = "X";
        document.getElementById("turn").innerHTML = "O";
        sessionStorage.setItem("turn", "O");
    } else if (value == "O") {
        CurrentBtn.setAttribute("disabled", "");
        CurrentBtn.classList.remove("cursor-pointer");
        CurrentBtn.classList.add("cursor-not-allowed");
        CurrentBtn.innerHTML = "O";
        document.getElementById("turn").innerHTML = "X";
        sessionStorage.setItem("turn", "X");
    }
winner();
}

function winner(){
    try{
        let winner = "None";
        let k=0;
        for (let i = 0; i < WINNING_PROB.length; i++) {
            k=0;
            for (let j = 0; j < WINNING_PROB[i].length; j++) {
                if (document.getElementById(WINNING_PROB[i][j]).innerText === "X") {
                    k++;
                }
            }
            if(k==3){
                winner="X";
                DisableBtn();
                let wins =parseInt(document.getElementById("P1").innerText);
                document.getElementById("P1").innerHTML=wins+1;
                document.getElementById("winner").innerHTML="X";
                return true;
            }
        }

        for (let i = 0; i < WINNING_PROB.length; i++) {
            k=0;
            for (let j = 0; j < WINNING_PROB[i].length; j++) {
                if (document.getElementById(WINNING_PROB[i][j]).innerText === "O") {
                    k++;
                }
            }
            if(k==3){
                winner="O";
                DisableBtn();
                let wins =parseInt(document.getElementById("P2").innerText);
                document.getElementById("P2").innerHTML=wins+1;
                document.getElementById("winner").innerHTML="O";
                return true;
            }
        }
if(winner=="None"){
    let z=0;
    for(let k=0;k<9;k++){
        if(document.getElementById(BTN[k]).innerText==""){
z++;
        }
    }
    if(z==0){
        let draw =parseInt(document.getElementById("draw").innerText);
        document.getElementById("draw").innerHTML=draw+1;
    }
}
    }catch(error){
        console.log("Error");
    }
}

function DisableBtn(){
    for(let i=0; i<BTN.length; i++){
        let CurrentBtn =document.getElementById(BTN[i]);
        if(!BTN[i].disabled){
            CurrentBtn.setAttribute("disabled", "");
        CurrentBtn.classList.remove("cursor-pointer");
        CurrentBtn.classList.add("cursor-not-allowed");
        }
    }
}

function PlayAgain(){
    for(let k=0;k<BTN.length;k++){
document.getElementById(BTN[k]).innerHTML="";
document.getElementById(BTN[k]).removeAttribute('disabled');
document.getElementById(BTN[k]).classList.remove('cursor-not-allowed');
document.getElementById(BTN[k]).classList.add("cursor-pointer");
    }
}