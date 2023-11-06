/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1 --> OKAY
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3 --> OKAY
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);

/* ESERCIZIO 4 --> OKAY
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let element = pets.shift()
console.log(pets);

pets.push(element);
console.log(pets);

/* ESERCIZIO 5 --> OKAY
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" 
    con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for(let i = 0; i < cars.length; i++){
    cars[0].licensePlate = 'NEG171';
    cars[1].licensePlate = 'TRF345';
    cars[2].licensePlate = 'HBC554';
}

console.log(cars)
  

/* ESERCIZIO 6 --> non riesco a capire come fare l'ultimo passaggio...
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura 
    degli altri elementi. Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let x = new Object();
cars.push = x;
console.log(new Object)
console.log(cars);

let trim = "";
  for (let i = 0; i < cars.length; i++) {
    let y = cars[i];
    console.log(y);
  }

console.log(trim); 

/* ESERCIZIO 7 --> OKAY
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

let firstTrim = '';
for(let i = 0; i<cars.length; i++){
  let car = cars[i];
  firstTrim = car.trims[0];
  justTrims.push(firstTrim)
}
console.log(justTrims);

/* ESERCIZIO 8 --> dovrebbe essere okay
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. 
    Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

 let car = 0
for (let i = 0; i<cars.length; i++){
  car = cars[i]
  if(car.color.indexOf('b')){
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
} 

/* ESERCIZIO 9 --> OKAY
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
while (i<numericArray.length){
  let num = numericArray[i];
  console.log(num)
  i++
  if(num==32){
    break;
}
}


/* ESERCIZIO 10 --> OKAY
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni 
    di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let arrAlf = ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"];
console.log(arrAlf);

let array = [];

let lettere = "";
for( let i = 0;i < charactersArray.length;i++){
  lettere = charactersArray[i];
switch (lettere) {
  case "g": 
    array.push(7); 
    break;
  case "n": 
    array.push(12);
    break;
  case "u": 
    array.push(19);
    break;
  case "z": 
    array.push(21);
    break;
  case "d": 
    array.push(4);
    break;
  }
}

console.log(array)