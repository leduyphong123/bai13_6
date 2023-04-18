let arr=new Array;
for(let i=0;i<4;i++){
    arr[i]=prompt("nhap so thu "+(i+1));
}
for(let i=0;i<arr.length;i++){
    if(arr[i]=="-"){
        arr[i]="_";
    }
}
document.write(arr);