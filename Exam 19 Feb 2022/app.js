function solve() {
    let firstNameEl = document.getElementById('fname');
    let lastNameEl = document.getElementById('lname');
    let emailEl = document.getElementById('email');
    let birthEl = document.getElementById('birth');
    let positionEl = document.getElementById('position');
    let salaryEl = document.getElementById('salary');
    let hireBtn = document.getElementById('add-worker');
    let tableBody = document.getElementById('tbody');
    let budgetEl = document.getElementById('sum');
    let budget = 0;

    hireBtn.addEventListener('click', (ev) => {

        ev.preventDefault();
        if(firstNameEl.value !=='' && lastNameEl.value !== ''
        && emailEl.value !== '' && birthEl.value !== '' 
        && positionEl.value !== '' && salaryEl.value !=='')
        {
            hireWorker();
        }

        clearFields()

    });


    function hireWorker(){

        let firstNameValue = firstNameEl.value;
        let lastnameValue = lastNameEl.value;
        let emailValue = emailEl.value;
        let birthValue = birthEl.value;
        let positionValue = positionEl.value;
        let salaryValue = salaryEl.value;


        let tr = document.createElement('tr');

        createEl('td', firstNameEl.value, tr);
        createEl('td', lastNameEl.value, tr);
        createEl('td', emailEl.value, tr);
        createEl('td', birthEl.value, tr);
        createEl('td', positionEl.value, tr);
        createEl('td', salaryEl.value, tr);

        let tdButtons = document.createElement('td');

        let fireBtn = document.createElement('button');
        fireBtn.setAttribute('class', 'fired');
        fireBtn.textContent = 'Fired';
        fireBtn.addEventListener('click', (ev) =>{
            ev.target.parentNode.parentNode.remove();
            budget -= Number(ev.target.parentElement.parentElement.children[5].textContent).toFixed(2);
            budgetEl.textContent = budget.toFixed(2); 
        })

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit');
        editBtn.textContent = 'Edit';

        budget += Number(salaryValue);

        budgetEl.textContent = budget.toFixed(2);

        editBtn.addEventListener('click', (ev) => {
            ev.preventDefault();
            editWorker(ev, firstNameValue, lastnameValue, emailValue, 
                birthValue, positionValue, salaryValue);
        });

        tdButtons.appendChild(fireBtn);
        tdButtons.appendChild(editBtn);

        tr.appendChild(tdButtons);





        tableBody.appendChild(tr);



        


    }

    function editWorker(ev, firstName, lastName, email, birth, position, salary){
       ev.target.parentNode.parentNode.remove();
       
       
        firstNameEl.value = firstName;
        lastNameEl.value = lastName;
        emailEl.value = email;
        birthEl.value = birth;
        positionEl.value = position;
        salaryEl.value = salary;
        budget -= Number(salary).toFixed(2);

        budgetEl.textContent = budget.toFixed(2);    
       



    }

    function createEl(type, content, parent){
        let el = document.createElement(type);
        el.textContent = content;

        if(parent){
            parent.appendChild(el);
        }

        return el;
    }
    function clearFields(){
        firstNameEl.value ='' ;
        lastNameEl.value = '';
        emailEl.value = '';
        birthEl.value = ''; 
        positionEl.value = ''; 
        salaryEl.value = '';
    }

   
}
solve()