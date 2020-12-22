const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World  = Matter.World;

var engine,world;
var GameState = 0;
var end,trophyIMG;
var count;

function preload(){

trophyIMG = loadImage("images/trophy.png");

}

        function setup() {
        createCanvas(2020,1000);

        engine = Engine.create();
        world = engine.world;
        count = 1;
        plzwork = 1;
        //Main Character 
        MainBall = new Ball(200,920,20);
        MainBall2 = new Ball(20,50,20);
        //level 1
        // created ground
        ground = new Ground(5000,970,10000,70);
        ground1 = new Ground(5000,10,10000,70)
        ground2 = new Ground(20,500,70,1000)
        //created obstacles level 1 
        obstacle1 = new Obstacle(700,210,70,500);
        obstacle2 = new Obstacle(700,760,70,400);
        obstacle3 = new Obstacle(925,585,400,70);
        obstacle4 = new Obstacle(925,435,400,70);
        obstacle5 = new Obstacle(1255,480,70,800);
        obstacle6 = new Obstacle(1478,500,400,70);
        obstacle7 = new Obstacle(1655,785,70,350);
        obstacle8 = new Obstacle(1655,140,70,500);
        obstacle9 = new Obstacle(2010,500,70,1000)

        //sprites 
        end = createSprite(1900,885,20,20);
        end.addImage(trophyIMG);
        end.scale = 0.1;
        }

function draw() {
 background("white");
 Engine.update(engine);

 if(GameState == 0){
     
       
            //controls 
            fill("black");
            textSize(24);
            text("A,D,space to move left,right and jump",100,600);
            
            //displaying main character 
            MainBall.display();


            //displaying ground
            ground.display();
            ground1.display();
            ground2.display();

            //displaying obstacle
            obstacle1.display();
            obstacle2.display();
            obstacle3.display();
            obstacle4.display();
            obstacle5.display();
            obstacle6.display();
            obstacle7.display();
            obstacle8.display(); 
            obstacle9.display();
           
            end.setCollider("rectangle",0,0,1120,1120)
            drawSprites();
            
            if(MainBall.body.position.x > 1900 && MainBall.body.position.y > 885){

            GameState = 1; 
            console.log(1)
                }
           
            }

else if(GameState == 1){
    obstacle1.delete()
    obstacle2.delete()
    obstacle3.delete()
    obstacle4.delete()
    obstacle5.delete()
    obstacle6.delete()
    obstacle7.delete()
    obstacle8.delete()
    obstacle9.delete()
      
        if(count == 1){
            ObjectCreationlev2();
        }
        background("yellow")
        end.destroy();
        // Main ball display 
        MainBall.display();
        //obstacle display level2 

        obstacle10.display();

        obstacle11.display();

        obstacle12.display();

        obstacle13.display();

        obstacle14.display();

        if(MainBall.body.position.y > 900){
            Matter.Body.setPosition(MainBall.body,{x:50,y:500});
        }
   count = 0;
   
}
}
function keyPressed(){

 if(keyCode === 65){
    
    Matter.Body.applyForce(MainBall.body,MainBall.
                            body.position,{x:-35,y:0}); 
 }
if(keyCode === 68){
    
    Matter.Body.applyForce(MainBall.body,MainBall.
        body.position,{x:35,y:0}); 
  

}
if(keyCode === 32){

    Matter.Body.applyForce(MainBall.body,MainBall.
        body.position,{x:0,y:-25}); 

}
}
function ObjectCreationlev2(){


    obstacle10 = new Obstacle(50,1000,700,500);
    obstacle11 = new Obstacle(500,300,50,50);
    obstacle12 = new Obstacle(1000,300,50,50);
    obstacle13 = new Obstacle(1500,300,50,50);
    obstacle14 = new Obstacle(1220,1000,1650,100);

}
