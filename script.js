let flippedCards = [];  //lista que guarda las dos cartas volteadas(display:block)
let matchedCards = [];  //array que guarda el par de cartas encontradas


function flipCard(card) {
  card.classList.add("flipped");    //la da vuelta la carta con la clase flipped
  card.querySelector("img").style.display = "block";   //muestra la imagen con display=block 
  
  flippedCards.push(card);    //agrega la carta dada vuelta que apretaste a la lista(array)

  if (flippedCards.length === 3) {   //comprueba que el array tenga 2 cartas solamnte(deja hasta dos)
    setTimeout(checkMatch, 1000);     //es el tiempo que tarda 
  }
}

function checkMatch() {   //la funcion checkmatch es la que hace la comparacion entre las cartas dadas vuelta que estan en el array
  const card1 = flippedCards[0];
  const card2 = flippedCards[1];
  const card3 = flippedCards[2];

  if (card1.id === card2.id && card2.id === card3.id) {  //las compara, si son iguales 
    card1.style.display = "none";                        //me las elimina de la vista
    card2.style.display = "none";
    card3.style.display = "none";
    matchedCards.push(card1, card2, card3);  //las agrega en el array de cartas encontradas
    
  } else {                                                                //si no son iguales
    card1.classList.remove("flipped");                                     //las da vuelta otra vez
    card2.classList.remove("flipped");
    card3.classList.remove("flipped");
    card1.querySelector("img").style.display = "none";                        //y las vuelve a ocultar
    card2.querySelector("img").style.display = "none";
    card3.querySelector("img").style.display = "none";
  }

  flippedCards = [];                           //se vacia el array para poder volver a cargar las cartas ahi y volver a usarla
  
  if (matchedCards.length === 9) {     //si ya se encontraron todas las cartas
    resetGame();               //resetea el juego
  }

  function resetGame(){
    flippedCards = [];
    matchedCards = [];
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.style.display = "block";
        card.classList.remove("flipped");
        card.querySelector("img").style.display = "none";
      });
  }
 // Reiniciar el juego después de 5 minutos
 setTimeout(resetGame, 5 * 60 * 1000);

}