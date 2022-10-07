 let scoreboard1 = document.getElementById("score-1")
 
 let scoreboard2 = document.getElementById('score-2')
 
let count = 0
let guest = 0
 
 
 function one(){
    count += 1 
    scoreboard1.textContent = count  
 }
 function two(){
     count +=2
     scoreboard1.textContent = count
    
 }
 function three(){
     count += 3
     scoreboard1.textContent = count
 }
 function one1(){
    guest += 1 
    scoreboard2.textContent = guest 
 }
 function two2(){
     guest +=2
     scoreboard2.textContent = guest
    
 }
 function three3(){
     guest += 3
     scoreboard2.textContent = guest
 }
 
 function reset(){
     scoreboard1.textContent = count = 0
     scoreboard2.textContent = guest = 0
 }