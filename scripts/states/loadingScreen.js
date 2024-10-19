states.loadingScreen = {};

states.loadingScreen.layout = function () {
  
};

states.loadingScreen.render = function () {
  rendering.ctx.fillStyle = "#800000";
  rendering.fillBackground();
  
  rendering.ctx.fillStyle = "#008000";
  rendering.ctx.fillRect(0, 0, 1280, 720);
};
