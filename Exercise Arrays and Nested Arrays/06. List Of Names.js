function sortNames(arr){
    let names = arr.sort((m, n) => m.localeCompare(n));
    let num = 1;
    for(let name of names){
        console.log(`${num}.${name}`);
        num++;
    }
}
sortNames(["John", "Bob", "Christina", "Ema"]);