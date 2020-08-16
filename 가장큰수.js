var answer = 	[6, 10, 2];
let sortnum = answer.map(c=> c + '').
sort((a,b) => (b+a) - (a+b)).join('');
answer[0]==='0'? '0' : answer;
console.log(sortnum);


