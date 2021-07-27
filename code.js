var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(10,38,18,18);
var trofeu = createSprite(392,355,20,80);
var papelao2 = createSprite(116,4,20,250);
var papelao3 = createSprite(175,30,100,20);
var papelao4 = createSprite(80,170,125,20);
var papelao5 = createSprite(177,145,20,100);
var papelao6 = createSprite(260,90,20,100);
var papelao7 = createSprite(340,90,100,20);
var papelao8 = createSprite(290,204,100,20);
var papelao9 = createSprite(360,173,20,100);
var papelao10 = createSprite(10,274,100,20);
var papelao11 = createSprite(58,270,20,100);
var papelao12 = createSprite(140,236,100,20);
var papelao13 = createSprite(37,368,20,100);
var papelao14 = createSprite(99,330,20,100);
var papelao15 = createSprite(209,365,20,100);
var papelao16 = createSprite(210,310,100,20);
var papelao17 = createSprite(251,310,20,100);
var papelao18 = createSprite(347,245,120,20);
var papelao19 = createSprite(342,296,120,20);
var papelao20 = createSprite(315,388,100,20);
var papelao21 = createSprite(337,315,20,50);
var papelao1 = createSprite(10,91,100,20);

sofia.shapeColor = "orange";
papelao1.shapeColor = "red";
papelao2.shapeColor = "red";
papelao3.shapeColor = "red";
papelao4.shapeColor = "red";
papelao5.shapeColor = "red";
papelao6.shapeColor = "red";
papelao7.shapeColor = "red";
papelao8.shapeColor = "red";
papelao9.shapeColor = "red";
papelao10.shapeColor = "red";
papelao11.shapeColor = "red";
papelao12.shapeColor = "red";
papelao13.shapeColor = "red";
papelao14.shapeColor = "red";
papelao15.shapeColor = "red";
papelao16.shapeColor = "red";
papelao17.shapeColor = "red";
papelao18.shapeColor = "red";
papelao19.shapeColor = "red";
papelao20.shapeColor = "red";
papelao21.shapeColor = "red";  
trofeu.shapeColor = "yellow";

function draw() {
background("pink") ; 

if (keyDown("up")) {
  
sofia.velocityX-0;
sofia.velocityY=-4;  
  
}

if (keyDown("down")) {
  
sofia.velocityX-0;
sofia.velocityY=4;  
  
}

if (keyDown("left")) {
  
sofia.velocityX=-4;
sofia.velocityY-0; 
  
}

if (keyDown("right")) {
  
sofia.velocityX=4;
sofia.velocityY=0;  
  
}

if (keyWentUp("up")) {
  
sofia.velocityX=0;
sofia.velocityY=0;  
  
}

if (keyWentUp("down")) {
  
sofia.velocityX=0;
sofia.velocityY=0;  
  
}

if (keyWentUp("right")) {
  
sofia.velocityX=0;
sofia.velocityY=0;  
  
}

if (keyWentUp("left")) {
  
sofia.velocityX=0;
sofia.velocityY=0;  
  
}


createEdgeSprites();

sofia.collide(edges);

if (sofia.isTouching(papelao1)) {
  
sofia.x=18;
sofia.y=18;  
  
}



if (sofia.isTouching(papelao2)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao3)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao4)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao5)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao6)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao7)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao8)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao9)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao10)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao11)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao12)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao13)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao14)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao15)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao16)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao17)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao18)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao19)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao20)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(papelao21)) {
  
sofia.x=18;
sofia.y=18;  
  
}

if (sofia.isTouching(trofeu)) {
  
text("você venceu!,aperte R para recomeçar",200,200);
  
  
}

if (keyDown("R")) {
  
sofia.x=18;
sofia.y=18;  
  
}









drawSprites();  
  
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
