window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById("make");
  let modelInput = document.getElementById("model");
  let productionYearInput = document.getElementById("year");
  let fuelTypeInput = document.getElementById("fuel");
  let originalPriceInput = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");
  const tableEl = document.getElementById("table-body");
  const soldCarsEl = document.getElementById("cars-list");
  const totalProfit = document.getElementById("profit");
  let profitMade = 0;


  const publishButton = document.
  getElementById('publish')
  .addEventListener('click', (ev) =>{
    ev.preventDefault();
    if(makeInput.value !== "" &&
    modelInput.value !== "" &&
    productionYearInput.value !== "" &&
    fuelTypeInput.value !== "" &&
    originalPriceInput.value !== "" &&
    sellingPrice.value)
    {

      addPost(ev, makeInput.value, modelInput.value, 
        productionYearInput.value, fuelTypeInput.value, originalPriceInput.value, 
        sellingPrice.value);

    }
    clearInputFields();
  });


  function addPost(ev, makeInput, modelInput, 
    productionYearInput, fuelTypeInput, originalPriceInput, 
    sellingPrice){

      //ev.preventDefault();

      let tr = createEl('tr');
      tr.setAttribute("class", 'row');
      createEl('td', makeInput, tr);
      createEl('td', modelInput, tr);
      createEl('td',productionYearInput, tr);
      createEl('td', fuelTypeInput, tr);
      createEl('td', originalPriceInput, tr);
      createEl('td', sellingPrice, tr);
      const actionTd = createEl('td');
      tr.appendChild(actionTd);

      const editBtn = createEl('button', 'Edit', actionTd);
      editBtn.setAttribute('class', 'action-btn edit');
      editBtn.setAttribute('id', 'edit');
      const sellBtn = createEl('button', 'Sell', actionTd);
      sellBtn.setAttribute('class', 'action-btn sell');
      sellBtn.setAttribute('id', 'sell');



      tableEl.appendChild(tr);

      sellBtn.addEventListener("click", (ev) => {
        sellCar(
          ev,
          makeInput,
          modelInput,
          productionYearInput,
          originalPriceInput,
          sellingPrice
        );
      });

      editBtn.addEventListener('click', (ev) =>{
        edit(ev, makeInput, modelInput, productionYearInput, 
          fuelTypeInput, originalPriceInput, sellingPrice);
      } )





  }
  function edit(ev, _makeInput, _modelInput, _productionYearInput, 
    _fuelTypeInput, _originalPriceInput, _sellingPrice){
      ev.target.parentNode.parentNode.remove();

      makeInput.value = _makeInput;
      modelInput.value = _modelInput;
      productionYearInput.value = _productionYearInput;
      fuelTypeInput.value = _fuelTypeInput;
      originalPriceInput.value = _originalPriceInput;
      sellingPrice.value = _sellingPrice;



    }

  function sellCar(ev, makeInput, modelInput, productionYearInput,
     originalPriceInput, sellingPrice){

      ev.target.parentNode.parentNode.remove();

      let profitCurrCar = Number(sellingPrice) - Number(originalPriceInput);

      let li = document.createElement('li');
      li.className = 'each-list';
      let carName = document.createElement('span');
      carName.textContent = `${makeInput} ${modelInput}`;
      let caryear = document.createElement('span');
      caryear.textContent = productionYearInput;
      let profit = document.createElement('span');
      profit.textContent = profitCurrCar;

      li.appendChild(carName);
      li.appendChild(caryear);
      li.appendChild(profit);

      soldCarsEl.appendChild(li);

      profitMade += profitCurrCar;

      totalProfit.textContent = profitMade.toFixed(2);





     }

  function clearInputFields(){
    makeInput.value = '';
    modelInput.value = '';
    productionYearInput.value = '';
    fuelTypeInput.value = '';
    originalPriceInput.value = '';
    sellingPrice.value = '';
  }

  function createEl(type, content, parent){
    let el = document.createElement(type);
    el.textContent = content;

    if(parent){
      parent.appendChild(el);
    }

    return el;
  }

  

}
