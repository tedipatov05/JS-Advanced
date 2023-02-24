window.addEventListener('load', solve);

function solve() {
    let genreEl = document.getElementById('genre');
    let songNameEl = document.getElementById('name');
    let authorSongEl  =document.getElementById('author');
    let dateEl = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    let divSongs = document.getElementById('all-hits').children[0];
    let sectionLikes = document.getElementById('total-likes');
    let savedSongs = document.getElementById('saved-hits');
    let likes = 0;

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        if(genreEl.value != '' && songNameEl.value != '' 
        && authorSongEl.value != '' && dateEl.value != ''){

            addSong();

        }
        clearFileds();
    });

    function addSong(){
        let genreValue = genreEl.value;
        let songNameValue = songNameEl.value;
        let authorValue = authorSongEl.value;
        let dateValue = dateEl.value;

        let div = document.createElement('div');
        div.setAttribute('class', 'hits-info');

        let img = document.createElement('img');
        img.setAttribute('src', './static/img/img.png');
        div.appendChild(img);
        createEl('h2', `Genre: ${genreValue}`, div);
        createEl('h2', `Name: ${songNameValue}`, div);
        createEl('h2', `Author: ${authorValue}`, div);
        createEl('h3', `Date: ${dateValue}`, div);


        let saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', (ev) => {
            
            saveSong(ev, genreValue, songNameValue, authorValue, dateValue);
        });

        let likeBtn = document.createElement('button');
        likeBtn.setAttribute('class', 'like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', likeSong)

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (ev) => {
            ev.target.parentNode.remove();
        
        })

        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        divSongs.appendChild(div);


    } 
    function likeSong(ev){
        likes++;

        let p = sectionLikes.children[0].children[0];
        p.innerText = `Total Likes: ${likes}`;

        ev.target.disabled = true;

    }
    function saveSong(ev, genreValue, songNameValue, authorValue, dateValue){

        ev.target.parentNode.remove();
        debugger;

        let divContainer = savedSongs.children[0];

        let divInfo = document.createElement('div');
        divInfo.setAttribute('class', 'hits-info');

        let img = document.createElement('img');
        img.setAttribute('src',  './static/img/img.png');

        divInfo.appendChild(img);

        createEl('h2', `Genre: ${genreValue}`, divInfo);
        createEl('h2', `Name: ${songNameValue}`, divInfo);
        createEl('h2', `Author: ${authorValue}`, divInfo);
        createEl('h3', `Date: ${dateValue}`, divInfo);

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (ev) => {
            ev.target.parentNode.remove();
        })

        divInfo.appendChild(deleteBtn);

        divContainer.appendChild(divInfo);


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
        genreEl.value = '';
        songNameEl.value = '';
        authorSongEl.value = '';
        dateEl.value = '';
    }

    
}