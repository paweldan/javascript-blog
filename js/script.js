'use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

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

function generateTags(){
  /* find all articles */
 const articles = document.querySelectorAll('.post');
  /* START LOOP: for every article: */
    for(let article of articles) {
    /* find tags wrapper */
      const tagsWrapper = article.querySelector('.post-tags .list');
    /* make html variable with empty string */
      let html = '';
    /* get tags from data-tags attribute */
      const tags = article.getAttribute('data-tags');
    /* split tags into array */
      const tagsArray = tags.split(' ');
    /* START LOOP: for each tag */
      for(let tag of tags) {
      /* generate HTML of the link */
        const link = '<li><a href="#tag-'+ tag +'">'+ tag +'</a></li>';
      /* add generated code to html variable */
        html += link;
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
}

generateTags();