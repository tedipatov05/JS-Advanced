function sumOfFirstAndLast(array){
    let nums = array.map(Number);
    let sum = nums.pop() + nums.shift();

    return sum;
}
console.log(sumOfFirstAndLast(['20', '30', '40']));