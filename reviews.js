import {data} from "./data.js"

let reviewsArticles = document.querySelector('.reviews-articles__reviews_link')

for(let el of data.reviews){
    let reviewsArticle = document.createElement('article')
    reviewsArticle.classList.add('reviews-article')
    reviewsArticle.innerHTML = `
        <div class="reviews-article__personal">
            <img class="reviews-article__personal_picture1" src="${el.img}" alt="клиент">
                <div class="reviews-article__personal-info">
                    <p class="reviews-article__personal-info_company">${el.company}</p>
                    <p class="reviews-article__personal-info_name">${el.name}</p>
                </div>
            <img class="reviews-article__personal_picture2" src="./img/game-icons_feather.svg" alt="иконка">
        </div>
        <p class="reviews-article__text">${el.comment}</p>
    `
    reviewsArticle.style.setProperty('max-width', '424px')
    reviewsArticle.style.setProperty('width', '100%')
    reviewsArticles.appendChild(reviewsArticle)
}