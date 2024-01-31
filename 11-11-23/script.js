const heroEl = document.createElement("div");
const wrapEl = document.createElement("wrapper");
const imgEl = document.createElement("img");
const titleEl = document.createElement("h1");
const descriptionEl = document.createElement("p");
const buttonEl = document.createElement("a");

heroEl.setAttribute("class", "hero-section");
wrapEl.setAttribute("class", "wrapper");
imgEl.setAttribute("src", "https://picsum.photos/1200/400");
imgEl.setAttribute("alt", "Creazione Hero Dinamico");
// buttonEl.setAttribute("href", "https://www.google.it/");
// buttonEl.setAttribute("target", "blank");
titleEl.textContent = "Creazione Hero Dinamico";
descriptionEl.textContent = "esercitazione in javascript";
buttonEl.textContent = "Click Here";

document.body.appendChild(heroEl);
heroEl.appendChild(wrapEl);
wrapEl.append(imgEl, titleEl, descriptionEl, buttonEl);

// document.body.appendChild(heroEl);
// heroEl.append(wrapEl, imgEl);
// wrapEl.append(titleEl, descriptionEl, buttonEl);

//secondo esercizio
buttonEl.addEventListener("click", function () {
  heroEl.style.display = "none";
});

// esercizio avanzato
// const imageGenerator = (imgUrl, title, id) => {
//   const wrapperEl = document.createElement("div");
//   const imgEl = document.createElement("img");

//   wrapperEl.setAttribute("class", "imgGenerator");
//   imgEl.setAttribute("src", imgUrl);
//   imgEl.setAttribute("alt", title);
//   imgEl.setAttribute("id", id);

//   wrapperEl.append(imgEl);

//   return wrapEl;
// };

// document.body.append(
//   imageGenerator(
//     "https://picsum.photos/200/200?1",
//     "Immagine alternativa 1",
//     "1"
//   )
// );
