import { httpGET } from "./modules/http.js";
import {
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
} from "./modules/components.js";

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

const mainSectionEl = document.querySelector(".main");
// esercizio 1//
const navbarEl = document.querySelector(".navbar");

const searchElFn = () => {
  const searchEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const searchBarEl = document.createElement("input");

  searchEl.className = "search";
  imgEl.alt = "netflix-clone-logo";
  imgEl.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  searchBarEl.type = "text";
  searchBarEl.placeholder = "text";

  searchEl.append(imgEl, searchBarEl);

  return searchEl;
};

const linksElFn = () => {
  const linksEl = document.createElement("div");
  const wrapperListEl = document.createElement("ul");
  const tvShowEl = document.createElement("li");
  const moviesEl = document.createElement("li");
  const categoriesEl = document.createElement("label");
  const categoriesSelectEl = document.createElement("select");
  const optionEl = document.createElement("option");

  linksEl.className = "links";
  wrapperListEl.className = "links-list";
  tvShowEl.textContent = "Tv Show";
  moviesEl.textContent = "Movies";
  categoriesEl.htmlFor = "categories";
  categoriesEl.textContent = "Categories";
  categoriesSelectEl.name = "categories";
  categoriesSelectEl.id = "categories";
  optionEl.value = "";

  linksEl.appendChild(wrapperListEl);
  wrapperListEl.append(tvShowEl, moviesEl, categoriesEl, categoriesSelectEl);
  categoriesSelectEl.appendChild(optionEl);

  return linksEl;
};

navbarEl.append(searchElFn(), linksElFn());

//  end esercizione 1

// 1 STEP
// httpGET("/tv/top_rated").then((data) => {
//   const listContainerEl = listsContainerElGen("Top Rated");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// httpGET("/tv/popular").then((data) => {
//   const listContainerEl = listsContainerElGen("Popular");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// 2 STEP
// asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated").then(
//   (element) => mainSectionEl.append(element)
// );
// asyncListContainerElGen("/tv/popular", "Serie Tv - Popular").then((element) =>
//   mainSectionEl.append(element)
// );

// 3 STEP
Promise.all([
  asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("/tv/popular", "Serie Tv - Popular"),
]).then((elements) => elements.map((el) => mainSectionEl.append(el)));

// modale
