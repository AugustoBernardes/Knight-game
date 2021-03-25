
// Get the HTML chat
let chat = document.getElementById("text")

// Deelete Boss

let bossImage = document.getElementById("changeBossImage")

// Delete Life

let lifeImage = document.getElementById("deleteLife")

// Display Game

let display = document.getElementById("gameDisplay")

// attack Input
// HTML
let playerLifes = document.getElementById("playerLife")

// Var Life
let playerLife = 3

// Boss number beetween (1 and 3)
let bossNumber = parseInt(Math.random() * 5) + 1

console.log(bossNumber)

function inputAttack(){

    let attackInput = document.getElementById("playerInput")

    let attack = parseInt(attackInput.value)
    console.log(attack)

    console.log(bossNumber)

    while (playerLife > 0){
       
        if(attack >= 1 && attack <= 5 ){
            
            
            if (attack == bossNumber ){
                chat.innerHTML = `
                <p>You: "Hit the boss" </p>
                <p>Boss: Wait? How!</p>
                <p>You: I said i'm the best ! </p>
                <p>Boss: Nooooo... (DEAD) ""</p>
                `
    
                bossImage.remove()
                deleteLife.remove()
    
                display.innerText = `
                --RIP--
                Boss is dead...
                `
    
    
                setTimeout(() => {
                    restart()
                    alert("Congrats! You killed the boss!")
                }, 3900);
                
                break
            } 
            
            else if (attack != bossNumber){
    
                console.log(playerLife)
                playerLife = playerLife - 1
                playerLifes.innerHTML = `${playerLife}`
    
                setTimeout(() => {
                    chat.innerHTML = `
                    <p>Fighiting...</p>
                    `
                    
                }, 3500);

                chat.innerHTML = `
                <p>Boss: You missed, you gonna die!</p>
                <p>You: I will kill you.</p>
                <p>Boss: Lets see...</p>
                `
               
                break
            }
        }
            else{
                alert("Use Your attacks !")
                break
            }
}
            
       

      

    if (playerLife == 0 ){
        chat.innerHTML = `
        <p>You: "Missed" </p>
        <p>You: No please..Don't kill me ! </p>
        <p>Boss: HaHaHa...I said,now DIE!</p>
        `
        setTimeout(() => {
        alert("You're dead!")

        restart()
        }, 3500);
    
    } 

    
   
}


// Restart page and Js function
function restart(){
    document.location.href = ""
}
