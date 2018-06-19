
document.addEventListener("DOMContentLoaded", function(event){
  const containerDiv = document.getElementById('container')
  const playerOption = document.getElementById('option-select')
  const playButton = document.getElementById('play-button')
  const highScore = document.getElementById('high-score-button')
  const carTrack = document.getElementById('track')
  const leftTree = document.getElementById('left-tree')
  const rightTree = document.getElementById('right-tree')
  const userCar = document.getElementById('user-car')
  const roadMarking0 = document.getElementById('road-marking 0')
  const roadMarking1 = document.getElementById('road-marking 1')
  const roadMarking2 = document.getElementById('road-marking 2')
  const roadMarking3 = document.getElementById('road-marking 3')
  const roadMarking4 = document.getElementById('road-marking 4')
  const obstacleCar1 = document.getElementById("obstacle-car-1")
  const obstacleCar2 = document.getElementById("obstacle-car-2")
  const roadDiv = document.getElementById("two")
  const gameover = document.createElement("h1")
  gameover.innerText = "Game Over"
  gameover.style= "color: red; position:absolute; z-index:0; left:80px; top:200px"


  playButton.addEventListener("click", function moveDown() {
    playButton.innerText = "Quit"
    playButton.disabled = true;
    highScore.remove()






    let i = 150
    let j = 150
    let k = -20
    let l = 130
    let m = 280
    let n = 430
    let o = -170
    let p = -200
    let q = -200
  function step() {
    const obstaclePaths = [-12, 98, 208]
    var rand1 = obstaclePaths[Math.floor(Math.random() * obstaclePaths.length)];
    var rand2 = obstaclePaths[Math.floor(Math.random() * obstaclePaths.length)];

    // var userCoordinate = userCar.getBoundingClientRect();
    // var obstacle1Coordinate = obstacleCar1.getBoundingClientRect();
    // var obstacle2Coordinate = obstacleCar2.getBoundingClientRect();


     obstacleCar1.style.top = p + "px"
     obstacleCar2.style.top = q + "px"
     roadMarking0.style.top = o + "px";
     roadMarking1.style.top = k + "px";
     roadMarking2.style.top = l + "px";
     roadMarking3.style.top = m + "px";
     roadMarking4.style.top = n + "px";
     leftTree.style.top = i + "px";
     rightTree.style.top = 300 + j + "px";
     i+= 2
     j+= 2
     k+= 2
     l+= 2
     m+= 2
     n+= 2
     o+= 2
     p++
     q++

     var userCarTop = parseInt(userCar.style.top)
     var obstacleCar1Top = parseInt(obstacleCar1.style.top)
     var obstacleCar2Top = parseInt(obstacleCar2.style.top)
     var userCarLeft = parseInt(userCar.style.left)
     var obstacleCar1Left = parseInt(obstacleCar1.style.left)
     var obstacleCar2Left = parseInt(obstacleCar2.style.left)




     // console.log(obstacleCar1.style.top) // increasing by 1 each step
     // console.log(userCar.style.bottom) // always 50
     if ((userCarTop < (obstacleCar1Top + 120)) && ((userCarTop + 120) > obstacleCar1Top) && ((userCarLeft+3)===obstacleCar1Left)) {
       roadDiv.appendChild(gameover)
       return;


     }
     if ((userCarTop < (obstacleCar2Top + 120)) && ((userCarTop + 120) > obstacleCar2Top) && ((userCarLeft+3)===obstacleCar2Left)) {
       roadDiv.appendChild(gameover)
       return;

     }


     if (obstacleCar1.style.top === "610px" ){
       obstacleCar1.style.left = rand1+ "px"
       p = -200
     }
     if (obstacleCar2.style.top === "610px" ){
       obstacleCar2.style.left = rand2+ "px"
       q = -200
     }

     if (leftTree.style.top === "598px"){
       i = -100
     }
     if (rightTree.style.top === "598px"){
       j = -400
     }
     if (roadMarking0.style.top === "598px"){
       o = -150
     }
     if (roadMarking1.style.top === "598px"){
       k = -150
     }
     if (roadMarking2.style.top === "598px"){
       l = -150
     }
     if (roadMarking3.style.top === "598px"){
       m = -150
     }
     if (roadMarking4.style.top === "598px"){
       n = -150
     }


     setTimeout(step, 10)


  }
  step();

  window.addEventListener("keyup", function(event){
    var userCoordinate = userCar.getBoundingClientRect();
    var obstacle1Coordinate = obstacleCar1.getBoundingClientRect();
    var obstacle2Coordinate = obstacleCar2.getBoundingClientRect();

    u = parseInt(userCar.style.left)
    if (event.keyCode === 37){
      if (u === -15){
        console.log("nope!")
      }
      else
      {
        userCar.style.left = u - 110 + "px"

      }
    }
    if (event.keyCode === 39){
      if (u === 205){
        console.log("nope!")
      }
      else
      {
      userCar.style.left = u + 110 + "px"
      }
    }


    // add car obstacles
    // add collision element
  }) // end of event listener for user left/right keys

})  // end of playButton Event Listener









  playButton.addEventListener("click", function(event){
    //somehow start the game


  }) // end of playButton Event Listener









}) // end of DOM Content Loaded
