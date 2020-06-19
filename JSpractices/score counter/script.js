var p1_score = document.getElementById("p1-score");
var p2_score = document.getElementById("p2-score");
let limit = document.getElementById("limit");
let add_p1 = document.getElementById("addP1");
let add_p2 = document.getElementById("addP2");
let reset = document.getElementById("reset");
let num = document.getElementById("num");

limit.innerHTML = 5;
num.value = 5;

add_p1.addEventListener("click", function(){
    if(p1_score.innerHTML !== limit.innerHTML){
        p1_score.innerHTML ++;
    }
    if_won();
});

add_p2.addEventListener("click", function(){
    if(p2_score.innerHTML !== limit.innerHTML){
        p2_score.innerHTML ++;
    }
    if_won();
});

reset.addEventListener("click",function(){
    p1_score.innerHTML = 0;
    p2_score.innerHTML = 0;
    p1_score.classList.remove("winner");
    p2_score.classList.remove("winner");
});

num.addEventListener("change", function(){
    limit.innerHTML = num.value;
});

function if_won(){
    if(p1_score.innerHTML === limit.innerHTML){
        p1_score.classList.add("winner");
    } else if(p2_score.innerHTML === limit.innerHTML){
        p2_score.classList.add("winner");
    }
}
