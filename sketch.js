var Sweeper, sweeperImg;
var coins, coinsGroup, coinsImg;
var track1, track2, bg;
var obstacle, coronaImg1, coronaImg2, truckImg, drumImg, busImg, barigaterImg, dustbinImg, carImg, sweeperGif;

function preload(){
    sweeperImg= loadImage("sprites/sweeper.png");
    //coinsImg= loadImage("sprites/.png");
    track1= loadImage("sprites/track1.jpg");
    track2= loadImage("sprites/track2.jpg");
    coronaImg1= loadImage("sprites/big corona.png")
    drumImg= loadImage("sprites/drum.png");
    truckImg= loadImage("sprites/truck.jpg");
    busImg= loadImage("sprites/bus.png");
    barigaterImg= loadImage("sprites/barigater.png");
    dustbinImg= loadImage("sprites/dustbin.png");
    carImg= loadImage("sprites/car.png");




}  

function setup(){
    createCanvas(1800,1200);

    Sweeper = createSprite(800,400,20,20);
    Sweeper.addImage("sweeperImg");

    bg=createSprite(1500,1200);
    bg.addImage("track1");
}

function draw(){
    background(255);

    drawSprites();
}