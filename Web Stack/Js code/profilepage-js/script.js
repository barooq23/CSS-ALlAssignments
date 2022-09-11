
var el=document.querySelector(".user");
count=2;
count1=500;
function change(){
    el.innerText="laith barq";
}
function remove1(){
    count-=1;
    document.getElementById("li1").remove();
    document.getElementById("count").innerText=count;
}

function remove2(){
    count-=1;
    document.getElementById("li2").remove();
    document.getElementById("count").innerText=count;
}

function add1(){
    count-=1;
    count1+=1;
    document.getElementById("li1").remove();

    document.getElementById("count").innerText=count;
    document.getElementById("count1").innerText=count1;
}

function add2(){
    count-=1;
    count1+=1;
    document.getElementById("li2").remove();

    document.getElementById("count").innerText=count;
    document.getElementById("count1").innerText=count1;
}
