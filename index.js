let sum = 0
let cards = []
let message=""
isalive=true
has_blackjack=false
activatedstartgame=false
let meassageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
player={name:"Naru",chips:145}
playerEl.textContent = player.name+": $"+player.chips

function getrandomcard(){
    random_num = Math.floor(Math.random()*13) + 1
    if(random_num === 1){
        random_num = 11
    }
    else if(random_num===11 || random_num===12 || random_num===13){
        random_num = 10
    }
    return random_num
}

function startgame(){
    let first_num = getrandomcard()
    let second_num = getrandomcard()
    cards=[first_num, second_num]
    sum = first_num + second_num
    
    rendergame()
}
function rendergame() {
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }  
    sumEl.textContent = "Sum: " + sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "Wohoo! You've got Blackjack"
        has_blackjack=true
    }
    else{
        message = "You're out of the game"
        isalive = false
    } 
    meassageEl.textContent = message 
}

function newcard(){
    if(has_blackjack==false && isalive==tru){
        let third_num = getrandomcard()
        sum += third_num
        cards.push(third_num)  
        rendergame()
    }
}

