
document.addEventListener("DOMContentLoaded", function(event){
  const containerDiv = document.getElementById('container')
  const highScoreChart = document.getElementById("highScoreChart")
  const highScoreHeading = document.createElement("H3")
  highScoreHeading.id = "high-score-heading"
  highScoreHeading.style = "color:midnightblue"
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
  const obstacleCar3 = document.getElementById("obstacle-car-3")
  const obstacleCar4 = document.getElementById("obstacle-car-4")
  const leftDiv = document.getElementById("one")
  const roadDiv = document.getElementById("two")
  const rightDiv = document.getElementById("three")
  const gameover = document.createElement("h1")
  const userForm = document.getElementById("user-form")
  const userInput = document.getElementById("user-input")
  gameover.innerText = "GAME OVER"
  gameover.style= "color: red; position:absolute; z-index:0; left:60px; top:200px"
  const counter = document.createElement("h1")
  counter.style= "color:blue; position:absolute; left: 40px; border: 2px solid; padding:1px"
  const finalScore = document.createElement("h1")
  finalScore.style= "color: black; position:absolute; z-index:0; left:80px; top:250px"

  playButton.disabled = true;
  userForm.addEventListener("submit", function (event) {
    event.preventDefault()
    playButton.disabled = false;

    const body = {username: userInput.value}

    let config =  {
      method:'POST',
      headers:{
          'Content-type':'application/json',
          'Data-type':'application/json'
              },
      body:JSON.stringify(body)
    }

    fetch("http://localhost:3000/api/v1/users", config)
  }) // end of userForm event listener



// HIGH SCORE EVENT LISTENER STARTS HERE
  highScore.addEventListener("click", function(event){
    fetch("http://localhost:3000/api/v1/games").then(r=>r.json()).then(findHighScores)

    function findHighScores(gameObjs){

      const sortedObjs = gameObjs.sort(function(gameObj1, gameObj2) {return gameObj2.score-gameObj1.score})
      const top5Objs = sortedObjs.slice(0,5)

      highScoreChart.style="border-style: solid; padding-left: 20px; padding-right: 20px; "
      highScoreHeading.innerText = "High Scores:"
      highScoreChart.appendChild(highScoreHeading)

      for (i=0; i < top5Objs.length; i++){
        const topScoreHTML = `<p style="text-align:center; color:magenta" id="li-${i+1}"> ${top5Objs[i].username}: ${top5Objs[i].score}</p>`
        highScoreChart.innerHTML += topScoreHTML
      } // end of for loop



    } // end of findHighScores function


  }) //end of highScore event listener


// THE ENTIRE GAME  STARTS HERE
  playButton.addEventListener("click", function moveDown() {
    userCar.style.left = 95 + "px"
    gameover.remove()
    finalScore.remove()

    function getUserIds(userObjs){
      const userObj = userObjs.find(e => e.username === userInput.value)
      return userObj.id
    }


    playButton.innerText = "Quit"
    playButton.disabled = true;
    highScore.remove()
    userForm.remove()
    leftDiv.appendChild(counter)
    counter.innerText = 0


    let i = 150
    let j = 150
    let k = -20
    let l = 130
    let m = 280
    let n = 430
    let o = -170
    let p = 0
    let q = -400
    let r = -800
    let s = -1200
  function step() {
    counter.innerText = parseInt(counter.innerText) + 3
    const obstaclePaths = [-12, 98, 208]
    var rand1 = obstaclePaths[Math.floor(Math.random() * obstaclePaths.length)];
    var rand2 = obstaclePaths[Math.floor(Math.random() * obstaclePaths.length)];
    var rand3 = obstaclePaths[Math.floor(Math.random() * obstaclePaths.length)];
    var rand4 = obstaclePaths[Math.floor(Math.random() * obstaclePaths.length)];

    var backgroundIncrementValue, obstacleIncrementValue;

    if (counter.innerText < 1500){
      var backgroundIncrementValue = 4
      var obstacleIncrementValue = 2
    }
    else if (counter.innerText >= 1500 && counter.innerText < 3000){
      var backgroundIncrementValue = 6
      var obstacleIncrementValue = 3
    }
    else if (counter.innerText >= 3000 && counter.innerText < 4500){
      var backgroundIncrementValue = 8
      var obstacleIncrementValue = 4
    }
    else if (counter.innerText >= 4500 && counter.innerText < 6000){
      var backgroundIncrementValue = 10
      var obstacleIncrementValue = 5
    }
    else if (counter.innerText >= 6000 && counter.innerText < 7500){
      var backgroundIncrementValue = 12
      var obstacleIncrementValue = 6
    }
    else if (counter.innerText >= 7500 && counter.innerText < 9000){
      var backgroundIncrementValue = 14
      var obstacleIncrementValue = 7
    }
    else if (counter.innerText >= 9000 && counter.innerText < 10000){
      var backgroundIncrementValue = 16
      var obstacleIncrementValue = 8
    }
    else if (counter.innerText >= 10000 && counter.innerText < 13000){
      var backgroundIncrementValue = 18
      var obstacleIncrementValue = 9
    }
    else if (counter.innerText >= 13000){
      var backgroundIncrementValue = 20
      var obstacleIncrementValue = 10
    }




     obstacleCar1.style.top = p + "px"
     obstacleCar2.style.top = q + "px"
     obstacleCar3.style.top = r + "px"
     obstacleCar4.style.top = s + "px"
     roadMarking0.style.top = o + "px";
     roadMarking1.style.top = k + "px";
     roadMarking2.style.top = l + "px";
     roadMarking3.style.top = m + "px";
     roadMarking4.style.top = n + "px";
     leftTree.style.top = i + "px";
     rightTree.style.top = 300 + j + "px";
     i+= backgroundIncrementValue
     j+= backgroundIncrementValue
     k+= backgroundIncrementValue
     l+= backgroundIncrementValue
     m+= backgroundIncrementValue
     n+= backgroundIncrementValue
     o+= backgroundIncrementValue
     p+= obstacleIncrementValue
     q+= obstacleIncrementValue
     r+= obstacleIncrementValue
     s+= obstacleIncrementValue


     var userCarTop = parseInt(userCar.style.top)
     var obstacleCar1Top = parseInt(obstacleCar1.style.top)
     var obstacleCar2Top = parseInt(obstacleCar2.style.top)
     var obstacleCar3Top = parseInt(obstacleCar3.style.top)
     var obstacleCar4Top = parseInt(obstacleCar4.style.top)
     var userCarLeft = parseInt(userCar.style.left)
     var obstacleCar1Left = parseInt(obstacleCar1.style.left)
     var obstacleCar2Left = parseInt(obstacleCar2.style.left)
     var obstacleCar3Left = parseInt(obstacleCar3.style.left)
     var obstacleCar4Left = parseInt(obstacleCar4.style.left)

     function gameOver(){
     fetch(`http://localhost:3000/api/v1/users`).then(r => r.json()).then(getUserIds).then(postGame)
     playButton.innerText = "Retry"
     playButton.disabled = false
     function postGame(userId){
       const finalScore = parseInt(counter.innerText)
       const body = {username: userInput.value, user_id: userId, score: finalScore}

       let config =  {
         method:'POST',
         headers:{
             'Content-type':'application/json',
             'Data-type':'application/json'
                 },
         body:JSON.stringify(body)
       }
       fetch('http://localhost:3000/api/v1/games', config)
      }
     }

     // console.log(obstacleCar1.style.top) // increasing by 1 each step
     // console.log(userCar.style.bottom) // always 50
     if ((userCarTop < (obstacleCar1Top + 120)) && ((userCarTop + 120) > obstacleCar1Top) && ((userCarLeft+3)===obstacleCar1Left)) {
       roadDiv.appendChild(gameover)
       finalScore.innerText = `Score: ${counter.innerText}`
       roadDiv.appendChild(finalScore)
       gameOver();
       return;


     }
     if ((userCarTop < (obstacleCar2Top + 110)) && ((userCarTop + 110) > obstacleCar2Top) && ((userCarLeft+3)===obstacleCar2Left)) {
       roadDiv.appendChild(gameover)
       finalScore.innerText = `Score: ${counter.innerText}`
       roadDiv.appendChild(finalScore)
       gameOver();
       return;

     }
     if ((userCarTop < (obstacleCar3Top + 110)) && ((userCarTop + 110) > obstacleCar3Top) && ((userCarLeft+3)===obstacleCar3Left)) {
       roadDiv.appendChild(gameover)
       finalScore.innerText = `Score: ${counter.innerText}`
       roadDiv.appendChild(finalScore)
       gameOver();
       return;

     }
     if ((userCarTop < (obstacleCar4Top + 110)) && ((userCarTop + 110) > obstacleCar4Top) && ((userCarLeft+3)===obstacleCar4Left)) {
       roadDiv.appendChild(gameover)
       finalScore.innerText = `Score: ${counter.innerText}`
       roadDiv.appendChild(finalScore)
       gameOver();
       return;


     }

     if (obstacleCar1Top >= 800 ){
       obstacleCar1.style.left = rand1+ "px"
       p = -400
     }
     if (obstacleCar2Top >= 800){
       obstacleCar2.style.left = rand2+ "px"
       q = -400
     }
     if (obstacleCar3Top >= 800){
       obstacleCar3.style.left = rand3+ "px"
       r = -400
     }
     if (obstacleCar4Top >= 800 ){
       obstacleCar4.style.left = rand4+ "px"
       s = -400
     }

     if (parseInt(leftTree.style.top) >= 600){
       i = -100
     }
     if (parseInt(rightTree.style.top) >= 600){
       j = -400
     }
     if (parseInt(roadMarking0.style.top) >= 600){
       o = -150
     }
     if (parseInt(roadMarking1.style.top) >= 600){
       k = -150
     }
     if (parseInt(roadMarking2.style.top) >= 600){
       l = -150
     }
     if (parseInt(roadMarking3.style.top) >= 600){
       m = -150
     }
     if (parseInt(roadMarking4.style.top) >= 600){
       n = -150
     }
     setTimeout(step, 10)
  }
  step();

  window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([ 38, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
  }, false);
})  // end of playButton Event Listener

  window.addEventListener("keyup", function(event){
    u = parseInt(userCar.style.left)
    if (event.keyCode === 37){
      if (u === 95){
        userCar.style.left = -15 + "px"
      }
      else if (u === -15){
        console.log("nope!")
      }
      else if (u === 205){
        userCar.style.left = 95 + "px"
      }
    }
    else if (event.keyCode === 39){
      if  (u === -15){
        userCar.style.left = 95 + "px"
      }
      else if (u === 95){
        userCar.style.left = 205 + "px"
      }
      else if (u === 205){
        console.log("nope!")
      }
    }
  })    // end of event listener for user left/right keys







}) // end of DOM Content Loaded
