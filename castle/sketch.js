const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var  box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    
    box1 = new Box(100,300,150,225);
    
   
    box2 = new Box(400,300,450,100);
    
    box4 = new Box(400,250,250,50);
    
    box3 = new Box(700,300,149,225);

    box5 = new Box(35,107,30,40);

    box6 = new Box(100,107,30,40);

    box7 = new Box(165,107,30,40);

    box8 = new Box(700,107,30,40);

    box9 = new Box(635,107,30,40);

    box10 = new Box(765,107,30,40);

    box11 = new Box(400,200,30,40);

    box12 = new Box(460,200,30,40);

    box13 = new Box(520,200,30,40);

    box14 = new Box(340,200,30,40);

    box15 = new Box(280,200,30,40);

    
    
    ground = new Ground(200,380,1600,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();  
    
    ground.display();
}