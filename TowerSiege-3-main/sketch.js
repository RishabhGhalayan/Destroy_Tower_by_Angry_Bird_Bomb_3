const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var back; 

var bg = "bg1.png";
var score = 0;

function preload() {

    getBackgroundImg();
    backgroundImg = loadImage(bg);

}

function setup(){
    var canvas = createCanvas(innerWidth,innerHeight);
    engine = Engine.create();
    world = engine.world;


 
    ground1 = new Ground(1500,700,700,20);
    ground2 = new Ground(2300,500,500,20);


    bird  = new Polygon(500,500,100,100)






    sling = new SlingShot(bird.body,{x:450,y:500 });

    box7 = new Box(1220,660,70,70);
    box8 = new Box(1290,660,70,70);
    box9 = new Box(1360,660,70,70);
    box10 = new Box(1430,660,70,70);
    box11 = new Box(1500,660,70,70);
    box12 = new Box(1570,660,70,70);
    box13 = new Box(1640,660,70,70);
    box14 = new Box(1710,660,70,70);
    box15 = new Box(1780,660,70,70);
    box16 = new Box(1250,590,70,70);
    box17 = new Box(1320,590,70,70);
    box19 = new Box(1390,590,70,70);
    box20 = new Box(1460,590,70,70);
    box21 = new Box(1530,590,70,70);
    box22 = new Box(1600,590,70,70);
    box23 = new Box(1670,590,70,70);
    box5 = new Box(1740,590,70,70);
    box1 = new Box(1480,520,70,70);
    box2 = new Box(1410,520,70,70);
    box3 = new Box(1340,520,70,70);
    box4 = new Box(1270,520,70,70);

    box24 = new Box(1550,520,70,70);
    box25 = new Box(1620,520,70,70);
    box26 = new Box(1690,520,70,70);
    box27 = new Box(1300,450,70,70);
    box28 = new Box(1370,450,70,70);
    box29 = new Box(1440,450,70,70);
    box30 = new Box(1510,450,70,70);
    box31 = new Box(1580,450,70,70);
    box32 = new Box(1650,450,70,70);
    box33 = new Box(1330,380,70,70);
    box34 = new Box(1400,380,70,70);
    box35 = new Box(1470,380,70,70);
    box36 = new Box(1540,380,70,70);
    box37 = new Box(1610,380,70,70);
    box38 = new Box(1350,310,70,70);
    box39 = new Box(1420,310,70,70);

    box40 = new Box(1490,310,70,70);
    box41 = new Box(1560,310,70,70);
    box42 = new Box(1380,240,70,70);
    box43 = new Box(1450,240,70,70);
    box44 = new Box(1520,240,70,70);
    box45 = new Box(1410,170,70,70);
    box46 = new Box(1480,170,70,70);
    box47 = new Box(1440,100,70,70);
    box48 = new Box(2120,455,70,70);
    box49 = new Box(2190,455,70,70);
    box50 = new Box(2260,455,70,70);
    box51 = new Box(2330,455,70,70);
    box52 = new Box(2400,455,70,70);
    box53 = new Box(2470,455,70,70);
    box54 = new Box(2150,385,70,70);
    box55 = new Box(2220,385,70,70);
    box56 = new Box(2290,385,70,70);
    box57 = new Box(2360,385,70,70);
    box58 = new Box(2430,385,70,70);
    box59 = new Box(2180,315,70,70);
    box60 = new Box(2250,315,70,70);
    box61 = new Box(2320,315,70,70);
    box62 = new Box(2390,315,70,70);
    box63 = new Box(2200,245,70,70);
    box64 = new Box(2270,245,70,70);
    box65 = new Box(2340,245,70,70);
    box66 = new Box(2230,175,70,70);
    box67 = new Box(2300,175,70,70);
    box68 = new Box(2265,105,70,70);


    



}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    fill("RED")
    textSize(70)
    text("$$ Press SPACE to Play again $$",100,150)
    fill("green")
    textSize(50)
    text("$$ Press F5 to Reset Game ",500,70)

    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    ground2.display();

    box3.display();
    box4.display();


    box5.display();
    bird.display();
    sling.display()


    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();

    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();
    box50.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    box51.display();
    box56.display();
    box57.display();
    box58.display();
    box59.display();
    box60.display();
    box61.display();
    box62.display();
    box63.display();
    box64.display();
    box65.display();
    box66.display();
    box67.display();
    box68.display();





}



function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x:mouseX  , y:mouseY})
}

function mouseReleased(){
 
  sling.fly();

}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(bird.body, {x:500, y:500}) 
   sling.attach(bird.body)


	}
  } 

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
     backgroundImg = loadImage(bg);
}