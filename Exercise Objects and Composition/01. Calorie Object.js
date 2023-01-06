function calorieObject(data){
    let res = {};

    for(let i = 0; i < data.length; i+=2){
        res[data[i]] = Number(data[i+1]);

    }

    console.log(res);
}
        
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);