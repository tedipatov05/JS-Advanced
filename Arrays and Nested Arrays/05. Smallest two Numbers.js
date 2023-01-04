function smallestTwonumbers(arr){
    let result = arr.sort((a,b) => a-b);
    result.splice(2);

    console.log(result.join(" "));

}
smallestTwonumbers([30, 15, 50, 5])