var tadashi, tadashi_running, tadashi_falling;
var sub_Zero
var the_Guradian, minions;
var bg ;
var gamelevel=0;
var backgroundImg;
var canvas
var portal
var intro

function preload ()
{
  get_bg_Img ();
  intro= loadSound ("Animations/Character Intro.mp3")
  tadashi_running=loadAnimation("Animations/tr1.gif","Animations/tr2.gif")
  
}
function setup ()
{
  canvas= createCanvas (windowWidth, windowHeight);
  //intro.play();
    tadashi= createSprite(50,windowHeight-100,50,50);
    //tadashi.addAnimation("tadashi_running",tadashi_running);
    tadashi.visible=false;
}
function draw ()
{
  if (backgroundImg)
  background (backgroundImg);

  var randx = Math.round(random(1,windowWidth));
  var randy = Math.round(random(1,windowHeight));

  //console.log(rand);

if(mousePressedOver(tadashi)){
  var box=createSprite(randx,randy,20,20);
}



  if (gamelevel===0){
    text("Press Space to Finish Tadashi's Revenge",windowWidth/2- 100,windowHeight/2)
    
    }

    if(keyDown("space")&& gamelevel=== 0){
      gamelevel = 1;
      bg= "Animations/Lv 1.jpg"
      backgroundImg = loadImage(bg);
      tadashi.visible=true;
      
    }
    if(keyDown("1")&& gamelevel=== 1){
      gamelevel = 2;
      bg= "Animations/Level 2.jpg"
      backgroundImg = loadImage(bg);
      

    }
    if(keyDown("2")&& gamelevel=== 2){
      gamelevel = 3;
      bg= "Animations/Level 3.jpg"
      backgroundImg = loadImage(bg);
    }
    if(keyDown("3")&& gamelevel=== 3){
      gamelevel = 4;
      bg= "Animations/level 4.jpg"
      backgroundImg = loadImage(bg);
    }
    if(keyDown("4")&& gamelevel=== 4){
      gamelevel = 5;
      bg= "Animations/Level 5.jpg"
      backgroundImg = loadImage(bg);
      
    }
    if(keyDown("5")&& gamelevel=== 5){
      gamelevel = 6;
      bg= "Animations/level 6.jpg"
      backgroundImg = loadImage(bg);
      
    }
    if(keyDown("6")&& gamelevel=== 6){
      gamelevel = 7;
      bg= "Animations/Level 7.jpg"
      backgroundImg = loadImage(bg);
      
    }
    if(keyDown("7")&& gamelevel=== 7){
      gamelevel = 8;
      bg= "Animations/Level 8.jpg"
      backgroundImg = loadImage(bg);
      
    }
    if(keyDown("8")&& gamelevel=== 8){
      gamelevel = 8;
      bg= "Animations/Level 8.jpg"
      backgroundImg = loadImage(bg);
      
    }
    if(gamelevel===1){
      //intro.stop():
      mobility();
    }

drawSprites ();
}


function get_bg_Img (){

  if(gamelevel===0){
    bg= "Animations/BlackV.jpg"
  }

if (gamelevel===1){
  bg= "Animations/Lv 1.jpg"
  console.log("level 1 image")
}

if (gamelevel===2){
  bg= "Animations/Level 2.jpg"
}

if (gamelevel===3){
  bg= "Animations/Level 3.jpg"
}

if (gamelevel===4){
  bg= "Animations/level 4.jpg"
}

if (gamelevel===5){
  bg= "Animations/level 5.jpg"
}
if (gamelevel===6){
  bg= "Animations/level 6.jpg"
}
if (gamelevel===7){
  bg= "Animations/Level 7.jpg"
}

if (gamelevel===8){
  bg= "Animations/Level 8.jpg"
}

backgroundImg = loadImage(bg);
console.log(backgroundImg);
}
function spawn () {

}
function mobility(){
  if (keyDown ("right_arrow")){
    tadashi.x+=5;
  }
  if (keyDown ("left_arrow")){
    tadashi.x-=5;
  }
  if (keyDown ("down_arrow")){
    tadashi.y+=6;
  }
  if (keyDown ("up_arrow")){
    tadashi.y-=4;
  }

}
