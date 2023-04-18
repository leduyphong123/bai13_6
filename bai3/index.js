let arr=[];
let n=prompt("nhap so phan tu mang");
for(let i=0;i<n;i++){
    arr[i]=prompt("nhap phan tu mang thu "+(i+1));
}
let count=0;
for(let i=0;i<arr.length;i++){
    let value=isNaN(arr[i]);
    if(value ==false){
        count++;
    }
}
document.write(count);