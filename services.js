import {data} from "./data.js";

let servicesArticles = document.querySelector('.services-all__articles_link')

for(let el of data.services){
    let servicesArticle = document.createElement('article')
    servicesArticle.classList.add('services-all__article')
    servicesArticle.classList.add('services-article')
    servicesArticle.innerHTML = `
        <a class="services-article__img" href="#">
            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.6665 5.83329V23.3333H12.1665V5.83329H29.6665ZM29.6665 2.91663H12.1665C10.5623 2.91663 9.24984 4.22913 9.24984 5.83329V23.3333C9.24984 24.9375 10.5623 26.25 12.1665 26.25H29.6665C31.2707 26.25 32.5832 24.9375 32.5832 23.3333V5.83329C32.5832 4.22913 31.2707 2.91663 29.6665 2.91663ZM18.6853 20.4166L13.6248 15.3125L15.6665 13.2562L18.6853 16.2895L26.1665 8.74996L28.2082 10.8062L18.6853 20.4166ZM6.33317 8.74996H3.4165V29.1666C3.4165 30.7708 4.729 32.0833 6.33317 32.0833H26.7498V29.1666H6.33317V8.74996Z" fill="#4F8FF0"/>
            </svg>
        </a>
        <div class="services-article__info">
            <p class="services-article__info_name">Банкротство физических лиц</p>
            <p class="services-article__info_text">Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». </p>
        </div>
        <span class="services-article__hover_bl"></span>
        <span class="services-article__hover_br"></span>
        <span class="services-article__hover_tl"></span>
        <span class="services-article__hover_tr"></span>
    `
    
    servicesArticles.appendChild(servicesArticle)
}
