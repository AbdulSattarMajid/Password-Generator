const s = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
let place=document.querySelector('.passwords')
console.log(s.length)
function Password(){
    let password='';
    let number=document.querySelector('#password').value;
    while(number!=0){
    let random=Math.floor(Math.random()*95);
    console.log(random)
    password=password+s[random];
    number--;
}
let h=document.createElement('h1')
h.innerText=`Your Password is `
place.append(h,password)
}

