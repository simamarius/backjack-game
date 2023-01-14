
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let message = ""
let firstCard = getRandomCards()
let secondCard = getRandomCards()

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let cards = [ firstCard, secondCard ]

function startGame() {
    isAlive = true
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard


    renderGame()
}
function getRandomCards() {
    let randomNumbers = Math.floor(Math.random() * 13) + 1;
    if ( randomNumbers > 10 ){
        return 10
    } else if ( randomNumbers === 1 ) {
        return 11 
    } else {
        return randomNumbers
    }
}
   function renderGame() {

     cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
    }
        sumEl.textContent = "Sum: " + sum
  if ( sum <= 20 ) 
  {
    message = "Do you want another card?"
  } 
   else if ( sum === 21 ) 
   {
    message = "Yeah, you have a blackjack!"
    hasBlackJack = true
  } 
  else {
    message = "You lose!"
    isAlive = false
}
messageEl.textContent = message
} 

function newCard() 
{
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) 
    {
    let card = getRandomCards()
    sum += card
    cards.push(card) // pushing the random card in cards array
    renderGame()
    
}
}
