
window.onload = function(){
    let c = document.getElementById("myCanvasLevel1");
    let ctx = c.getContext("2d");    
    ctx.clearRect(0, 0, c.width, c.height);
// draw lines
function drawLines(){
    ctx.fillStyle = "red";
    ctx.fillRect(100,0,10,c.height);
    ctx.fillStyle = "red";
    ctx.fillRect(200,0,10,c.height);
    ctx.fillStyle = "red";
    ctx.fillRect(300,0,10,c.height);
    ctx.fillStyle = "red";
    ctx.fillRect(400,0,10,c.height);
    ctx.fillStyle = "red";
    ctx.fillRect(500,0,10,c.height);
    ctx.fillStyle = "red";
    ctx.fillRect(600,0,10,c.height);
    ctx.fillStyle = "red";
    ctx.fillRect(700,0,10,c.height);
    ctx.fillStyle = "red";
    ctx.fillRect(800,0,10,c.height);
    ctx.fillStyle = "red";
    ctx.fillRect(900,0,10,c.height);
ctx.fillStyle = "yellow";
ctx.fillRect(0,100, c.width, 10);
ctx.fillStyle = "yellow";
ctx.fillRect(0,200, c.width, 10);
ctx.fillStyle = "yellow";
ctx.fillRect(0,300, c.width, 10);
ctx.fillStyle = "yellow";
ctx.fillRect(0,400, c.width, 10);
ctx.fillStyle = "yellow";
ctx.fillRect(0,500, c.width, 10);
}
let wonLvl1 = true;
//the goal
let finishGoal = {
  x1: 420, y1:220,
  width: 80,
  height: 80
}
function drawGoal(finishGoal){
  let goal = new Image();
  goal.src = "../images/treasure-chest.png";
  goal.onload = function () {
      ctx.drawImage(goal, finishGoal.x1, finishGoal.y1, finishGoal.width, finishGoal.height);
  } 
}
// the cloud
let theCloud = {
  x1: 10, y1: 510,
  x2: 210, y2: 510,
  x3: 310, y3: 510,//top
  x4: 110, y4: 310,
  x5: 210, y5: 310,
  x6: 410, y6: 310,
  x7: 510, y7: 310,
  x8: 110, y8: 110,//bottom
  x9: 310, y9: 110,
  x10: 510, y10: 110,
  width: 90,
  height: 90
}
function drawCloud(theCloud){
  let cloud = new Image();
  cloud.src = "../images/cloud2.png";
  cloud.onload = function () {
    ctx.drawImage(cloud, theCloud.x1, theCloud.y1, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x2, theCloud.y2, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x3, theCloud.y3, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x4, theCloud.y4, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x5, theCloud.y5, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x6, theCloud.y6, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x7, theCloud.y7, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x8, theCloud.y8, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x9, theCloud.y9, theCloud.width, theCloud.height);
    ctx.drawImage(cloud, theCloud.x10, theCloud.y10, theCloud.width, theCloud.height);
//       ctx.drawImage(cloud, 10, 510, 90, 90);
//       ctx.drawImage(cloud, 210, 510, 90, 90);
//       ctx.drawImage(cloud, 310, 510, 90, 90);
//       // 
//       ctx.drawImage(cloud, 110, 310, 90, 90);
//       ctx.drawImage(cloud, 210, 310, 90, 90);
//       ctx.drawImage(cloud, 410, 310, 90, 90);
//       ctx.drawImage(cloud, 510, 310, 90, 90);
//       //
//       ctx.drawImage(cloud, 110, 110, 90, 90);
//       ctx.drawImage(cloud, 310, 110, 90, 90);
//       ctx.drawImage(cloud, 510, 110, 90, 90);
  }
}
// the huricanes
let theHuricane = {
  x1: 420, y1: 420,//horizontal bottom
  // x2: 20, y2: 20,//vertical left
  // x3: 620, y3: 120,//vertical right
  x4: 320, y4: 220,//horizontal
  width: 80,
  height: 80,
  dx: 10, dy: 10
}
function moveRight(){
  if(theHuricane.x1 < 10){theHuricane.x1 += 700;}
  if(theHuricane.y2 > 500){theHuricane.y2 -= 400;}
  if(theHuricane.y3 > 500){theHuricane.y3 -= 400;}
  if(theHuricane.x4 < 10){theHuricane.x4 += 700;}
  // if(theHuricane.x1 > 720){theHuricane.x1 -= 50;}
  theHuricane.x1 -= 100;
  theHuricane.y3 += 100;
  theHuricane.y2 += 100;
  theHuricane.x4 -= 100;
}
// function moveHuricane(theHuricane){
//   // ctx.clearRect(0, 0, c.width, c.height);
//   if (theHuricane.x1 < c.width || theHuricane.x1 > c.width - theHuricane.width) {theHuricane.dx = -theHuricane.dx; }
//   if (theHuricane.y1 < c.height || theHuricane.y1 > c.height - theHuricane.height) {theHuricane.dy = -theHuricane.dy; }
//   theHuricane.x1 += theHuricane.dx;
//   theHuricane.y1 += theHuricane.dy;
//   // ctx.drawImage(huricane, theHuricane.x1, theHuricane.y1);  
//   drawHuricanes();
// }
function drawHuricanes(theHuricane){
  huricane = new Image();
  huricane.src = "../images/huricane.png";
  huricane.onload = function () {
      ctx.drawImage(huricane, theHuricane.x1, theHuricane.y1, theHuricane.width, theHuricane.height);
      ctx.drawImage(huricane, theHuricane.x2, theHuricane.y2, theHuricane.width, theHuricane.height);
      ctx.drawImage(huricane, theHuricane.x3, theHuricane.y3, theHuricane.width, theHuricane.height);
      ctx.drawImage(huricane, theHuricane.x4, theHuricane.y4, theHuricane.width, theHuricane.height);
      // setInterval('moveHuricane()', 10);

    }
}
/////////////////////////////////////////////////////////////////////////////////
// the coin
let theCoin = {
  x1: 120, y1: 20,
  x2: 320, y2: 20,
  x3: 620, y3: 20,
  x4: 220, y4: 220,
  x5: 320, y5: 420,
  x6: 620, y6: 520,
  width: 50,
  height: 60
}
function drawCoin(theCoin){
  let coin = new Image();
  coin.src = "../images/static-coin.png";
  coin.onload = function () {
    ctx.drawImage(coin, theCoin.x1, theCoin.y1, theCoin.width, theCoin.height);
    ctx.drawImage(coin, theCoin.x2, theCoin.y2, theCoin.width, theCoin.height);
    ctx.drawImage(coin, theCoin.x3, theCoin.y3, theCoin.width, theCoin.height);
    ctx.drawImage(coin, theCoin.x4, theCoin.y4, theCoin.width, theCoin.height);
    ctx.drawImage(coin, theCoin.x5, theCoin.y5, theCoin.width, theCoin.height);
    ctx.drawImage(coin, theCoin.x6, theCoin.y6, theCoin.width, theCoin.height);
      // ctx.drawImage(coin, 120, 20, 50, 60);
      // ctx.drawImage(coin, 320, 20, 50, 60);
      // ctx.drawImage(coin, 620, 20, 50, 60);
      // 
      // ctx.drawImage(coin, 220, 220, 50, 60);
      // ctx.drawImage(coin, 320, 420, 50, 60);
      // ctx.drawImage(coin, 620, 520, 50, 60);
  }
}
// the boat
let theBoat = {
  x: 110,
  y: 510,
  width: 80,
  height: 80,
  toLeft:  function() { this.x -= 100 },
  toRight: function() { this.x += 100 },
  toUp: function() { this.y -= 100},
  toDown: function() { this.y += 100},
  initialPos: function() {this.x = 110, this.y = 520}
  }
  class Boat {
    constructor(){
        this.x = 110;
        this.y = 520;
        this.width = 80;
        this.height = 80;
        this.img = "../images/fancy-boat.png";
    }
    drawBoat(){
        let boatImage = new Image();
        boatImage.src = this.img;
        boatImage.onload = () => {
           console.log("----", this);
          ctx.drawImage(boatImage, this.x, this.y, this.width, this.height);
        };
        this.drawBoat();
      }
  };
  document.onkeydown = function(e) {
  switch (e.keyCode) {
   case 37: theBoat.toLeft();  console.log('left',  theBoat); break;
   case 39: theBoat.toRight(); console.log('right', theBoat); break;
   case 38: theBoat.toUp();  console.log('up',  theBoat); break;
   case 40: theBoat.toDown(); console.log('down', theBoat); break;
   case 32: theBoat.initialPos(); console.log('space', theBoat); break;
  }
  updateCanv();
  }
  
  function draw(theBoat){
   let img = new Image();
   img.src = "../images/fancy-boat.png";
   img.onload = function() {
     ctx.drawImage(img, theBoat.x, theBoat.y, theBoat.width, theBoat.height);
   }
  }
  // draw(theBoat);
  // drawCoin(theCoin);
  // drawHuricanes(theHuricane);
  // drawCloud(theCloud);
  // drawGoal(finishGoal);
  // // moveHuricane(theHuricane);
  // drawLines();
  function drawEverything(){
    draw(theBoat);
    drawCoin(theCoin);
    drawHuricanes(theHuricane);
    drawCloud(theCloud);
    drawGoal(finishGoal);
    // drawLines();
    moveRight();
    // moveHuricane(theHuricane);
    // drawScore()
  }

  function updateCanv() {
    ctx.clearRect(0,0,c.width,c.height);
    draw(theBoat);
    drawCoin(theCoin);
    drawCloud(theCloud);
    drawHuricanes(theHuricane);
    drawGoal(finishGoal);
    moveRight();
    checkLimits();
    // moveRight();
    // drawLines();
    // drawScore()
  }

  //   function drawingLoop(){
    //     ctx.clearRect(0, 0, c.width, c.height);
    
    //     theHuricane.x1 -= 5;
    //     if (theHuricane.x1 < c.width || theHuricane.x1 > c.width - theHuricane.width) {theHuricane.dx = -theHuricane.dx; }
    //     if (theHuricane.y1 < c.height || theHuricane.y1 > c.height - theHuricane.height) {theHuricane.dy = -theHuricane.dy; }
    //     theHuricane.x1 += theHuricane.dx;
    //     theHuricane.y1 += theHuricane.dy;
    //     drawEverything();
    //     updateCanv();
    //     // requestAnimationFrame(() => drawingLoop());
    //     if(wonLvl1 === true){
      //         requestAnimationFrame(() => drawingLoop());
      //     }
      // }
      // drawingLoop();


      function drawScore(){
        let cointCount = document.querySelector(".coin-count");
        let coinGrabed = 0;
        let addCoin = coinGrabed + 1;
        cointCount.innerHTML = "Score: " + addCoin;
      }
      function checkLimits(){
   if (theBoat.x <= 2 || theBoat.x >=630 || theBoat.y <= 2 || theBoat.y >= 600){
    theBoat.x = 110;
    theBoat.y = 520;
    //  alert("Please, stay in your lane!");
   };
   if (theBoat.x < theCoin.x1 + theCoin.width && theBoat.x + theBoat.width > theCoin.x1 &&
    theBoat.y < theCoin.y1 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y1){
      // alert("one")
      theCoin.x1 = -100;
      theCoin.y1 = -100;
      drawScore();
      
  } if (theBoat.x < theCoin.x2 + theCoin.width && theBoat.x + theBoat.width > theCoin.x2 &&
    theBoat.y < theCoin.y2 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y2){
      // alert("two")
      theCoin.x2 = -100;
      theCoin.y2 = -100;
      drawScore();
  } if (theBoat.x < theCoin.x3 + theCoin.width && theBoat.x + theBoat.width > theCoin.x3 &&
    theBoat.y < theCoin.y3 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y3){
      // alert("three")
      theCoin.x3 = -100;
      theCoin.y3 = -100;
      drawScore();
  } if (theBoat.x < theCoin.x4 + theCoin.width && theBoat.x + theBoat.width > theCoin.x4 &&
    theBoat.y < theCoin.y4 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y4){
      // alert("four")
      theCoin.x4 = -100;
      theCoin.y4 = -100;
      drawScore();
  } if (theBoat.x < theCoin.x5 + theCoin.width && theBoat.x + theBoat.width > theCoin.x5 &&
    theBoat.y < theCoin.y5 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y5){
      // alert("five")
      theCoin.x5 = -100;
      theCoin.y5 = -100;
      drawScore();
  } if (theBoat.x < theCoin.x6 + theCoin.width && theBoat.x + theBoat.width > theCoin.x6 &&
    theBoat.y < theCoin.y6 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y6){
      // alert("six")
      theCoin.x6 = -100;
      theCoin.y6 = -100;
      drawScore();
  }//end of the coin////////////////////////////////////////////////////////////////////////
  if (theBoat.x < theCloud.x1 + theCloud.width && theBoat.x + theBoat.width > theCloud.x1 &&
    theBoat.y < theCloud.y1 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y1){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x2 + theCloud.width && theBoat.x + theBoat.width > theCloud.x2 &&
    theBoat.y < theCloud.y2 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y2){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x3 + theCloud.width && theBoat.x + theBoat.width > theCloud.x3 &&
    theBoat.y < theCloud.y3 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y3){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x4 + theCloud.width && theBoat.x + theBoat.width > theCloud.x4 &&
    theBoat.y < theCloud.y4 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y4){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x5 + theCloud.width && theBoat.x + theBoat.width > theCloud.x5 &&
    theBoat.y < theCloud.y5 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y5){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x6 + theCloud.width && theBoat.x + theBoat.width > theCloud.x6 &&
    theBoat.y < theCloud.y6 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y6){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x7 + theCloud.width && theBoat.x + theBoat.width > theCloud.x7 &&
    theBoat.y < theCloud.y7 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y7){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x8 + theCloud.width && theBoat.x + theBoat.width > theCloud.x8 &&
    theBoat.y < theCloud.y8 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y8){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x9 + theCloud.width && theBoat.x + theBoat.width > theCloud.x9 &&
    theBoat.y < theCloud.y9 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y9){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }
  if (theBoat.x < theCloud.x10 + theCloud.width && theBoat.x + theBoat.width > theCloud.x10 &&
    theBoat.y < theCloud.y10 + theCloud.height &&
    theBoat.height + theBoat.y > theCloud.y10){
      theBoat.x = 110;
      theBoat.y = 520;
      // alert("one")
  }// end of the cloud////////////////////////////////////////////////////////////////////////////////
  if (theBoat.x < finishGoal.x1 + finishGoal.width && theBoat.x + theBoat.width > finishGoal.x1 &&
    theBoat.y < finishGoal.y1 + finishGoal.height &&
    theBoat.height + theBoat.y > finishGoal.y1){
      alert("You have Won!");
  }// end of the goal////////////////////////////////////////////////////////////////////////////
  if (theBoat.x < theHuricane.x1 + theHuricane.width && theBoat.x + theBoat.width > theHuricane.x1 &&
    theBoat.y < theHuricane.y1 + theHuricane.height &&
    theBoat.height + theBoat.y > theHuricane.y1){
    theBoat.x = 110;
    theBoat.y = 520;
  }
  if (theBoat.x < theHuricane.x2 + theHuricane.width && theBoat.x + theBoat.width > theHuricane.x2 &&
    theBoat.y < theHuricane.y2 + theHuricane.height &&
    theBoat.height + theBoat.y > theHuricane.y2){
    theBoat.x = 110;
    theBoat.y = 520;
  }
  if (theBoat.x < theHuricane.x3 + theHuricane.width && theBoat.x + theBoat.width > theHuricane.x3 &&
    theBoat.y < theHuricane.y3 + theHuricane.height &&
    theBoat.height + theBoat.y > theHuricane.y3){
    theBoat.x = 110;
    theBoat.y = 520;
  }
  if (theBoat.x < theHuricane.x4 + theHuricane.width && theBoat.x + theBoat.width > theHuricane.x4 &&
    theBoat.y < theHuricane.y4 + theHuricane.height &&
    theBoat.height + theBoat.y > theHuricane.y4){
    theBoat.x = 110;
    theBoat.y = 520;
  }
}// end of checkLimits()
drawEverything();   
};
///////////////////////////////////////////////////////
