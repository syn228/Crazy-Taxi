
document.addEventListener("DOMContentLoaded", function(event){
  const containerDiv = document.getElementById('container')
  const playerOption = document.getElementById('option-select')
  const playButton = document.getElementById('play-button')
  const highScore = document.getElementById('high-score-button')
  const carTrack = document.getElementById('track')
  const leftTree = document.getElementById('left-tree')
  const rightTree = document.getElementById('right-tree')
  const userCar = document.getElementById('user-car')



  playButton.addEventListener("click", function moveDown() {


    let i = 150
    let j = 150
  function step() {
     leftTree.style.top = i + "px";
     rightTree.style.top = 300 + j + "px";
     i++
     j++
     // if (i < 600) setTimeout(step,10);

     if (leftTree.style.top === "599px"){
       // leftTree.style.top = "-100px"
       i = -100
     }
     if (rightTree.style.top === "599px"){
       // rightTree.style.top = "-100px"
       j = -400
     }
     setTimeout(step, 10)
  }
  step();
})  // end of playButton Event Listener









  playButton.addEventListener("click", function(event){
    //somehow start the game


  }) // end of playButton Event Listener









}) // end of DOM Content Loaded
