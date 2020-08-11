let arr = [93, 30, 55];
let arr2 = [1, 30, 5];
    let result = [];
let j = 0;
    while (arr2.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 100) { // 100이 될때까지 계속 더함
                arr[i] += arr2[i];
                console.log(`${j}번째 : ${arr[i]}`);
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
            j++;
        
    }
    console.log(result);
