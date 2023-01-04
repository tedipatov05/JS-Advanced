function rotation(arr, rotations) {

    let numberOfRotations = 0;
    
    while(numberOfRotations < rotations){
        let item = arr.shift();
        arr.push(item);
        rotations--;

    }
    

    
    console.log(arr.join(` `));
 
}
rotation(['1', 
'2', 
'3', 
'4'], 
2
)
rotation(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)

