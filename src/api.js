/* eslint-disable no-use-before-define */
import fetch from 'cross-fetch';
import './style.css';

const key = '4367d242d87843ddb5e0a8cc46a359d5';
const quantity = 32;
let page = 1;
const url = `https://api.rawg.io/api/games?key=${key}&page_size=${quantity}`;
const involvmentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const createLike = async (id) => {
  console.log(`Like for item ${id} ${await fetch(`${involvmentUrl + await createApp()}/likes/`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ item_id: id }) }).then((response) => response.text())}`);
};

const populate = (data) => {
  const gameList = document.getElementById('game-list');
  data.forEach((element) => {
    const cardContainer = document.createElement('div');
    const imageContainer = document.createElement('img');
    const bodyContainer = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const likeButton = document.createElement('a');
    const commentButton = document.createElement('a');
    const rating = document.createElement('p');

    cardContainer.classList.add('card', 'card-size', 'm-3', 'col-lg-3', 'col-md-6', 'col-xs-12', 'shadow');
    cardContainer.id = element.id;

    imageContainer.src = element.background_image;
    imageContainer.classList.add('card-img-top', 'mt-3');

    bodyContainer.classList.add('card-body', 'd-flex', 'justify-content-center', 'flex-column');

    cardTitle.innerHTML = element.name;
    cardTitle.classList.add('card-title', 'fs-5');

    rating.innerHTML = `Rating: ${element.rating}/5.0`;
    rating.classList.add('card-rating', 'mb-2');

    likeButton.classList.add('btn', 'btn-warning', 'fw-bold', 'fs-5', 'd-flex', 'justify-content-center', 'mb-2');
    likeButton.id = 'like-btn';
    likeButton.name = element.id;
    likeButton.innerHTML = `<p>Like</p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart ms-2" viewBox="0 0 16 16">
    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
  </svg>`;

    commentButton.classList.add('btn', 'btn-warning', 'fw-bold', 'fs-5');
    commentButton.innerHTML = 'Comments';

    bodyContainer.append(cardTitle, rating, likeButton, commentButton);

    cardContainer.append(imageContainer, bodyContainer);

    gameList.append(cardContainer);
  });
  const likebtns = document.querySelectorAll('a[id=like-btn]');
  likebtns.forEach((element) => {
    element.addEventListener('click', () => {
      createLike(element.name);
    });
  });
};

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    populate(data.results);
    return data.results;
  } catch (error) {
    return error.text();
  }
};

const createApp = async () => {
  try {
    const response = await fetch(involvmentUrl, { method: 'POST' }).then((response) => response.text());
    const involvmentKey = await response;
    return involvmentKey;
  } catch (error) {
    return error.text();
  }
};

const getLikes = async () => {
  const response = await fetch(`${involvmentUrl + await createApp()}/likes/`).then((response) => response.json());
  const data = await response;

  console.log(data);
};

const updatePage = (url) => {
  const gameList = document.getElementById('game-list');
  gameList.innerHTML = '';
  getData(url);
};

const nextPage = () => {
  page += 1;
  const newUrl = `${url}&page=${page}`;
  updatePage(newUrl);
};

const previousPage = () => {
  if (page > 1) {
    page -= 1;
    const newUrl = `${url}&page=${page}`;
    updatePage(newUrl);
  }
};

previous.addEventListener('click', previousPage);
next.addEventListener('click', nextPage);
getData(url);
getLikes();
