const key = "4367d242d87843ddb5e0a8cc46a359d5";
const url = `https://api.rawg.io/api/games`;

const test = document.getElementById("test");

test.addEventListener("click", () => {
  console.log("clicked");
  createModal(3498);
});

async function createModal(id) {
  const gameUrl = url + `/${id}?key=${key}`;
  const game = await getData(gameUrl);
  console.log(game);

  const modalBody = document.querySelector('.modal-body');

  const modalTitle = document.createElement("h2");
  modalTitle.innerHTML = game.name_original;

  const modalGenre = document.createElement("h2");
  modalGenre.innerHTML = game.genres.toString();

  const modalWebsite = document.createElement("h2");
  modalWebsite.innerHTML = game.website;

  const modalRating = document.createElement("h2");
  modalRating.innerHTML = `${game.rating / game.rating_count}`;

  const modalDesc = document.createElement("p");
  modalDesc.innerText = game.description;

  modalBody.append(modalTitle,modalGenre,modalWebsite,modalRating,modalDesc);

  // game.id
  // game.name_original
  // game.description
  // game.background_image
  // game.website
  // game.rating
  // game.rating_count
  // game.genre // array
}

const getData = async (gameUrl) => {
  const response = await fetch(gameUrl);
  const data = await response.json();
  return data;
};
