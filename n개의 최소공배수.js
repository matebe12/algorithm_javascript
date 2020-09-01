function solution(arr) {
    var answer = 1;
    //배열길이 만큼 최소공배수 재귀(최소공배수,배열인덱스값)
    for(let i = 0; i < arr.length; i++){
        answer = lcm(answer,arr[i]);
        console.log(answer);
    }
    return answer;
}
//유클리드
function gcd(a, b){
    while(b > 0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}
function lcm(a,b){
    return (a * b) / gcd(a, b);
}