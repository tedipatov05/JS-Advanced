function notify(message) {

    let divContent = document.getElementById('notification');
    divContent.innerText = message;
    
    divContent.style.display = 'block';
    divContent.addEventListener('click', toggleDisplay);
    

    function toggleDisplay(e){
      
      e.target.style.display = 'none';
      

    }




}