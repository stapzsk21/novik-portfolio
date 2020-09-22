const button = document.querySelector('.hamburger'),
    menuContent = document.querySelector('.header__nav_adaptive'),
    language = document.querySelector('.header__lang'),
    languageLinkRu = document.querySelector('#ru'),
    languageLinkEn = document.querySelector('#en');


button.addEventListener('click', () => {
    button.classList.toggle('is-active');
    menuContent.classList.toggle('is-active');


    button.classList.contains('is-active') ? 
    language.style.display = 'block' : 
    language.style.display = 'none';
});
   

languageLinkEn.addEventListener('click', () => document.location.href = "index.html");
languageLinkRu.addEventListener('click', () => document.location.href = "indexRu.html");

