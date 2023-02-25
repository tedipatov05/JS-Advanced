window.addEventListener("load", solve);

function solve() {
  let firstnameEl = document.getElementById('first-name');
  let lastNameEl = document.getElementById('last-name');
  let ageEl = document.getElementById('age');
  let storyTitleEl = document.getElementById("story-title");
  let genreEl = document.getElementById('genre');
  let storyTextEl = document.getElementById('story');
  let previewUl = document.getElementById('preview-list');
  let mainDiv = document.getElementById('main');

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    if(firstnameEl.value.trim() !== '' && lastNameEl.value.trim() !== '' && ageEl.value.trim() !== ''
    && storyTitleEl.value.trim() !== '' && storyTextEl.value.trim() !== ''){
      previewStory();
      clearFields();
    }
   

    
  });


  function previewStory(){

    debugger;
    publishBtn.disabled = true;
    

    let firstNameValue = firstnameEl.value;
    let lastNameValue = lastNameEl.value;
    let ageValue = ageEl.value;
    let titleValue = storyTitleEl.value;
    let genreValue = genreEl.value;
    let storyTextValue = storyTextEl.value;
    

    let li = document.createElement('li');
    li.setAttribute('class', 'story-info');

    let article = document.createElement('article');
   

    createEl('h4', `Name: ${firstNameValue} ${lastNameValue}`, article);
    createEl('p' , `Age: ${ageValue}`, article);
    createEl('p', `Title: ${titleValue}`, article);
    createEl('p', `Genre: ${genreValue}`, article);
    createEl('p', `${storyTextValue}`, article);

    li.appendChild(article);

    let saveBtn = document.createElement('button');
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = "Save Story";
    saveBtn.disabled = false;
    saveBtn.addEventListener('click', (ev) => {

      ev.preventDefault();

     
      ev.target.parentNode.parentNode.parentNode.remove();
      mainDiv.children[0].remove();
      

      let h1 = document.createElement('h1');
      h1.textContent = "Your scary story is saved!";

      mainDiv.appendChild(h1);
    })
    

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = "Edit Story";
    editBtn.disabled = false;
    editBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      editStory(ev, firstNameValue, lastNameValue, ageValue, genreValue, titleValue, storyTextValue, editBtn, saveBtn, deleteBtn);
    })

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = "Delete Story";
    deleteBtn.disabled = false;
    deleteBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      
      ev.target.parentNode.remove();

      publishBtn.disabled = false;

    })

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    previewUl.appendChild(li);

  }

  function editStory(ev, firstNameValue, lastNameValue, ageValue, genreValue, titleValue, storyTextValue, editBtn, saveBtn, deleteBtn){

    
    editBtn.disabled = true;
    saveBtn.disabled = true;
    deleteBtn.disabled = true;

    publishBtn.disabled = false;

    ev.target.parentNode.remove();

    firstnameEl.value = firstNameValue;
    lastNameEl.value = lastNameValue;
    ageEl.value = ageValue;
    storyTitleEl.value = titleValue;
    genreEl.value = genreValue;
    storyTextEl.value = storyTextValue;

    

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
    firstnameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    storyTitleEl.value = '';
    genreEl.value = '';
    storyTextEl.value = '';
  }

}
