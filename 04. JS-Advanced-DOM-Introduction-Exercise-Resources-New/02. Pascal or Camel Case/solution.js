function solve() {
  let element = document.getElementById("text").value;
  let type = document.getElementById("naming-convention").value;

  let result = document.getElementById("result");

  element = element.toLowerCase();
  let arr = element.split(' ');
  let res = '';

  if(type == "Camel Case"){
    res += arr[0];
    for(let i = 1; i < arr.length; i++){
      let txt = arr[i].substring(1);
      res += arr[i][0].toUpperCase() + txt; 

    }
    result.textContent = res.toString();


  }else if(type == "Pascal Case"){
    for(let i = 0; i < arr.length ; i++){
      let txt = arr[i].substring(1); 
      res += arr[i][0].toUpperCase() + txt;

    }
    result.textContent = res.toLocaleString();
  }else{
    result.textContent = "Error!";
  }

  
}
