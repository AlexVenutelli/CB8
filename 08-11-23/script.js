//primo esercizio

const sum = (first, second, third) => first + second + third;

const sub = (first, second, third) => first - second - third;

const mult = (first, second, third) => first * second * third;

const div = (first, second, third) => {
  if (first !== 0 && second !== 0 && third !== 0) {
    return first / second / third;
  } else {
    return "error";
  }
};
const calculator = (operator, first, second, third) =>
  operator(first, second, third);

console.log(calculator(sum, 1, 2, 3));
console.log(calculator(div, 100, 2, 5));
console.log(calculator(mult, 5, 5, 5));
console.log(calculator(sub, 10, 5, 0));

// secondo esercizio

const elettronicProducts = [
  {
    id: 1,
    nome: "Smartphone",
    immagine: "https://esempio.com/immagine1.jpg",
    descrizione:
      "Uno smartphone di ultima generazione con fotocamera di alta qualità.",
    prezzo: 299.0,
  },
  {
    id: 2,
    nome: "Laptop",
    immagine: "https://esempio.com/immagine2.jpg",
    descrizione:
      "Un potente laptop per le tue esigenze di lavoro e intrattenimento.",
    prezzo: 599.0,
  },
  {
    id: 3,
    nome: "Televisore 4K",
    immagine: "https://esempio.com/immagine3.jpg",
    descrizione:
      "Un televisore con risoluzione 4K per un'esperienza visiva eccezionale.",
    prezzo: 899.0,
  },
  {
    id: 4,
    nome: "Cuffie Wireless",
    immagine: "https://esempio.com/immagine4.jpg",
    descrizione:
      "Cuffie senza fili con audio di alta qualità e comfort di lunga durata.",
    prezzo: 89.0,
  },
  {
    id: 5,
    nome: "Fotocamera Mirrorless",
    immagine: "https://esempio.com/immagine5.jpg",
    descrizione:
      "Una fotocamera mirrorless per catturare momenti speciali con precisione.",
    prezzo: 699.0,
  },
];

// metodo forEach

elettronicProducts.forEach((elettronicProduct) =>
  console.log(elettronicProduct)
); //forEach itera il contenuto dell'array senza creare un array nuovo

// for (let i = 0; i < elettronicProducts.length; i++) {
//   console.log(elettronicProducts[i]);
// }    //ciclo for

// usiamo forEach invece di un ciclo for in quanto il codice è più corto e semplice da capire,
// non abbiamo bisogno di creare una variabile contatotre extra, rendendo quindi il debugging più semplice
// forEach si ferma automaticamente quando termina l'iterazione sugli elementi dell'array

// metodo map

const productName = elettronicProducts.map(
  (elettronicProduct) => elettronicProduct.nome
); // map esegue una iterazione andandoci a restituire un nuovo array dove le funzioni callback sono state eseguite

console.log(productName); // array contenente solo il valore nome dei singoli oggetti

const priceOffer = elettronicProducts.map((elettronicProduct) =>
  elettronicProduct.prezzo <= 299 ? elettronicProduct : null
);

console.log(priceOffer); // array con elementi che rientrano nella fascia di prezzo indicata nel metodo map, altrimenti null

// terzo esercizio avanzato

const numbers = [3, 6, 9, 12];

const numbers2 = [5, 10, 15, 20];

//moltiplicare per due, elementi primo array
const multnumb = numbers.map((number) => number * 2);

console.log(multnumb);

//aggiungere +5 ad ogni elemento del secondo array

const addFive = numbers2.map((number) => number + 5);

console.log(addFive);

// filtrare nel primo array solo i numeri maggiori di 10

const greaterTen = numbers.filter((number) => number > 10);

console.log(greaterTen);

// nel secondo array filtrare solo i numeri pari

const evenNumb = numbers2.filter((number) => number % 2 === 0);

console.log(evenNumb);
