# algorithm_javascript
자바스크립트 알고리즘

## 프로그래머스 해쉬 위장
```
let arr = [93, 30, 55];
let arr2 = [1, 30, 5];
let result = [];
    while (arr2.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 100) { // 100이 될때까지 계속 더함
                arr[i] += arr2[i];
            }
        }

            let sum1 = 0; // 카운트용 변수
        while (arr[0] >= 100) {
            console.log(`${arr}`);
                    arr.shift();
                arr2.shift();
                console.log(`${arr}`);
                    sum1++;
            }
            //console.log(sum1);
                if (sum1 > 0) {
                    result.push(sum1);    
                }
        
    }
    console.log(result);

```



## 프로그래머스 정렬 k번째 수 
```
let arr = [1, 5, 2, 6, 3, 7, 4];
let arr2 =[[2, 5, 3], [4, 4, 1], [1, 7, 3]];
let temp = [];
function solution(array, commands){
    var result = [];
    for (let i = 0; i < commands.length; i++) {
        temp = array.slice(commands[i][0]-1, commands[i][1]);
        temp.sort((a,b) => a - b);
         result.push(temp[commands[i][2] - 1]);
    }
    return result;
}

solution(arr, arr2);


```

### issue  k번째수
- 정렬 함수를 잘못 사용하고 있었다. 자바스크립트의 경우 array.sort() 인자에 아무 값도 넣지 않는다면 아스키 코드 순서대로 정렬을 한다. 그래서 test2에서 자꾸 실패가 떳는데 mdn문서를 확인해보니 위의 문제를 알 수 있었고 sort((a,b) => a-b)를 추가 하였다. 


## 프로그래머스 정렬 가장 큰수 

```
var answer = 	[6, 10, 2];
let sortnum = answer.map(c=> c + '').
sort((a,b) => (b+a) - (a+b)).join('');
sortnum.charAt(0) ==='0'? '0' : sortnum;
console.log(sortnum);
```

### issue 가장 큰 수
- sortnum.charAt(0) ==='0'? '0' : sortnum; 을 변수에 할당해서 return을 하게 되면 테스트 11에서 실패를 하였다. 그래서 변수에 할당하지 않고 바로 return을 시켜 통과했다. 
