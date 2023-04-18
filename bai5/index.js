let a=[],b=[];
for(let i=0;i<3;i++){
    a[i]=prompt("nhap so thu "+(i+1));
}

for(let i=0;i<3;i++){
    b[i]=prompt("nhap so thu "+(i+1));
}
let count=0;
for(let i=0;i<a.length;i++){
    if(a[i]==b[i]){
        count++;
    }
}
if(count==a.length){
    document.write("a giong mang b");
}else{
    document.write("a khac mang b");

}