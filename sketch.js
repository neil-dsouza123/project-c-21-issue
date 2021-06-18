var canvas;
var surface1
var surface2
var surface3 
var surface4
var block
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces  
    surface1=createSprite(100,590,195,50)
    surface1.shapeColour=rgb(0,5,253)

    surface2=createSprite(300,590,195,50)
    surface2.shapeColour=rgb(173,0,69)

    surface3=createSprite(500,590,195,50)
    surface3.shapeColour=rgb(0,5,253)

    surface4=createSprite(700,590,195,50)
    surface4.shapeColour=rgb(173,0,69)




    //create box sprite and give velocity
    block=createSprite(random(50,750))
    block.shapeColour=rgb(255,255,255)

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box

    drawSprites()
}
