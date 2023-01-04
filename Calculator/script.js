// targeted elements by id and assigned into variables ( we’ll use these variables later in tutorial to print calculation text and result text )
const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

/* function to insert number onclick */
function insert(num) {
  calculation.textContent += num;
  console.log(num);
}

// targeting clear button by id and assigning a blank value to the calculation and 0 to result on click event listener
document.getElementById("clear").addEventListener("click", function () {
  calculation.textContent = "";
  result.textContent = 0;
});

/* on click event listener targeting equal button by id then 
- assigning the calculation to the exp variable (we'll use this variable to evaluates calculation using eval method)
- executing exp variable using the eval method and assigning to the result to result screen 
- assigning the output of the result to the calculation to print result to calculation screen too  */
document.getElementById("equal").addEventListener("click", function () {
  var exp = calculation.textContent;
  result.textContent = eval(exp);
  calculation.textContent = result.textContent;
});

// targeting back key button by id and assign value of calculation to exp variable then assign calculation by substring exp variable from 0 to (length of exp -1 )
document.getElementById("back").addEventListener("click", function () {
  var exp = calculation.textContent;
  calculation.textContent = exp.substring(0, exp.length - 1);
});
