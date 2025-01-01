let highest =0;
function play(){
//  let highest =0;
let gameSeq = [];
let userSeq = [];
let score = document.querySelector("#score");
let bcodes=['b1','b2','b3','b4'];
let started = 0;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == 0) {
    started = 1;
    level = 0;
    console.log(gameSeq);
   
    levelup();
  }
});

function btnFlash(btn) {
    
    btn.classList.add("flash");
    // console.log("flash")
    setTimeout(function () {
      btn.classList.remove("flash");
    }, 250);
    
  }
function levelup() {
  userSeq=[];
    level++;
    score.innerText=`Level ${level}`;
    
    let num = Math.floor(Math.random() * 4);
    let bcode= bcodes[num];
    console.log("g:"+bcode);
    let sbtn = document.querySelector(`.${bcode}`);
    gameSeq.push(bcode);
    btnFlash(sbtn);
    console.log(gameSeq);

    
    
  }
  
  function check(i) {
    console.log("i:",i);
    
    if(userSeq[i]===gameSeq[i]){
      console.log("correct");
     

      if(userSeq.length===gameSeq.length)
       { levelup();
        }
      
    }else{ if(level>highest){ highest=level;}
      score.innerHTML=`Game Over! 
                               <br> 
                       <i>your score was ${level}.</i> 
                       <br>
                       <i>highest score is ${highest}.</i>
                       <br>          
                       <i>press Any key to start again</i>`;
      document.addEventListener("keypress", play () )
    }

  }

function btnpre() {
  // console.log(this)
  let bcode=this.getAttribute("id");
  // console.log("u:"+bcode);
  userSeq.push(bcode);
   console.log(userSeq);

  
  check(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".box");
for (btn of allBtns) {
  btn.addEventListener("click",btnpre);
  
}

}
play();