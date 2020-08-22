
let str = 'pPoooY';
let res = str.toLowerCase();
let resultP = 0;
let resultY = 0;

for(let i = 0; i < str.length; i++){
    if(res[i] == 'p'){
        resultP++;
    }else if(res[i] == 'y'){
        resultY++;
    }
}
console.log(resultP);
console.log(resultY);
let result = resultP === resultY ? true : false;
