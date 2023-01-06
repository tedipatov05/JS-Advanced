function storeCatalague(input){
    let obj = {};
    for(let item of input){
        let [productName, price] = item.split(" : ");
        price = Number(price);
        obj[productName] = price;
    }
    let sortedItems = Object.entries(obj)
    .sort((a, b) => a[0].localeCompare(b[0]));

    console.log(print(sortedItems));


    function print(arr) {
        let lastName = '';
        let result = '';

        for (let line of arr) {
            let name = line[0];
            let firstChar = name.charAt(0);

            if (firstChar !== lastName[0]) {
                result +=`${firstChar}\n`;
            }

            result += `  ${name}: ${line[1]}\n`;
            lastName = name;
        }

        return result;
    }

}
storeCatalague(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);


