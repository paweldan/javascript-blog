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

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [DONE] add class 'active' to the clicked link */

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
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = [];
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
      for(let tag of tagsArray) {
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


function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeLinks = document.querySelectorAll('.list-horizontal a.active');
  /* START LOOP: for each active tag link */
  for(let activeLink of activeLinks) {
    /* remove class active */
    activeLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for(let tagLink of tagLinks) {
    /* add class active */
    tagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  console.log(tag)
  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('.list-horizontal a');

  /* START LOOP: for each link */
  for(let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();



function generateAuthors(){
  /* find all articles */
 const articles = document.querySelectorAll('.post');
  /* START LOOP: for every article: */
    for(let article of articles) {
    /* find Authors wrapper */
      const authorsWrapper = article.querySelector('.post-author');
    /* get Authors from data-Authors attribute */
      const author = article.getAttribute('data-author');
      /* generate HTML of the link */
      const link = '<li><a href="#author-'+ author +'">'+ author +'</a></li>';
    /* END LOOP: for each author */

    /* insert HTML of all the links into the Authors wrapper */
    authorsWrapper.innerHTML = link;
  /* END LOOP: for every article: */
  }
}

generateAuthors();