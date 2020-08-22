let a =	5;
let b = 3;


let sum = 0;
    
    if(b >= a){
        for(let i = a; i <= b; i++){
        sum += i;
        }
    } else if(b < a){
        for(let i = a; i >= b; i--){
        sum += i;
            console.log(sum);
        }
    }    