function contactus(){
    alert("Contact us at 555-5555");
}

var count =0;
var shopCart = document.querySelector(".cart")
function buy(){
    count++;
    shopCart.innerText= count;
}
var count =0;
var shopCart = document.querySelector(".cart")
function buy1(){
    count++;
    shopCart.innerText= count;
}
var count =0;
var shopCart = document.querySelector(".cart")
function buy2(){
    count++;
    shopCart.innerText= count;
}
var count =0;
var shopCart = document.querySelector(".cart")
function buy3(){
    count++;
    shopCart.innerText= count;
}
// const changes= document.querySelector("#selling");
// changes.addEventListener('change', (event) => {
//     const result = document.querySelector('.result');
//     result.textContent = `You like ${event.target.value}`;
//   });
var x = document.getElementById("selling");
function changeCart(){
    if(x.value =='Best-Selling'){
    document.getElementById("spn").innerText= "Best Selling";
    }else if(x.value =='Price')
    document.getElementById("spn").innerText= "Price";
}

