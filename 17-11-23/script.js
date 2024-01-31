//setTimeout  (lancia la funzione dopo n msec.)

//funzione classica

// setTimeout(function () {
//   console.log("3");
// }, 3000),
//   //stessa funzione ma in arrow
//   setTimeout(() => {
//     console.log("1");
//   }, 1000);
// setTimeout(() => {
//   console.log("2");
// }, 2000);

// PRIMO ESERCIZIO CON AVANZATO

// const bodyImgEl = document.createElement("div");

// bodyImgEl.className = "body-img";

// document.body.appendChild(bodyImgEl);
// //Creazione popup

// const popupEl = (text, btnYesText, btnNoText) => {
//   const wrapperEl = document.createElement("div");
//   const textEl = document.createElement("p");
//   const btnEl = document.createElement("div");
//   const btnYesEl = document.createElement("button");
//   const btnNoEl = document.createElement("button");

//   wrapperEl.className = "popup";
//   textEl.textContent = text;
//   btnEl.className = "buttons-wrapper";
//   btnYesEl.textContent = btnYesText;
//   btnYesEl.addEventListener("click", function () {
//     document.body.removeChild(wrapperEl);
//     bodyImgEl.style.filter = "none";
//   });
//   btnNoEl.textContent = btnNoText;
//   btnNoEl.addEventListener("click", function () {
//     window.location.href = "https://www.google.it";
//   });

//   wrapperEl.append(textEl, btnEl);
//   btnEl.append(btnYesEl, btnNoEl);

//   return wrapperEl;
// };

// setTimeout(() => {
//   document.body.appendChild(popupEl("Sei maggiorenne?", "Si", "No"));
// }, 3000);

//SECONDO ESERCIZIO
const productGen = (data) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h3");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");

  wrapperEl.className = "product";
  titleEl.textContent = data.title;
  imgEl.src = data.thumbnail;
  imgEl.alt = data.title;
  textEl.className = "text";
  priceEl.textContent = data.price + "$";
  textEl.append(titleEl, priceEl);
  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const filteredProducts = data.products.filter(
      (product) => product.price < 50
    );
    filteredProducts.map((product) =>
      document.body.append(productGen(product))
    );
  });
