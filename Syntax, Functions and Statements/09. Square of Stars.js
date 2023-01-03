function squareOfStars(num){
    
    for(let i = 0; i < num; i++){
        let stars = "";
        for(let j = 0;j < num; j++){
            stars += '* ';

        }
        console.log(stars);
        
    }
}
squareOfStars(3)