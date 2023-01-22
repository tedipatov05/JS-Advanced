function getArticleGenerator(articles) {
    let myArticles = Array.from(articles);
    let div = document.getElementById('content');
    return () =>{
        

        if(!myArticles.length) return;

        let currArticle = myArticles.shift();

        let article = document.createElement('article');
        article.textContent = currArticle;

        div.appendChild(article);
        
    }

    
}
