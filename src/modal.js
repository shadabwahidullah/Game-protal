const key = '4367d242d87843ddb5e0a8cc46a359d5';
const url = 'https://api.rawg.io/api/games';

const body = document.getElementById('body');
const modal = document.getElementById('scrollableModal');

const getData = async (gameUrl) => {
  const response = await fetch(gameUrl);
  const data = await response.json();
  return data;
};

function getGenres(genres) {
  let appendedGenres = '';
  genres.forEach((element) => {
    appendedGenres += `${element.name}, `;
  });
  appendedGenres = appendedGenres.slice(0, -2);
  return appendedGenres;
}

async function createModal(id) {
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
  const gameUrl = `${url}/${id}?key=${key}`;
  const game = await getData(gameUrl);

  const modalImage = document.getElementById('modalImage');
  modalImage.src = game.background_image;
  const modalDetails = document.getElementById('modal-details');
  document.getElementsByTagName('form')[0].id = id;
  modalDetails.innerHTML = '';

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('text-center', 'py-3', 'fw-bold', 'color');
  modalTitle.innerHTML = game.name_original;

  const modalGenre = document.createElement('p');
  modalGenre.classList.add('fs-5', 'm-0', 'col-md-6');
  modalGenre.innerHTML = `<strong>Genre/s: </strong> ${getGenres(game.genres)}`;

  const modalRating = document.createElement('p');
  modalRating.classList.add('fs-5', 'm-0', 'col-md-6');
  modalRating.innerHTML = `<strong>Rating: </strong> ${game.rating}/5 of ${game.ratings_count} reviews`;

  const modalWebsite = document.createElement('a');
  modalWebsite.innerHTML = '<strong>Website: </strong>click here';
  modalWebsite.classList.add('fs-5', 'text-decoration-none', 'text-dark');
  modalWebsite.href = game.website;

  const modalDesc = document.createElement('p');
  modalDesc.classList.add('my-3');
  modalDesc.innerHTML = `<strong>Description: </strong> ${game.description.substring(
    3,
  )}`;

  const closeButton = document.getElementById('modalClose');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
  });

  modalDetails.append(
    modalTitle,
    modalGenre,
    modalRating,
    modalWebsite,
    modalDesc,
  );
}

export { createModal as default };
