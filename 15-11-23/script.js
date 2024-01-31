// menu navigazione

const navEl = document.createElement("nav");
const logoEl = document.createElement("div");
const imgLogEl = document.createElement("img");
const navBarEl = document.createElement("div");
const buttonSearchEl = document.createElement("img");
const buttonMenuEl = document.createElement("img");

navEl.className = "menu";
logoEl.className = "logo";
imgLogEl.src = "./immagini/logo.png";
navBarEl.className = "menu-list";
buttonSearchEl.src = "./immagini/search.png";
buttonSearchEl.addEventListener("click", function () {
  window.open("https://robohash.org/");
});
buttonMenuEl.src = "./immagini/menu.png";
buttonMenuEl.addEventListener("click", function () {
  window.open("https://robohash.org/");
});

logoEl.appendChild(imgLogEl);
navBarEl.append(buttonSearchEl, buttonMenuEl);
navEl.append(logoEl, navBarEl);
document.body.appendChild(navEl);

//section robo-list

const sectionEl = document.createElement("section");
const titleEl = document.createElement("h3");
const roboListEl = document.createElement("div");

sectionEl.className = "recommended";
titleEl.textContent = "Recommended For You";
roboListEl.className = "robo-list";

//funzione per creare una singola card

//creazione degli elementi
const roboProdGen = (roboData) => {
  try {
    const wrapEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const nameEl = document.createElement("h4");
    const textEl = document.createElement("div");
    const priceEl = document.createElement("p");
    const butnHeartEl = document.createElement("button");
    const butnCartEl = document.createElement("button");

    //assegnazione degli attributi e del text content degli elementi creati sopra
    wrapEl.className = "robo";
    imgEl.src = roboData.imageUrl;
    imgEl.alt = roboData.roboName;
    nameEl.textContent = roboData.roboName;
    textEl.className = "text";
    priceEl.textContent = roboData.price;
    butnHeartEl.className = "heart";
    butnHeartEl.textContent = "🧡";
    butnHeartEl.addEventListener("click", function () {
      window.open("https://robohash.org/");
    });
    butnCartEl.textContent = "➕";
    butnCartEl.className = "cart";
    butnCartEl.addEventListener("click", function () {
      window.open("https://robohash.org/");
    });

    // append per collegare gli elementi tra loro

    textEl.append(nameEl, priceEl);
    wrapEl.append(butnHeartEl, butnCartEl, textEl, imgEl);

    // return

    return wrapEl;
  } catch (error) {
    console.error(
      "Si è verificato un errore durante la generazione del robot:"
    );
  }
};

//array che contiene oggetti che sono i dati delle carte

const mockData = [
  {
    id: 1,
    roboName: "Alberto",
    price: 1000000000 + " ¥",
    imageUrl: "https://robohash.org/Alberto",
  },
  {
    id: 2,
    roboName: "Andrea",
    price: 1000 + " ₤",
    imageUrl: "https://robohash.org/Andrea",
  },
  {
    id: 3,
    roboName: "Tony",
    price: "mezzo kg di Nduja",
    imageUrl: "https://robohash.org/Tony",
  },
  {
    id: 4,
    roboName: "Riccardo",
    price: 19.99 + "$",
    imageUrl: "https://robohash.org/Riccardo",
  },
  {
    id: 5,
    roboName: "Alex",
    price: 30 + " ₿",
    imageUrl: "https://robohash.org/Alex",
  },
  {
    id: 6,
    roboName: "Stefano",
    price: 9000 + " £",
    imageUrl: "https://robohash.org/Stefano",
  },
  {
    id: 7,
    roboName: "Rita",
    price: 9999 + " ₹",
    imageUrl: "https://robohash.org/Rita",
  },
  {
    id: 8,
    roboName: "Giorgia",
    price: 9999 + " CHF",
    imageUrl: "https://robohash.org/Giorgia",
  },
  {
    id: 9,
    roboName: "Valentina",
    price: 9999 + " €",
    imageUrl: "https://robohash.org/Valentina",
  },
  {
    id: 10,
    roboName: "Perez",
    price: 19.09 + " €",
    imageUrl: "https://robohash.org/Perez",
  },
  {
    id: 9,
    roboName: "Roberto",
    price: 50 + " CZK",
    imageUrl: "https://robohash.org/Roberto",
  },
];

//append

// roboListEl.appendChild(wrapEl);
sectionEl.append(titleEl, roboListEl);
document.body.appendChild(sectionEl);
mockData.map((robo) => roboListEl.appendChild(roboProdGen(robo)));
