let arr=[];
let n=prompt("nhap vao so phan tu mang");
for(let i=0;i<n;i++){
    arr[i]=prompt("nhap phan tu thu "+(i+1));
}

let newArr=[];
for(let i=0;i<arr.length;i++){
    newArr[i]=arr[arr.length-1-i];
}
document.write(newArr);