const n = 5;
const lost = [2,4];
const reserve = [1,3,5];
let count = 0;

for(i = 0; i < n; i++){
    if(reserve[i] - lost[i] == 1 || lost[i] - reserve[i] == 1)
        count++;
        
}

console.log(count);