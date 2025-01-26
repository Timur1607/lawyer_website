import {data} from "./data.js";

let materialsArticles = document.querySelector('.materials-articles__materials')
let exit = document.querySelectorAll('.materials-article')
let materialsArticle = document.querySelectorAll('.materials-article')

for(let el of data.materials){
    let materialsArticle = document.createElement('article')
    materialsArticle.classList.add('materials-article')
    materialsArticle.innerHTML =`
        <div class="materials-article__picture_top">
            <div class="materials-article__overlay"></div>
            <img class="materials-article__picture" src="${el.img}" alt="высокие дома">
            <span class="materials-article__hover_bl"></span>
            <span class="materials-article__hover_br"></span>
            <span class="materials-article__hover_tl"></span>
            <span class="materials-article__hover_tr"></span>
            <div class="materials-article__div">
                <img class="materials-article__div_svg" src="./img/show.svg" alt="глаз">
            </div>
        </div>
        <div class="materials-article__info">
            <p class="materials-article__info_name">${el.title}</p>
            <div class="materials-article__info-time-span">
                <time class="materials-article__info_time">${el.data}</time>
                <div class="materials-article__info_Span"><span class="materials-article__info_span"></span></div>
            </div>
            <p class="materials-article__info_text">${el.description}</p>
        </div>
    `
    materialsArticle.style.setProperty('max-width', '424px')
    materialsArticle.style.setProperty('width', '100%')
    materialsArticles.appendChild(materialsArticle)

}