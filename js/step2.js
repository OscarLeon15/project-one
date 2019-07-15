

// window.onload = function(){
//     let c = document.getElementById("myCanvas");
//     let ctx = c.getContext("2d");
    
//     ctx.clearRect(0, 0, c.width, c.height);

//     // ctx.fillStyle = "red";
//     // ctx.fillRect(50,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(100,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(150,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(200,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(250,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(300,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(350,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(400,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(450,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(500,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(550,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(600,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(650,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(700,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(750,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(800,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(850,0,10,c.height);
// // 
//     ctx.fillStyle = "red";
//     ctx.fillRect(900,0,10,c.height);
// // 
//     // ctx.fillStyle = "red";
//     // ctx.fillRect(950,0,10,c.height);
// // 
// //
// // ctx.fillStyle = "yellow";
// // ctx.fillRect(0,50, c.width, 10);
// // 
// ctx.fillStyle = "yellow";
// ctx.fillRect(0,100, c.width, 10);
// // 
// // ctx.fillStyle = "yellow";
// // ctx.fillRect(0,150, c.width, 10);
// // 
// ctx.fillStyle = "yellow";
// ctx.fillRect(0,200, c.width, 10);
// // 
// // ctx.fillStyle = "yellow";
// // ctx.fillRect(0,250, c.width, 10);
// // 
// ctx.fillStyle = "yellow";
// ctx.fillRect(0,300, c.width, 10);
// // 
// // ctx.fillStyle = "yellow";
// // ctx.fillRect(0,350, c.width, 10);
// // 
// ctx.fillStyle = "yellow";
// ctx.fillRect(0,400, c.width, 10);
// // 
// // ctx.fillStyle = "yellow";
// // ctx.fillRect(0,450, c.width, 10);
// // 
// ctx.fillStyle = "yellow";
// ctx.fillRect(0,500, c.width, 10);
// // 
// // ctx.fillStyle = "yellow";
// // ctx.fillRect(0,550, c.width, 10);
// // 

// const image = new Image(40, 50);
// image.onload = drawImageActualSize;

// image.src = './images/raft.jpg';





// }
///////////////////////////////////////////////////////////////////////////////////////////////////
// let coin = sprite({
//     // ctx: c.getContext("2d"),
//     width: 100,
//     height: 100,
//     image: coinImage
// });
// function coinSprite(options) {
//     let that = {},
//     frameIndex = 0,
//     tickCount = 0,
//     ticksPerFrame = options.ticksPerFrame || 0,
//     numberOfFrames = options.numberOfFrames || 1;
					
//     that.ctx = options.ctx;
//     that.width = options.width;
//     that.height = options.height;
//     that.image = options.image;
//     //
//     that.loop = options.loop;
//     that.update = function () {
//         tickCount += 1;
			
//         if (tickCount > ticksPerFrame) {
//             tickCount = 0;
//               // If the current frame index is in range
//               if (frameIndex < numberOfFrames - 1) {	
//                 // Go to the next frame
//                 frameIndex += 1;
//             } else if (that.loop) {
//                 frameIndex = 0;
//             }
//             // Go to the next frame
//             frameIndex += 1; 
//         }
//     }; 
//     function gameLoop () {
//         window.requestAnimationFrame(gameLoop);
//         coin.update();
//         coin.render();
//       }
//       // Start the game loop as soon as the sprite sheet is loaded
//       coin.addEventListener("load", gameLoop);
//     that.render = function () {
//         // Clear the canvas
//     context.clearRect(0, 0, that.width, that.height);
//         // Draw the animation
//         that.context.drawImage(
//            that.image, frameIndex * that.width / numberOfFrames, 0, that.width / numberOfFrames,
//             that.height, 0, 0, that.width / numberOfFrames, that.height);
//     };
//     return that;
// }
// coin.render();