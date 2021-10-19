import fetch from 'cross-fetch';
import './style.css';

const key = '4367d242d87843ddb5e0a8cc46a359d5';
const quantity = 50;
const url = `https://api.rawg.io/api/games?key=${key}&page_size=${quantity}`;
// const gameUrl = `https://api.rawg.io/api/games/${id}`;
const populate = (data) => {
  const gameList = document.getElementById('game-list');
  data.forEach((element) => {
    const cardContainer = document.createElement('div');
    const imageContainer = document.createElement('img');
    const bodyContainer = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const commentButton = document.createElement('a');
    const rating = document.createElement('p');

    cardContainer.classList.add('card', 'card-size', 'm-3', 'col-lg-3', 'col-md-6', 'col-xs-12');
    cardContainer.id = element.id;

    imageContainer.src = element.background_image;
    imageContainer.classList.add('card-img-top', 'mt-3');

    bodyContainer.classList.add('card-body', 'd-flex', 'justify-content-center', 'flex-column');

    cardTitle.innerHTML = element.name;
    cardTitle.classList.add('card-title', 'fs-5');

    rating.innerHTML = `Rating: ${element.rating}/5.0`;
    rating.classList.add('card-rating');

    commentButton.classList.add('btn', 'btn-warning', 'fw-bold', 'fs-5');
    commentButton.innerHTML = 'Comments';

    bodyContainer.append(cardTitle, rating, commentButton);

    cardContainer.append(imageContainer, bodyContainer);

    gameList.append(cardContainer);
  });
};

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  populate(data.results);
};

getData();
