const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var sling,bob;
var b,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,backgroundImg;
var gamestate="play";
var score=0;


function preload() {
    getbackgroundimg();
}

function setup(){
    var canvas=createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   ground=new Ground(600,350,width,20);
   ground1=new Ground(500,220,300,10);
   ground2=new Ground(1000,300,300,10);
   box1=new Box(460,190,50,50);
   box2=new Box(520,190,50,50);
   box3=new Box(580,190,50,50);
   box4=new Box(400,190,50,50);
   box5=new Box(430,140,50,50);
   box6=new Box(490,140,50,50);
   box7=new Box(550,140,50,50);
   box8=new Box(460,90,50,50);
   box9=new Box(520,90,50,50);
   box10=new Box(490,40,50,50);
   bob=new shot(150,100,40,40);
   sling=new Sling(bob.body,{x:150,y:100})

   b=new Box(1000,290,50,50);
   b2=new Box(940,290,50,50);
   b3=new Box(880,290,50,50);
   b4=new Box(1060,290,50,50);
   b5=new Box(1120,290,50,50);
   b6=new Box(970,220,50,50);
   b7=new Box(910,220,50,50);
   b8=new Box(1030,220,50,50);
   b9=new Box(1090,220,50,50);
   b10=new Box(940,150,50,50);
   b11=new Box(1000,150,50,50);
   b12=new Box(1060,150,50,50);
   b13=new Box(960,110,50,50);
   b14=new Box(1030,110,50,50);
   b15=new Box(990,60,50,50);



}

function draw(){
 
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ground1.display();
    ground2.display();
    box1.display();
    box1.score();

    box2.display();
    box2.score();

    box3.display();
    box3.score();

    box4.display();
    box4.score();

    box5.display();
    box5.score();

    box6.display();
    box6.score();

    box7.display();
    box7.score();

    box8.display();
    box8.score();

    box9.display();
    box9.score();

    box10.display();
    box10.score();

    bob.display();
    b.display();
    b.score();

    b2.display();
    b2.score();

    b3.display();
    b3.score();

    b4.display();
    b4.score();

    b5.display();
    b5.score();

    b6.display();
    b6.score();

    b7.display();
    b7.score();

    b8.display();
    b8.score();

    b9.display();
    b9.score();

    b10.display();
    b10.score();

    b11.display();
    b11.score();

    b12.display();
    b12.score();

    b13.display();
    b13.score();

    b14.display();
    b14.score();

    b15.display();
    b15.score();

    sling.display();
    text ("SCORE:"+score,100,50);





}

function mouseDragged(){
    if(gamestate==="play"){
Matter.Body.setPosition(bob.body,{x: mouseX , y: mouseY})
}
}

function mouseReleased(){
    
sling.fly();
gamestate="launched"
    }

function keyPressed(){
if(keyCode===32){

sling.attach(bob.body);


}
}
async function getbackgroundimg(){
var response= await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
var responseJSON = await response.json();
   var datetime = await responseJSON.datetime;
  
   var hour = datetime.slice(11,13);
   console.log(hour);
   if(hour> 06 && hour <18){
    bg = "bg.png";
    }
    else{   
    bg="bg2.jpg";
}
backgroundImg = loadImage(bg);
}