let s = 'abcd';
let ask = '';
if(s.length % 2 == 1){
 ask = s[Math.floor(s.length/2)];
}else {
    ask += s[Math.ceil(s.length/2)-1];
    ask += s[Math.floor(s.length/2)];
}
console.log(ask);