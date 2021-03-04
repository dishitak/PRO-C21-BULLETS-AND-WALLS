var bullet, speed, weight, damage;
 var wall, thickness; var hascolided;
  var bulletRightEdge;
   function setup()
    { 
      createCanvas(1600, 400);
       bullet = createSprite(50, 200, 50, 50); 
       //Sanchita - thickness calculation instruction should come before you use it so i moved it above wall createsprite command.
        thickness = random(22, 83);
         wall = createSprite(1200, 200, thickness, height / 2); 
         wall.shapeColor = (80, 80, 80); speed = random(223, 321); 
         weight = random(30, 52); } function draw() { bullet.velocityX = speed; 
          background(255, 255, 215); if (hascollided(bullet,wall)) 
          { 
            //Sanchita - here the old instruction was bullet.velocity you missed X at end) 
            bullet.velocityX=0; 
            damage = 0.5 * weight * speed *speed/(thickness * thickness * thickness)
             if (damage>10) 
             {
                wall.shapeColor=color(225,0,0); }
              if (damage<10) 
              {
                 wall.shapeColor=color(0,225,0);
                 }
              } drawSprites(); 
            } function hascollided(bullet,wall) 
            { 
              var bulletRightEdge = bullet.x + bullet.width; wallLeftEdge = wall.x;
               //Sanchita - in below instruction the comparision sign was used wrongly it was => insted of >=
                if (bulletRightEdge >= wallLeftEdge) {
                   return true;
                   } return false ;
             }

