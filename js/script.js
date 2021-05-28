'use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  const articlesListWrapper = document.querySelector(optTitleListSelector);
  articlesListWrapper.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);

  /* for each article */
  for(let article of articles){
    /* get the article id */
    const articleId = article.getAttribute('id');
    /* find the title element */
    const articleTitleElement = article.querySelector('.post-title');
    /* get the title from the title element */
    const articleTitle = articleTitleElement.innerHTML;
    /* create HTML of the link */
    const link = '<li><a href="#'+ articleId +'"><span>'+ articleTitle +'</span></a></li>';
    /* insert link into titleList */
    articlesListWrapper.innerHTML = articlesListWrapper.innerHTML + link;
  }

}

generateTitleLinks();

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [DONE] add class 'active' to the clicked link */

console.log('clickedElement:', clickedElement);

    clickedElement.classList.add('active');


  /* [DONE] remove class 'active' from all articles */

const activeArticles = document.querySelectorAll('.posts article.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* [DONE] get 'href' attribute from the clicked link */

  const href = clickedElement.getAttribute("href");

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const article = document.querySelector(href);

  /* [DONE] add class 'active' to the correct article */

  article.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}