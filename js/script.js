
window.onload = function(){
    let c = document.getElementById("myCanvas");
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

//the goal
function drawGoal(){
  let goal = new Image();
  goal.src = "../images/troll-smile.png";
  goal.onload = function () {
      ctx.drawImage(goal, 420, 220, 50, 80);
  } 
}
// the cloud
function drawCloud(){
  let cloud = new Image();
  cloud.src = "../images/cloud1.png";
  cloud.onload = function () {
      ctx.drawImage(cloud, 10, 510, 90, 90);
      ctx.drawImage(cloud, 210, 510, 90, 90);
      ctx.drawImage(cloud, 310, 510, 90, 90);
      // 
      ctx.drawImage(cloud, 110, 310, 90, 90);
      ctx.drawImage(cloud, 210, 310, 90, 90);
      ctx.drawImage(cloud, 410, 310, 90, 90);
      ctx.drawImage(cloud, 510, 310, 90, 90);
      //
      ctx.drawImage(cloud, 110, 110, 90, 90);
      ctx.drawImage(cloud, 310, 110, 90, 90);
      ctx.drawImage(cloud, 510, 110, 90, 90);
  }
}
// the huricanes
function drawHuricanes(){
  let huricane = new Image();
  huricane.src = "../images/huricane.png";
  huricane.onload = function () {
      ctx.drawImage(huricane, 220, 420, 50, 80);
      ctx.drawImage(huricane, 20, 20, 50, 80);
      ctx.drawImage(huricane, 620, 120, 50, 80);
      ctx.drawImage(huricane, 320, 220, 50, 80);
  }
}
//  the coin
// let goldCoin = {
//   x: 0,
//   y: 0,
//   width: 50,
//   height: 60
// }
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

  draw(theBoat);
  drawCoin(theCoin);
  drawHuricanes();
  drawCloud();
  drawGoal();
  drawLines();
  function updateCanv() {
    ctx.clearRect(0,0,c.width,c.height);
    // ctx.clearRect(theBoat.x,90,theBoat.width,theBoat.height);
    // ctx.clearRect(theBoat.x,theBoat.y,90,80);
    draw(theBoat);
    drawCoin(theCoin);
    drawHuricanes();
    drawCloud();
    drawGoal();
    drawLines();
    checkLimits();
    
  }
  function checkLimits(){
   if (theBoat.x <= 2 || theBoat.x >=930 || theBoat.y <= 2 || theBoat.y >= 600){
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
  } if (theBoat.x < theCoin.x2 + theCoin.width && theBoat.x + theBoat.width > theCoin.x2 &&
    theBoat.y < theCoin.y2 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y2){
      // alert("two")
      theCoin.x2 = -100;
      theCoin.y2 = -100;
  } if (theBoat.x < theCoin.x3 + theCoin.width && theBoat.x + theBoat.width > theCoin.x3 &&
    theBoat.y < theCoin.y3 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y3){
      // alert("three")
      theCoin.x3 = -100;
      theCoin.y3 = -100;
  } if (theBoat.x < theCoin.x4 + theCoin.width && theBoat.x + theBoat.width > theCoin.x4 &&
    theBoat.y < theCoin.y4 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y4){
      // alert("four")
      theCoin.x4 = -100;
      theCoin.y4 = -100;
  } if (theBoat.x < theCoin.x5 + theCoin.width && theBoat.x + theBoat.width > theCoin.x5 &&
    theBoat.y < theCoin.y5 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y5){
      // alert("five")
      theCoin.x5 = -100;
      theCoin.y5 = -100;
  } if (theBoat.x < theCoin.x6 + theCoin.width && theBoat.x + theBoat.width > theCoin.x6 &&
    theBoat.y < theCoin.y6 + theCoin.height &&
    theBoat.height + theBoat.y > theCoin.y6){
      // alert("six")
      theCoin.x6 = -100;
      theCoin.y6 = -100;
  }
}
};
///////////////////////////////////////////////////////
