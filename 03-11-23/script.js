// primo esercizio, termometro

function statusTemperature(temperature) {
  if (temperature <= 0) {
    return "minchia ru friddo";
  } else if (temperature >= 1 && temperature < 15) {
    return "cold";
  } else if (temperature >= 15 && temperature < 24) {
    return "mite";
  } else if (temperature >= 24 && temperature < 42) {
    return "hot";
  } else if (temperature >= 42) {
    return "hell";
  } else {
    return "parametro inserito non valido... Cretino!";
  }
}

console.log(statusTemperature(34)); //

// secondo esercizio

const alexVenutelli = {
  name: "Alex",
  surname: "Venutelli",
  age: 33,
  height: 170 + " cm",
  ageStatus: function ageRange(age) {
    if (age >= 0 && age < 1) {
      return "infante";
    } else if (age >= 1 && age < 11) {
      return "bambino";
    } else if (age >= 11 && age < 18) {
      return "adolescente";
    } else if (age >= 18) {
      return "adulto";
    } else {
      return "parametro fornito non valido";
    }
  },
};

console.log(alexVenutelli.ageStatus(33)); //funziona

//terzo esercizio

function showfavorites(favoriteColors) {
  for (let i = 0; i < favoriteColors.length; i++) {
    console.log(favoriteColors[i]);
  }
} // funzione per mostrare la lista degli elementi dell'array

function addColor(color) {
  favoriteColors.push(color); //funzione per aggiungere un colore all'array sopra favoriteColors
}

function removeColor(color) {
  const index = favoriteColors.indexOf(color);
  if (index !== -1) {
    favoriteColors.splice(index, 1);
  }
} //funzione per rimuovere un colore all'array sopra favoriteColors

const favoriteColors = []; // array vuoto

addColor("Giallo");
addColor("Verde");
addColor("Blallo");

console.log(favoriteColors);

addColor("Nero");

removeColor("Giallo");

showfavorites(favoriteColors);
