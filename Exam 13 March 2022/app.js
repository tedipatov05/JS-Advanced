function solve() {
    let recipientEl = document.getElementById('recipientName');
    let titleEl = document.getElementById('title');
    let messageEl = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    let ulList = document.getElementById('list')
    let sendMails = document.getElementsByClassName('sent-list')[0];
    let deletedMails = document.getElementsByClassName('delete-list')[0];




    resetBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        clearFileds();
    })

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        if(recipientEl.value !== '' && titleEl.value !== '' 
        && messageEl.value !==''){
            addMail();
        }
        clearFileds();
        
    })

    function addMail() {

        

        let recipientValue = recipientEl.value;
        let titleValue = titleEl.value;
        let messageValue = messageEl.value;

        let li = document.createElement('li');

        createEl('h4', `Title: ${titleValue}`, li);
        createEl('h4', `Recipient Name: ${recipientValue}`, li);
        createEl('span', messageValue, li);

        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', (ev) => {

            ev.target.parentNode.parentNode.remove();

            sendMail(recipientValue, titleValue);

        })


        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (ev) => {
            ev.target.parentNode.parentNode.remove();

            sendMailToDeleted(recipientValue, titleValue);
        })


        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        li.appendChild(div);

        ulList.appendChild(li);

        


    }

    function sendMailToDeleted(recipientValue, titleValue){

        let li = document.createElement('li');

        createEl('span', `To: ${recipientValue}`, li);
        createEl('span', `Title: ${titleValue}`, li);

        deletedMails.appendChild(li);
    }

    function sendMail(recipientValue, titleValue){
        let li = document.createElement('li');

        createEl('span', `To: ${recipientValue}`, li);
        createEl('span', `Title: ${titleValue}`, li);
        let div = document.createElement('div');
        div.setAttribute('class', 'btn');

        let delBtn = document.createElement('button');
        delBtn.setAttribute('type' , 'submit');
        delBtn.setAttribute('class', 'delete');
        delBtn.textContent  ='Delete';
        delBtn.addEventListener('click', (ev) => {
            ev.target.parentNode.parentNode.remove();

            sendMailToDeleted(recipientValue, titleValue);
        })



        div.appendChild(delBtn);

        li.appendChild(div);

        sendMails.appendChild(li);

    }
    function createEl(type, content, parent){
        let el = document.createElement(type);
        el.textContent = content;

        if(parent){
            parent.appendChild(el);
        }

        return el;

    }
    function clearFileds(){
        recipientEl.value = '';
        titleEl.value = '';
        messageEl.value = '';
    }

}
solve()