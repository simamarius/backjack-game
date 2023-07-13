



let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let message = ""
let firstCard = getRandomCards()
let secondCard = getRandomCards()
const checkOut = document.getElementById("btn3")
const modalCheckout = document.getElementById('modal1')
const btn1 = document.getElementById("btn1")




checkOut.addEventListener('click', function(){
    
   
    if (isAlive === true && hasBlackJack === false) {
        modalCheckout.style.display = 'inline'
        const winEL = document.getElementById('win')
        winEL.innerHTML = `YOU WIN with <br> the sum of ${sum}`
       
    }
})   
    
const modalCloseBtn = document.getElementById('modal-close-btn')
modalCloseBtn.addEventListener('click', function()
  {
     modalCheckout.style.display = 'none'
   })  
    

    




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
    const button2 = document.getElementById('btn2');

    button2.classList.remove("disabled");
    const button3 = document.getElementById('btn3');
    button3.classList.remove("disabled");
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
    const button = document.getElementById('btn2');
    cardsEl.innerHTML = `Cards 
    <div id="row" ></div>`
   const row = document.getElementById('row');
    for (let i = 0; i < cards.length; i++) {
        let cardImage = document.createElement("img");
        cardImage.src = `imagini_carte/${cards[i]}.png`;
        cardImage.classList.add("card-image")
        row.appendChild(cardImage);
    }
        sumEl.textContent = " " + sum
        sumEl.classList.add("sum")
        
  if ( sum <= 20 ) 
  {
    message = "Do you want another card?"
   
  } 
   else if ( sum === 21 ) 
   {
    message = "Yeah, you have a blackjack!"
    hasBlackJack = true
    modalCheckout.style.display = 'inline'
    const winEL = document.getElementById('win')
    winEL.innerHTML = `Yeah, you have a blackjack!`
    checkOut.classList.add("disabled")
    btn1.textContent = "New Game"
    button.classList.add("disabled")
  } 
  else {
    message = "You lose!"
    isAlive = false
    checkOut.classList.add("disabled")
    button.classList.add("disabled")
    btn1.textContent = "New Game"
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
const button = document.getElementById('btn2');
if (!isAlive || hasBlackJack) {
    button.classList.add("disabled")
  } else {
    button.classList.remove("disabled")
  }
}

// modal

const modal = document.getElementById('modal')

const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const namePlayer = document.getElementById("player")

setTimeout(function(){
    modal.style.display = 'block'
}, 1000)



consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    consentForm.style.display = 'none'
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    namePlayer.style.display = 'inline'
    document.getElementById("player").innerHTML = `${fullName}`

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="loading.svg" class="loading">
        <p id="upload-text">Your game is loading..</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Starting...`
    }, 1700)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Welcome <span class="modal-display-name">${fullName}</span> ! </h2>
        <p>Start Game</p>
        <br>
        <br>
        <img src="blackjack.png" alt="BlackJack" width="200" height="200" >
    `
    }, 3000)

    setTimeout(function(){
        modal.style.display = 'none'
    }, 7000)

  
}) 

