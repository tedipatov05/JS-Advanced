function everyNthElement(arr, step){
    let res = [];
    for(let i = 0; i < arr.length; i+=step){
        res.push(arr[i]);
    }
    return res;
}
console.log(everyNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));