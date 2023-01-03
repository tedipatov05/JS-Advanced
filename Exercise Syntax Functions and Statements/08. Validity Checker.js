function validityChecker(x1, y1, x2, y2) {
    // formula ==> Math.sqrt((x2-x1))^2 + ((y2-y1)^2)
 
    let firstComparison = Math.sqrt(Math.pow((-x1), 2) + Math.pow((-y1), 2));
    if (firstComparison === parseInt(firstComparison)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    let secondComparison = Math.sqrt(Math.pow((-x2), 2) + Math.pow((-y2), 2));
    if (secondComparison === parseInt(secondComparison)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    let thirdComparison = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if (thirdComparison === parseInt(thirdComparison)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}