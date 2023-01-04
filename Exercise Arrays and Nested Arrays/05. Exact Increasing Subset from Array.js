function increasingSubset(array){
    let arr = [];
    let biggest = array[0];
    arr = array.reduce((acc, curr) => {
        if(biggest <= curr){
            acc.push(curr);
            biggest = curr;

        }
        return acc;
    }, []);

    return arr;
    
}

