function biggestElement(matrix){

    let biggest = -9999999999999999999;
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] >= biggest){
                biggest = matrix[row][col];
            }
        }
    }

    return biggest;
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));