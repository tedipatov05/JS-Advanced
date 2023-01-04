function processOddPositions(arr){
    console.log((arr.filter((a, i) => i % 2 !== 0).map(a => a*2).reverse()).join(" "));
}
processOddPositions([10, 15, 20, 25]);