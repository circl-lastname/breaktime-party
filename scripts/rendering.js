const rendering = {};

rendering.canvas = document.getElementById("canvas");
rendering.ctx = canvas.getContext("2d");
rendering.scale = undefined;
rendering.originX = undefined;
rendering.originY = undefined;
rendering.canvasWidth = undefined;
rendering.canvasHeight = undefined;

rendering.initializeCanvas = function () {
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  
  let horizontalScale = this.canvas.width/32;
  let optimalHeight = horizontalScale*18;
  
  if (this.canvas.height >= optimalHeight) {
    this.scale = horizontalScale;
    this.originX = 0;
    this.originY = (this.canvas.height/2 - optimalHeight/2) / this.scale;
  } else {
    this.scale = this.canvas.height/18;
    let optimalWidth = this.scale*32;
    this.originX = (this.canvas.width/2 - optimalWidth/2) / this.scale;
    this.originY = 0;
  }
  
  this.canvasWidth = this.canvas.width / this.scale;
  this.canvasHeight = this.canvas.height / this.scale;
  
  this.ctx.scale(this.scale, this.scale);
  
  this.ctx.fillStyle = "#202020";
  this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  
  this.ctx.fillStyle = "#ffffff";
  this.ctx.fillRect(this.originX, this.originY, 32, 18);
  
  this.ctx.fillStyle = "#ff0000";
  this.ctx.fillRect(this.originX+1, this.originY+1, 1, 1);
  
  this.ctx.fillStyle = "#000000";
  this.ctx.font = "1px Grandstander, sans-serif";
  this.ctx.fillText("Hello, World!", this.originX+3, this.originY+3);
};

window.addEventListener("resize", () => {
  rendering.initializeCanvas();
});

rendering.initializeCanvas();
