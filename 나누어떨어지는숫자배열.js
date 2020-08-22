const a = [5, 9, 7, 10];
const b = 5;
let answer = [];
    for(let i = 0; i < a.length; i++){
        if(a[i]%b == 0)
            answer.push(a[i]);
    }
    if(answer.length < 1){
        answer.push(-1);
    }
    answer.sort((a,b) => a - b);
    console.log(answer);