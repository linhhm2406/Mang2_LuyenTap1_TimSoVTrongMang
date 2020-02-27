let array =[];
for (let i = 0; i < 10; i++) {
    array[i]=parseInt(prompt('Nhap vao gia tri phan tu '+i));
}
let V=parseInt(prompt('Nhap vao so nguyen V'));

for (let i = 0; i < 10; i++) {
    if (array.indexOf(V)===-1){
        alert('V is not in the array');
    }else {
        alert('V is in the array');
        break;
    }
}
