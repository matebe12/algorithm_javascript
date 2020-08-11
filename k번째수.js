let arr = [1, 5, 2, 6, 3, 7, 4];
let arr2 =[[2, 5, 3], [4, 4, 1], [1, 7, 3]];
let temp = [];
function solution(array, commands){
    var result = [];
    for (let i = 0; i < commands.length; i++) {
        temp = array.slice(commands[i][0]-1, commands[i][1]);
        temp.sort((a,b) => a - b);
        console.log(temp);
         result.push(temp[commands[i][2] - 1]);
    }
    return result;
}

solution(arr, arr2);
