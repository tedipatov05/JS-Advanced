function solve(arr, order){
    return order == "asc" ? arr.sort((a,b) => a-b) : arr.sort((a,b) => b-a);

}
solve([14, 7, 17, 6, 8], 'asc')