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
