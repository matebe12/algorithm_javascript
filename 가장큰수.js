var answer = 	[6, 10, 2];
let sortnum = answer.map(c=> c + '').
sort((a,b) => (b+a) - (a+b)).join('');
sortnum.charAt(0) ==='0'? '0' : sortnum;
console.log(sortnum);


