'use strict'

function getArticle() {
  const nasaUrl='https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo';
  get(nasaUrl).then( function (response) {
    populateArticle(response);
    document.getElementById('success').className = 'show';
  }, function (error) {
    document.getElementsById('error').innerHTML = `Error ${error}`;
    document.getElementsById('error').className = 'show';
  });
}

function populateArticle(article) {
  const $title = document.getElementById('title');
  const $date = document.getElementById('date');
  const $explanation = document.getElementById('explanation');
  const $image = document.getElementById('image');

  $title.innerHTML = article['title'];
  $date.innerHTML = article['date'];
  $explanation.innerHTML = article['explanation'];
  $image.src = article['url'];
  $image.title = article['title'];
}

