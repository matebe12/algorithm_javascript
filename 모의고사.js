
    var answers = 	[1, 3, 2, 4, 2];
    let student1 =  [1, 2, 3, 4, 5];
    let student2 =  [2, 1, 2, 3, 2, 4, 2, 5];
    let student3 =  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt = [0,0,0]; // 점수 
    for(let i = 0; i < answers.length; i++){
        if(student1[i % student1.length] === answers[i]){
            cnt[0]++;
           }
        if(student2[i % student2.length] === answers[i]){
            cnt[1]++;
           }
        if(student3[i % student3.length] === answers[i]){
            cnt[2]++;
           }
    }
    let st1Max = student1.filter((x,i) => x === student1[i % student1.length]).length;
    let st2Max = student2.filter((x,i) => x === student2[i % student2.length]).length;
    let st3Max = student3.filter((x,i) => x === student3[i % student3.length]).length;
    let total = [];
    let big = Math.max(...cnt);
    for(let i = 0; i < cnt.length; i++){
        if(cnt[i] === big){
            total.push(i + 1);
        }
    }
    for(let i = 0; i <  cnt.length; i++){
        if()
    }

    console.log(total);