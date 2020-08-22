const a = 	    [1, 1, 3, 3, 0, 1, 1];
const b = 		[4, 4, 4, 3, 3];
let c = [];
for(let i = 0; i < a.length; i++){
    if(a[i] !== a[i+1]){
        c.push(a[i]);
    }
}
console.log(c);