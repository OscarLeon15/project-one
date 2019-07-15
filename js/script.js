
window.onload = function(){
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    
    ctx.clearRect(0, 0, c.width, c.height);

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

// let allImages = [
//     {name: "fancyBoat", url: 'images/fancy-boat.png', x:20, y:520, width: 50, height: 80},
//     {name: "cloud", url: 'images/cloud.jpg', x:200, y:520, width: 50, height: 80}
// ]


let goal = new Image();
goal.src = "images/troll-smile.png";
goal.onload = function () {
    ctx.drawImage(goal, 420, 220, 50, 80);
}

let cloud = new Image();
cloud.src = "images/cloud1.png";
cloud.onload = function () {
    ctx.drawImage(cloud, 110, 510, 90, 90);
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
let cloud1 = new Image();
cloud1.src = "images/huricane.png";
cloud1.onload = function () {
    ctx.drawImage(cloud1, 220, 420, 50, 80);
    ctx.drawImage(cloud1, 20, 20, 50, 80);
    ctx.drawImage(cloud1, 620, 120, 50, 80);
    ctx.drawImage(cloud1, 320, 220, 50, 80);
}
let coin = new Image();
coin.src = "images/static-coin.png";
coin.onload = function () {
    ctx.drawImage(coin, 120, 20, 50, 60);
    ctx.drawImage(coin, 320, 20, 50, 60);
    ctx.drawImage(coin, 620, 20, 50, 60);
    //
    ctx.drawImage(coin, 220, 220, 50, 60);
    ctx.drawImage(coin, 320, 420, 50, 60);
    ctx.drawImage(coin, 620, 520, 50, 60);
}
// let coinImage = new Image();
// coinImage.src = "images/coin.png";
// coinImage.onload = function(){
//     ctx.drawImage(coinImage, 90,130,50,60,10,10,50,60)
// }
let boat = new Image();
boat.src = "images/fancy-boat.png";
boat.onload = function () {
    
    ctx.drawImage(boat, 20, 520, 50, 80);
}
function boatMove(e){
    switch(e.keyCode){
        case 38:
            boat.y -= 50;
            console.log("you moved a bit");
        break;
        case 40:
            boat.y += 50;
            console.log("you moved a bit");
        break;
        case 37:
            boat.x -= 50;
            console.log("you moved a bit");
        break;
        case 39:
            boat.x += 50;
            console.log("you moved a bit");
        break;
    }
}
};
///////////////////////////////////////////////////////////////////////////////////