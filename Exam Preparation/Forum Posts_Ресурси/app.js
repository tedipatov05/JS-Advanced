window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish-btn').addEventListener('click', createPost);
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');
  let reviewSection = document.getElementById('review-list');
  let updatedPost = document.getElementById('published-list');

  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clearPosts);


  function createPost(e){

    let titleValue = title.value;
    let categoryValue = category.value;
    let contentValue = content.value;
    if(!titleValue || !categoryValue || !contentValue){
      return;
    }

    createDOMElement(titleValue, categoryValue, contentValue);

    clearFields();


  }

  function createDOMElement(titleValue, categoryValue, contentValue){
    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = createArticle(titleValue, categoryValue, contentValue);



    let editButton = document.createElement('button');
    editButton.setAttribute('class', 'action-btn edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editPost);


    let approveButton = document.createElement('button');
    approveButton.setAttribute('class', 'action-btn approve');
    approveButton.textContent = 'Approve';
    approveButton.addEventListener('click', approvePost);


    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(approveButton);

    reviewSection.appendChild(li);

    function editPost(e){
      e.target.parentNode.remove();
  
      title.value = titleValue;
      category.value = categoryValue;
      content.value = contentValue;
  
  
    }

    function approvePost(e){
      e.target.parentNode.remove();

      let li = document.createElement('li');
      li.setAttribute('class', "rpost");

      let article = document.createElement('article');
      let h = document.createElement('h4');
      h.textContent = titleValue;
      let categoryP = document.createElement('p');
      categoryP.textContent = `Category: ${categoryValue}`;
      let contentP = document.createElement('p');
      contentP.textContent = `Content; ${contentValue}`;

      article.appendChild(h);
      article.appendChild(categoryP);
      article.appendChild(contentP);
      li.appendChild(article);

      updatedPost.appendChild(li);

    }
  }

  function createArticle(titleValue, categoryValue, contentValue){
    let article = document.createElement('article');

    let h = document.createElement('h4');
    h.textContent = titleValue;

    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${categoryValue}`;
    
    let contentP = document.createElement('p');
    contentP.textContent = `Content: ${contentValue}`;

    article.appendChild(h);
    article.appendChild(categoryP);
    article.appendChild(contentP);

    return article;
  }

 
  function clearFields(){
    title.value = '';
    category.value = '';
    content.value = '';
  }

  function clearPosts(e){
    
   
    Array.from(e.target.parentNode.children[1]).forEach(li => li.remove());

  }
  
}
