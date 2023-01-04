function biggerHalf(arr){
    let res = arr.sort((a,b) => a-b);
    res.splice(0, res.length/2);

    return res;

}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));