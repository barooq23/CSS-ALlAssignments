// var y2 = document.getElementById("high1").innerText;
// var x1 = parseInt(y2);

// var y4 = document.getElementById("low1").innerText;
// var x4 = parseInt(y4);
// function change() {
//   var x = document.getElementById("temp").value;
//   if (x == "F") {
//     const nodeList = document.querySelectorAll(".high");
//     const nodeList1 = document.querySelectorAll(".low");
//     for (i = 0; i < nodeList.length; i++) {
//       var z = nodeList[i].innerText;
//       var t = parseInt(z);
//       nodeList[i].innerText = Math.floor(z * 1.8 + 32);
//     }
//     for (i = 0; i < nodeList1.length; i++) {
//       var z = nodeList1[i].innerText;
//       var t = parseInt(z);
//       nodeList1[i].innerText = Math.floor(z * 1.8 + 32);
//     }
//   } else {
//     const nodeList = document.querySelectorAll(".high");
//     const nodeList2 = document.querySelectorAll(".low");
//     for (i = 0; i < nodeList.length; i++) {
//       var z1 = nodeList[i].innerText;
//       var t1 = parseInt(z1);
//       nodeList[i].innerText = Math.floor(((z1 - 32) * 5) / 9);
//     }
//     for (i = 0; i < nodeList2.length; i++) {
//       var z2 = nodeList2[i].innerText;
//       var t2 = parseInt(z2);
//       nodeList2[i].innerText = Math.floor(((z2 - 32) * 5) / 9);
//     }
//   }
// }
var degreeslow= document.querySelectorAll(".low");
var degreeshight= document.querySelectorAll(".high");
var se = document.getElementById('temp');

//This funcation will do ....
function changeTemp(temp){
  var TempRate = 1.8
  var TempPLus = 32
  if(temp.value == "F"){
for(var i=0;i<degreeslow.length;i++){
  degreeslow[i].innerText = Math.floor(((parseInt(degreeslow[i].innerText))*TempRate)+TempPLus);
  degreeshight[i].innerText = Math.floor(((parseInt(degreeshight[i].innerText))*1.8)+32);
}
}
if(temp.value == "C"){
  for(var i=0;i<degreeslow.length;i++){
    degreeslow[i].innerText = Math.ceil((parseInt(degreeslow[i].innerText)-32)*.55555);
    degreeshight[i].innerText = Math.ceil(((parseInt(degreeshight[i].innerText))-32)*.55555);
  }
  }
}

function remove(el){
  el.parentElement.parentElement.remove();
}
function city(){
  alert("loading weather...");
}
