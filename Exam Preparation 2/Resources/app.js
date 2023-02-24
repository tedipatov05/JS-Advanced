window.addEventListener('load', solve);

function solve() {
    
    let productTypeEl = document.getElementById('type-product');
    let decriptionEl = document.getElementById('description');
    let clientNameEl = document.getElementById('client-name');
    let clientPhoneEl = document.getElementById('client-phone');
    let sendBtn = document.getElementsByTagName('button')[0];
    let sectionRecieve = document.getElementById("received-orders");
    let sectionCompletedOrders = document.getElementById('completed-orders');

    let clearBtn = document.getElementsByClassName('clear-btn')[0];
    clearBtn.addEventListener('click',
        clearCompletedOrders)

    

    sendBtn.addEventListener('click', (ev) => {

        ev.preventDefault();

        if(productTypeEl.value !== '' && decriptionEl.value !=='' 
        && clientNameEl.value !== '' && clientPhoneEl.value !==''){

            recieveOrders();
        }

        clerFields();
    });

   


    function recieveOrders(){
        let productTypeValue = productTypeEl.value;
        let descriptionValue = decriptionEl.value;
        let clientNameValue = clientNameEl.value;
        let clientPhoneValue = clientPhoneEl.value;

        let div = document.createElement('div');
        div.setAttribute('class', 'container');

        createEl('h2', `Product type for repair: ${productTypeEl.value}`, div);
        createEl('h3', `Client information: ${clientNameEl.value}, ${clientPhoneEl.value}`, div);
        createEl('h4', `Description of the problem: ${decriptionEl.value}`, div);

        let buttonStartRepair = document.createElement('button');
        buttonStartRepair.setAttribute('class', 'start-btn');
        buttonStartRepair.textContent = "Start repair";
        buttonStartRepair.addEventListener('click', () => {
            

           
            buttonStartRepair.disabled = true;
            buttonFinishRepair.disabled = false;
           
        })
        

        let buttonFinishRepair = document.createElement('button');
        buttonFinishRepair.setAttribute('class', 'finish-btn');
        buttonFinishRepair.disabled = true;
        buttonFinishRepair.textContent = 'Finish repair';

        buttonFinishRepair.addEventListener('click', (ev) => {
            
            ev.target.parentNode.remove();

            finishRepair(clientNameValue, productTypeValue, clientPhoneValue, descriptionValue)
        })

        div.appendChild(buttonStartRepair);
        div.appendChild(buttonFinishRepair);

        sectionRecieve.appendChild(div);

        



    }

    function finishRepair(clientNameValue, productTypeValue, clientPhoneValue, descriptionValue){
        let divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'container');

        createEl('h2', `Product type for repair: ${productTypeValue}`, divContainer);
        createEl('h3', `Client information: ${clientNameValue}, ${clientPhoneValue}`, divContainer);
        createEl('h4', `Description of the problem: ${descriptionValue}`, divContainer);

        sectionCompletedOrders.appendChild(divContainer);


    }
    function clearCompletedOrders(){
        let orders = document.getElementsByClassName('container');

        for (const order of Array.from(orders)) {

            order.remove();
            
        }
    }

    function clerFields(){
        productTypeEl.value = '';
        decriptionEl.value = '';
        clientNameEl.value = '';
        clientPhoneEl.value = '';

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