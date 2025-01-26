import {data} from "./data.js";

let lawyersArticles = document.querySelector('.lawyers-all__articles')
let reviewsArticles = document.querySelector('.reviews-articles')
let materialsArticles = document.querySelector('.materials-articles')
// let materialsArticlesPage = document.querySelector('.materials-articles__materials')
let materialsButton = document.querySelector('.materials-button')

let servicesArticles = document.querySelector('.services-all__articles')

let headerSliderRight = document.querySelector('.slider__button_right')
let headerSliderLeft = document.querySelector('.slider__button_left')
let headerSlider = document.querySelectorAll('.slider__span')

let button = document.querySelector('.header__burger')
let burgerMenu = document.querySelector('.header__burger_menu')

let header = document.querySelector('.header')


let check = 0
headerSliderLeft.addEventListener('click', () => {
    headerSlider[check].style.background = '#fff'
    headerSlider[check].style.height = '24px'

    if(check === 2){
        header.style.backgroundImage = 'url(./img/headerImage.jpg)'
        check = 1
    } else if(check === 1){
        header.style.backgroundImage = 'url(./img/background-img.webp)'
        check = 0
    } else if(check === 0){
        check = 2
        header.style.backgroundImage = 'url(./img/headerImage2.webp)'
    }
    headerSlider[check].style.background = '#4F8FF0'
    headerSlider[check].style.height = '40px'
})
headerSliderRight.addEventListener('click', () => {
    console.log('right');
    headerSlider[check].style.background = '#fff'
    headerSlider[check].style.height = '24px'
    if(check === 2){
        check = 0
        header.style.backgroundImage = 'url(./img/background-img.webp)'
    } else if(check === 1){
        header.style.backgroundImage = 'url(./img/headerImage2.webp)'
        check = 2
    } else if(check === 0){
        check = 1
        header.style.backgroundImage = 'url(./img/headerImage.jpg)'
    }
    
    headerSlider[check].style.background = '#4F8FF0'
    headerSlider[check].style.height = '40px'

})





let servicesCheck = 0

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
    if(servicesCheck >= 6){
        servicesArticle.style.display = 'none'
    }
    servicesArticles.appendChild(servicesArticle)
}



for(let el of data.lawyers){
    let lawyersArticle = document.createElement('article')
    lawyersArticle.classList.add('lawyers-all__article')
    lawyersArticle.classList.add('lawyers-article')
    lawyersArticle.innerHTML = `
        <img class="lawyers-article__picture" src="${el.img}" alt="юрист">
        <div class="lawyers-article__info">
            <p class="lawyers-article__info_name">${el.name}</p>
            <p class="lawyers-article__info_profession">${el.form}</p>
        </div>
        <p class="lawyers-article__hover_info1">${el.description}</p>
        <p class="lawyers-article__hover_info2">${el.practice}</p>
        <span class="lawyers-article__hover_bl"></span>
        <span class="lawyers-article__hover_br"></span>
        <span class="lawyers-article__hover_tl"></span>
        <span class="lawyers-article__hover_tr"></span>
    `
    lawyersArticles.appendChild(lawyersArticle)
}

let reviewsCheck = 0
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
    if(reviewsCheck >= 2){
        reviewsArticle.style.display = 'none'
    }
    reviewsCheck = reviewsCheck + 1
    reviewsArticles.appendChild(reviewsArticle)
}

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
    if(el.id > 3){
        materialsArticle.style.display = 'none'
    }
    materialsArticles.appendChild(materialsArticle)
    // materialsArticlesPage.appendChild(materialsArticle)
}


let buttonCheck = 0
let burgerLineTop = document.querySelector('.header__burger_line')
// console.log(burgerLineTop);
let burgernav = document.querySelectorAll('.header__burger_li')
for(let el of burgernav){
    el.addEventListener('click', () => {
        buttonCheck = 1
        burgerMenu.style.right = '0'
        burgerLineTop.style.position = 'fixed'
    })
}
button.addEventListener('click', () => {
    if(buttonCheck === 1){
        burgerMenu.style.right = '100%'
        buttonCheck = 0
        burgerLineTop.style.position = 'relative'
    } else if(buttonCheck === 0){
        buttonCheck = 1
        burgerMenu.style.right = '0'
        burgerLineTop.style.position = 'fixed'
    }
    
})