let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turn0 = true; //player x annd player 0

const winPatterns= [

[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box)=> {
box.addEventListener( "click", ()=>{
console.log("box was cliked");
if (turn0) {
    //player 0

box.innerText = "0";
    turn0 = false;
}else {
    // player x

   box.innerText = "x" 
   turn0 = true;}
   box.disabled = true
   checkWinner();
    });
    });
    const disableboxs = () =>{
        for (let box of boxes )
    {box.disabled = true}
    } 

     const enableboxes = () =>{
        for (let box of boxes )
    {box.disabled = false
     box.innerText="";
    }
    } 
    const showWinner = (winner ) => {
        msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
        msgcontainer.classList.remove("hide"); 
        disableboxs();
    }

    const checkWinner = () => {
       for(let pattern of winPatterns){
             
            let pos1Val = boxes[pattern[0]].innerText,
                pos2Val = boxes[pattern[1]].innerText,
                pos3Val = boxes[pattern[2]].innerText;
          
        if(pos1Val !="" && pos2Val !=""  && pos3Val !=""){

            if( pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val)
                showWinner(pos1Val);
            }
        }

        }

    };

    resetbtn.addEventListener("click", resetgame);
newGamebtn.addEventListener("click", resetgame);

