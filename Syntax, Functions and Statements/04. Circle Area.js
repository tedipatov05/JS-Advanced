function area(num){
    if(typeof num !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof num}.`);
    } else{
        let circleArea = Math.pow(num, 2) * Math.PI;
        console.log(circleArea.toFixed(2));
    }
}

area(5)