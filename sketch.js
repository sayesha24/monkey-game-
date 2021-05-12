      //to declare the variables 
      var monkey , monkey_running
      var banana ,bananaImage, obstacle, obstacleImage
      var FoodGroup, obstacleGroup;
      var score;
      var ground;
      var score; 
      var jungle, jungle_image; 
      var survivalTime; 

      function preload(){

       //to load the images/ animations  
        monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

        bananaImage = loadImage("banana.png");
        obstacleImage = loadImage("obstacle.png");
        jungle_image= loadImage("jungle.jpg");

      }

      function setup() {

      //to create a canvas  
      createCanvas (600, 400);   

      score= 0; 
      

      //to had characteristics to the monkey 
      monkey= createSprite(80, 315, 20, 20);
      monkey.addAnimation("moving", monkey_running);
      monkey.scale= 0.1; 

      //to had characteristics to the ground 
      ground= createSprite(400, 350, 900, 10);
      ground.visible= true; 
      //to make the ground never ending 
      ground.x= ground.width/2;
     // ground.velocityX= -4;

       jungle = createSprite(0, 0, 300, 200); 
       jungle.addImage(jungle_image);
       //jungle.velocityX= -1;
       jungle.x= jungle.width/2; 
       jungle.scale= 1.5;


      //to display the x position of the ground in the console log   
      console.log(ground.x);

      //to create the food and obstacles group 
      FoodGroup= createGroup();
      obstacleGroup= createGroup();

      }

      function draw() {

      //to make the background white   
      background ("white");

      monkey.debug= true; 

      camera.position.x= camera.position.x - 2;

      if(camera.position.x < 80){

        camera.position.x= 200;
      }

console.log(camera.width);
        
      
    
        if(obstacleGroup.isTouching(monkey)){

          ground.velociyX= 0; 
        monkey.velocityX= 0; 
          monkey.scale= 0.1; 
          obstacleGroup.setVelocityXEach(0); 
          FoodGroup.setVelocityXEach(0);
          survivalTime= 0; 
          score= 0; 
       obstacleGroup.setLifetimeEach(-1);
          FoodGroup.setLifetimeEach(-1);
        }

      // to set a condition of what happens when space is pressed   
      if(keyDown("space")){

       monkey.velocityY= -12;
      }

      //to add gravity to the monkey 
      monkey.velocityY= monkey.velocityY + 0.8;  

      //to set a condition of what happens when the monkey is touching the banana   
      if(monkey.isTouching(FoodGroup)){

      score= score +2; 

      //to destroy the banana   
      FoodGroup.destroyEach();
      }

      //to make the ground infinitive 
      if(ground.x<0) {

      ground.x=ground.width/2;
      }

      //to make the jungle infinitive 
      if(jungle.x<100){

      jungle.x=jungle.width/2;
      }

      //to make monkey collide with the ground 
      monkey.collide(ground);

      spawnB();
      spawnObstacles();

      //to switch the scale of the monkey according to the score
      switch(score){

      case 10: monkey.scale= 0.12; 
      break;
      case 20: monkey.scale= 0.14; 
      break; 
      case 30: monkey.scale= 0.16; 
      break; 
      case 40: monkey.scale= 0.18; 
      break; 
      default: break;     
    }
      drawSprites(); 
      //to display the score 
      textSize(20);
      fill("red");
      text("score : " + score, camera.position.x/width, 50);
        }


      //to add functions to the FoodGroup 
      function spawnB(){

      if(camera.position.x/20 === 10){

      banana= createSprite(600,120,40,10);
      banana.y= Math.round(random(120, 200));
       banana.addImage(bananaImage);
      banana.scale= 0.1; 
      banana.velocityX= -4; 
       banana.lifeTime=300; 
     banana.depth= monkey.depth;
      monkey.depth= monkey.depth + 1; 
      FoodGroup.add(banana);

      }
      //to add functions to the obstacleGroup 

        }
        function spawnObstacles(){

        if(camera.position.x/20 === 10){  
        obstacle= createSprite(600,320);
        obstacle.addImage(obstacleImage);
        obstacleGroup.add(obstacle);
        obstacle.lifeTime=100; 

        obstacle.scale= 0.13;
        obstacle.velocityX= -4; 

      } 



      }





