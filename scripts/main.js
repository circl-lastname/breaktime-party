var playerData = {};
var state = "loadingScreen";
var stateData = {};
var localStateData = {};

async function main() {
  let font = new FontFace("Grandstander", "url(assets/fonts/Grandstander.ttf)");
  document.fonts.add(font);
  await font.load();
  
  rendering.init();
}

main();
