document.getElementById(`createArticleButton`).addEventListener(`click`, function () {

    // Save input values-
    const title = document.getElementById('titleInput').value.trim();
    const paragraph = document.getElementById('paragraphInput').value.trim();
    const publishingDate = document.getElementById(`publishingDate`)
    // Check for empty inputs
    if (title === "" || paragraph === "") {
        alert("Please fill both the title and the paragraph.");
        return;
        
    }
    // CREATE ARTICLE   ;
    const article = document.createElement(`article`);
    const articleTitle = document.createElement(`h2`);
    const articleParagraph = document.createElement(`p`);
    const articleDate = document.createElement(`div`)

    
    

    // ASSIGN VALUE TO TITLE & PARAGRAPH
    articleTitle.textContent = title;
    articleParagraph.textContent = paragraph;
    articleDate.textContent = new Date();
    // ADDS BOTH TO ARTICLE
    article.appendChild(articleTitle);
    article.appendChild(articleParagraph);
    // ADDS ARTICLE TO THE ARTICLES CONTAINER
    document.getElementById(`articles`).appendChild(article);
    // RESETS THE INPUT'S VALUES
    document.getElementById('titleInput').value = '';
    document.getElementById('paragraphInput').value = '';
    // ADDS THE ARTICLE'S PUBLISHING DAY
    document.getElementById(`publishingDate`).appendChild(articleDate);
    }
)   

console.log();