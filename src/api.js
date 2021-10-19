import fetch from 'cross-fetch';

const key = '4367d242d87843ddb5e0a8cc46a359d5';
const url = `https://api.rawg.io/api/games?key=${key}`;
//const gameUrl = `https://api.rawg.io/api/games/${id}`;
const populate = (data) => {
    const gameList = document.getElementById('game-list');
    console.log('Started populating')
    data.forEach((element) => {
        const cardContainer = document.createElement('div');
        const imageContainer = document.createElement('img');
        const bodyContainer = document.createElement('div');
        const cardTitle = document.createElement('h5');
        const commentButton = document.createElement('a');
        const rating = document.createElement('p');

        cardContainer.classList.add('card', 'card-size');

        imageContainer.src = element.background_image;
        imageContainer.classList.add('card-img-top');

        bodyContainer.classList.add('card-body');

        cardTitle.innerHTML = element.name;
        cardTitle.classList.add('card-title');

        rating.innerHTML = `Rating: ${element.rating}/5.0`;
        rating.classList.add('card-rating');

        commentButton.classList.add('btn', 'btn-warning');
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
