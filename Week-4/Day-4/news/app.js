const newsDiv = document.getElementById("newsDiv")

function nullCheck(label) {
    if (label == null) {
        return "N/A"
    }else {
        return label
    }
}

const newsItems = news.articles.map(function(item) {
    return `<div class="news-item">
                <h3>${nullCheck(item.title)}</h3>
                <p>Author: ${nullCheck(item.author)}</p>
                <p>Description: ${nullCheck(item.description)}</p>
                <a href="${nullCheck(item.url)}">Link to article</a>
                <img src="${nullCheck(item.urlToImage)}">
                <i>${nullCheck(item.publishedAt)}</i> 
            </div>`
})

newsDiv.insertAdjacentHTML("beforeend",newsItems.join(""))