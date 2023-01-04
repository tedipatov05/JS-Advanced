function sort(input) {
    let array = input.map(Number).sort(function(a, b) {
      return a - b;
    });
    let arrayCopy = array.slice(0);
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
     
      result.push(arrayCopy[0]);
      if (result.length === array.length) {
        break;
      }

      result.push(arrayCopy[arrayCopy.length - 1]);
      if (result.length === array.length) {
        break;
      }

      arrayCopy.shift();
  
      arrayCopy.pop();
    }
  
    return result;
}
  console.log(sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));