states.loadingScreen = {};

states.loadingScreen.layout = function () {
  let metrics = rendering.ctx.measureText("Please wait...");
  localStateData.textX = 1280/2 - metrics.width/2;
  localStateData.textY = 720/2 - metrics.actualBoundingBoxDescent/2;
};

states.loadingScreen.render = function () {
  rendering.ctx.fillStyle = "#000000";
  rendering.fillBackground();
  
  rendering.ctx.fillStyle = "#ffffff";
  rendering.ctx.fillText("Please wait...", localStateData.textX, localStateData.textY);
};
