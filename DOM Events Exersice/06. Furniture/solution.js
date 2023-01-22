function solve() {
    let buttons = document.querySelectorAll("button");
    buttons[0].addEventListener('click', generate);
    buttons[1].addEventListener('click', buy);

    function generate(){
      let tetxArea = document.querySelectorAll("textarea")[0];
      let currentItems = JSON.parse(tetxArea.value);
      let tableBody = document.getElementsByTagName('tbody')[0];

      for(let item of currentItems){
          let tr = document.createElement('tr');
          let td = document.createElement('td');
          let img = document.createElement('img');
          img.setAttribute('src', item.img);
          td.appendChild(img);
          tr.appendChild(td);

          let townTd = document.createElement('td');
          let townName = document.createElement('p');
          townName.innerText = item.name;
          townTd.appendChild(townName);
          tr.appendChild(townTd);
         
          let priceTd = document.createElement('td');
          let price = document.createElement('p');
          price.innerText = item.price;
          priceTd.appendChild(price);
          tr.appendChild(priceTd);

          let decFactorTd = document.createElement('td');
          let decFactor = document.createElement('p');
          decFactor.innerText = item.decFactor;
          decFactorTd.appendChild(decFactor);
          tr.appendChild(decFactorTd);

          let markTd = document.createElement('td');
          markTd.innerHTML = `<input type="checkbox"  />`;
          tr.appendChild(markTd);

          tableBody.appendChild(tr);

      }

    }
    function buy(){
      let table = document.querySelectorAll("tbody tr");
      let resultArea = document.querySelectorAll("textarea")[1];
      let res = [];
      for(let el of table){
          if(el.querySelector("input[type=checkbox]:checked")){
              let tableData = Array.from(el.querySelectorAll("td"));
              let info = {
                name: tableData[1].children[0].textContent,
                price: tableData[2].children[0].textContent,
                decFactor: tableData[3].children[0].textContent
              };
              res.push(info);
              
              

          }
      }

      let names = "";
      let totalPrice = 0;
      let decfactor = 0;

      for(let i = 0; i< res.length; i++){
        let item = res[i];
        let step = i == res.length - 1 ? "" : ", ";
        names += item.name + step;
        totalPrice += Number(item.price);
        decfactor += Number(item.decFactor);

      }

      decfactor = decfactor / res.length;

      resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decfactor}`;




    }

  
}