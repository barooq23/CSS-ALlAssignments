function removeNegatvies(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="";
        }
    }
    return arr;
}
removeNegatvies()