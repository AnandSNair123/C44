var rocket_img,rocket_sound;
var space_img,space;
var earth_img,mars_img,jupiter_img,saturn_img,uranus_img,neptune_img;
var meteorite_img;
var meteorite,meteoriteGroup;
var rocket;
var earth,mars,jupiter,saturn,uranus,neptune;


function preload(){
space_img = loadImage("space.jpg");
rocket_img = loadImage("rocket.png");
rocket_sound = loadSound("rocketsound.wav");
earth_img = loadImage("earth.png");
mars_img = loadImage("mars.png");
jupiter_img = loadImage("jupiter.png");
saturn_img = loadImage("saturn.png");
uranus_img = loadImage("uranus.png");
neptune_img = loadImage("neptune.png");
meteorite_img = loadImage("meteorite.png");
}

function setup() {
 var canvas = createCanvas(1200,500);

 space = createSprite(600,250);
 space.addImage("space",space_img);
 space.velocityX = -3;

 rocket = createSprite(100,250,50,50);
 rocket.addImage("rocket",rocket_img);
 rocket.scale = 0.5;
 rocket_sound.play();
}

function draw() {
    background("black");
    if(space.x<500){
        space.x = space.width/2;
    }
 
 drawSprites();
}