var fruits=["banana","orang","apple","mango"];
function addFirst(fruits,variable){
var newArr=[];
newArr[0]= variable;
for (var i=1;i<fruits.length+1;i++){
newArr[i]= fruits[i-1];
}
return newArr;

}
fruits = addFirst(fruits, "kiwi")
console.log(fruits);