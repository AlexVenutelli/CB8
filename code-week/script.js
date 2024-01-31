//chiamata all'endpoint

const endpoint = "https://jsonplaceholder.typicode.com/users";

const getUsersList = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

// sezione 1 - barra titolo e bottone aggiungi contatto
const titleElFn = () => {
  const headerEl = document.createElement("div");
  const imgContactEl = document.createElement("img");
  const titleEl = document.createElement("h1");
  const addContactBtnEl = document.createElement("img"); // in una vera rubrica si setterà al fine di aggiungere un nuovo contatto.

  headerEl.className = "header";
  titleEl.textContent = "Address Book";
  imgContactEl.src = "./immagini/contatti 2.png";
  imgContactEl.className = "contact-img";
  addContactBtnEl.src = "./immagini/addContacts.png";
  addContactBtnEl.className = "add-contact";

  headerEl.append(imgContactEl, titleEl, addContactBtnEl);

  return headerEl;
};

// sezione 2 - bottoni filtro
const buttonsContainerFn = () => {
  const buttonsContainerEl = document.createElement("div");
  buttonsContainerEl.className = "buttons-container";

  const imgFilterEl = document.createElement("img");

  imgFilterEl.src = "./immagini/filter.png";
  imgFilterEl.className = "filter-img";

  buttonsContainerEl.appendChild(imgFilterEl);

  ["A-E", "F-L", "M-Z", "Tutti"].forEach((btnText) => {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = btnText;
    buttonEl.addEventListener("click", () => filterUsers(btnText));
    buttonsContainerEl.appendChild(buttonEl);
  });

  // ho inserito un la lettera A, per effettuare un controllo sul filtro di non corrispondenza, e funziona :D

  // ["A", "A-E", "F-L", "M-Z", "Tutti"].forEach((btnText) => {
  //   const buttonEl = document.createElement("button");
  //   buttonEl.textContent = btnText;
  //   buttonEl.addEventListener("click", () => filterUsers(btnText));

  //   buttonsContainerEl.appendChild(buttonEl);
  // });

  return buttonsContainerEl;
};

// sezione 3 - visualizzazione contatti

const renderUserCard = (user) => {
  const userCardEl = document.createElement("div");
  userCardEl.className = "user-card";

  const roboPhotoGen = "https://robohash.org/" + user.username;

  const userPhotoEl = document.createElement("img");
  userPhotoEl.src = roboPhotoGen;
  userPhotoEl.alt = user.name;
  userPhotoEl.className = "photo-profile";

  const textEl = document.createElement("div");
  textEl.className = "info-contact";

  const infoContactTextEl = document.createElement("div");
  infoContactTextEl.className = "info-text-contact";

  const userNameEl = document.createElement("h2");
  userNameEl.textContent = user.name;

  const userPhoneEl = document.createElement("p");
  userPhoneEl.textContent = user.phone;

  const contactBtnEl = document.createElement("div");
  contactBtnEl.className = "contact-buttons-container";

  const callBtnEl = document.createElement("img");
  const messageBtnEl = document.createElement("img");

  callBtnEl.className = "call-button";
  callBtnEl.src = "./immagini/call.png";
  messageBtnEl.className = "message-button";
  messageBtnEl.src = "./immagini/message.png";

  contactBtnEl.append(callBtnEl, messageBtnEl);
  infoContactTextEl.append(userNameEl, userPhoneEl);
  textEl.append(infoContactTextEl, contactBtnEl);
  userCardEl.append(userPhotoEl, textEl);

  return userCardEl;
};

const renderUsersListFn = async () => {
  const usersWrapperEl = document.createElement("div");
  usersWrapperEl.className = "users-container";

  const usersList = await getUsersList();

  if (usersList.length === 0) {
    const noUsersMessageEl = document.createElement("p");
    noUsersMessageEl.textContent = "Nessun utente corrispondente";
    usersWrapperEl.appendChild(noUsersMessageEl);
  } else {
    usersList.sort((a, b) => a.name.localeCompare(b.name));

    usersList.forEach((user) => {
      const userCardEl = renderUserCard(user);
      usersWrapperEl.appendChild(userCardEl);
    });
  }

  return usersWrapperEl;
};

// appendo tutto
document.body.append(
  titleElFn(),
  buttonsContainerFn(),
  await renderUsersListFn()
);

//funzionalità del filtro contatti

const updateUsersList = (filteredUsers) => {
  const usersContainer = document.querySelector(".users-container");

  while (usersContainer.firstChild) {
    usersContainer.removeChild(usersContainer.firstChild);
  } //rimuove il firstChild da userContainer, fintanto che sia presente un firstChild. in sostanza, ogni volta che carichiamo un filtro nuovo, cancella i risultati di quello precedente piuttosto che sovrascriverli

  if (filteredUsers.length === 0) {
    const noUsersMessageEl = document.createElement("p");
    noUsersMessageEl.textContent = "Nessun utente corrispondente";
    usersContainer.appendChild(noUsersMessageEl);
  } else {
    filteredUsers.sort((a, b) => a.name.localeCompare(b.name)); //ordina in ordine alfabetico

    filteredUsers.forEach((user) => {
      const userCardEl = renderUserCard(user);
      usersContainer.appendChild(userCardEl);
    });
  }
};

const filterUsers = (filter) => {
  getUsersList().then((usersList) => {
    let filteredUsers = [];

    if (filter === "A") {
      filteredUsers = usersList.filter(
        (user) => user.name.charAt(0).toUpperCase() === "A"
      );
    } else if (filter === "A-E") {
      filteredUsers = usersList.filter(
        (user) =>
          user.name.charAt(0).toUpperCase() >= "A" &&
          user.name.charAt(0).toUpperCase() <= "E"
      );
    } else if (filter === "F-L") {
      filteredUsers = usersList.filter(
        (user) =>
          user.name.charAt(0).toUpperCase() >= "F" &&
          user.name.charAt(0).toUpperCase() <= "L"
      );
    } else if (filter === "M-Z") {
      filteredUsers = usersList.filter(
        (user) =>
          user.name.charAt(0).toUpperCase() >= "M" &&
          user.name.charAt(0).toUpperCase() <= "Z"
      );
    } else if (filter === "Tutti") {
      filteredUsers = usersList;
    }

    updateUsersList(filteredUsers);
  });
};
