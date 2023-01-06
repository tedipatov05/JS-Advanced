function townsToJSON(input){
    let res = [];
    
    
    input.shift();

    for(let item of input){
        let [Town, Latitude, Longitude] = item.split(" | ");
        Town = Town.substring(2);
        Longitude = Longitude.substring(0, Longitude.length - 2);

        Latitude = Number(Latitude).toFixed(2);
        Longitude = Number(Longitude).toFixed(2);
        Latitude = Number(Latitude);
        Longitude = Number(Longitude);

        
        let obj = {Town, Latitude, Longitude};

        res.push(obj);
        
    }
    console.log(JSON.stringify(res));

}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);