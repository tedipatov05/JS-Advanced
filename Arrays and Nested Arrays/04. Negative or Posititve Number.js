function positiveOrNegativeNum(arr){
    let nums = arr.map(Number);
    let result = [];

    for(let num of nums){
        if(num < 0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}
positiveOrNegativeNum([7, -2, 8, 9]);