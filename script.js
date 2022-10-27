
const container = document.getElementById("container")
const input     = document.getElementById("input")
const frog      = document.getElementById("frog")
const chill     = document.getElementById('chill')
const fire      = document.getElementById('fire')


frog.addEventListener('click', function(){
      let para = document.createElement('h3') ;
         para.innerText = input.value + "🐸" ;
      container.appendChild(para) ;
}) 

chill.addEventListener('click', function(){
   let para = document.createElement('h3') ;
      para.innerText = input.value + "🛋️" ;
   container.appendChild(para) ;
}) 


fire.addEventListener('click', function(){
   let para = document.createElement('h3') ;
      para.innerText = input.value + "🔥" ;
   container.appendChild(para) ;
}) 