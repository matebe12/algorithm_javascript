var answers = 	[1, 3, 2, 4, 2];
    let student1 =  [1, 2, 3, 4, 5];
    let student2 =  [2, 1, 2, 3, 2, 4, 2, 5];
    let student3 =  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for(let i = 0; i < answers.length; i++){
        console.log(student1[i % student1.length]);
        console.log(i % 5);
    }
