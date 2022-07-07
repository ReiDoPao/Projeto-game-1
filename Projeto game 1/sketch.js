var boneco,bonecoImg;
var chao,chaoImg;
var chao2;
//var pDeSalto = 2;

function preload (){
  bonecoImg = loadImage("MiniPão.png");
  chaoImg = loadImage("TexturaChão.png");
}


function setup() {
  createCanvas(800,400);
  chaoGrupo = new Group();
  boneco = createSprite(100,100,10,10);
  boneco.addImage(bonecoImg);
 
  
for (c=0; c<=12; c++){
  
    chao = createSprite(28+64*c,390,64,64);
    chao.addImage(chaoImg);
    chaoGrupo.add(chao);
  }
  
  //chao.debug = true;
  chaoGrupo.debug = true;
  console.log (chao);
  

  chao2 = createSprite(400,368,800,19);
  chao2.visible = false;

  //boneco.setCollider("rectangle",0,0,10);
  boneco.debug = true; 
}

function draw() 
{
  background(51);
  boneco.collide(chao2);

  //movimentos

  if (keyIsDown(RIGHT_ARROW)){
   boneco.x = boneco.x + 8;
  }
  if (keyIsDown(LEFT_ARROW)){
    boneco.x = boneco.x - 8;
   }
  if (keyDown("space") && boneco.isTouching(chaoGrupo)){
  boneco.velocityY = boneco.velocityY - 12;
  //pDeSalto = pDeSalto -1;

  if (boneco.velocityY > 5){
    boneco.velocityY = 4;
  }
}
//console.log(pDeSalto);

  

  //if (boneco.isTouching(chaoGrupo)){
  //pDeSalto = 2;
  //}

  //reset do boneco

  if (keyDown("k")){
  boneco.x = 400;
  boneco.y = 200; 
  }

  //gravidade
  boneco.velocityY = boneco.velocityY + 0.8;

  //mouse pega o boneco
  if (mouseIsPressed){
  boneco.y = mouseY;
  boneco.x = mouseX;
  console.log("poin");
}

 
  drawSprites();


}

