num = 20
faceW=250;
faceH=200;
outeyeL=75;
outeyeR=75;
ineyeL=75;
ineyeR=75;
mouthSize=100;
mouthEn =0;
mouthSt=0;
noseW=40;
noseH=30;

mouthW = 50
mouthH=30

colors = ["#558c8c", "#305f45", "#d282a6", "#ffc759", "#772E25"]
faceC = colors[0];

colorsB = ["#104747", "#84C7A2", "#751742", "#855800", "#C78F88"]
faceB = colorsB[0];
// eyeA= colorsB[0];

go=false;


function setup() {
  createCanvas(500,500);
  angleMode (DEGREES);
  rectMode(CENTER)
  
}


function keyPressed(){
  if(key==='c'){
    go=true;
  }
}

function keyReleased(){
  if(key==='c'){
    go=false;
  }
}

function draw() {
  background(220);
  face(250,250);  

  //text
    textSize(20);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('press "c" to randomize the face', 45, 50);
  text('drag mouse from left to right to make it happier', 45, 80);

  
  if(go){
    randFace();

  }
  
}

function randFace(){
  faceW= int(random(250,450));
  faceH= int(random(250,450));
  outeyeL= int(random(75,100));
  outeyeR= int(random(75,100));
  ineyeL= int(random(100-210));
  ineyeR= int(random(100-210));
  mouthSize= int(random(50,150));
  mouthSt= int(random(1,45))
    if (mouthSt < 180){
    mouthEn = 180 - mouthSt;
    }

  noseW= int(random(10,70)); 
  noseH= int(random(10,70));
  let pos = int(random(0,5));
  faceC= colors[pos];
  
  let posB = int(random(0,5));
  faceB= colorsB[pos];

}
function face(x,y){
  
  noStroke()  
  let c = color(random(255), random(255), random(255));
  
  //background
      // not sure why but this couldn't go in the draw function and still stay visible so i put it here instead
  push();
  rectMode(CORNER);
  noStroke();
for (let i = 0; i < num; i++) {
  if (i != 0) {
  }
  // let c = color(random(255), random(255), random(255));
  // fill(c);
  //   rect(0, height/num * i, 1000, 200);
  // }
   let c = color(random(135), random(130), random(130));
//  let c = color(
//   random(180, 150),
//   random(180, 150),
//   random(180, 150),
  
// );

  fill(c);
    rect(0, (height*2)/num * i, 1000, 100);
  }
  pop();
  pop();
    
  //face (inner and outer)
   push()
  strokeWeight(3)  
  stroke(0,0,255)
  fill(faceB)
  ellipse(x, y, faceW + 70, faceH+ 70)
  pop()

   push();
  fill (faceC)
  ellipse (x,y,faceW,faceH);
  pop();
  
  //eyes
  
   //outer eyes
  push();
    fill(c);
   rect (x-55,y-55, 80,70);
  rect (x+55,y -55, 80,70);
  pop();

  push();
  fill ("white");
  
    // diamond inner eyes
       // width
let wL = ineyeL;       
       // height
let hL = ineyeL / 3;   
  
  quad(
        //top
  x - 50, y - 50 - hL, 
        //right
  x - 50 + wL, y - 50,   
       //bottom
  x - 50, y - 50 + hL,
       //left
  x - 50 - wL, y - 50    
  );

let wR = ineyeR;
let hR = ineyeR / 3;
  quad(
       // top, right, bottom, left
  x + 50, y - 50 - hR,   
  x + 50 + wR, y - 50,   
  x + 50, y - 50 + hR,   
  x + 50 - wR, y - 50    
  );
 pop()
  
  
   //center eye dot that doesn't move
  
  push()
  fill(0,0,255)
  ellipse(x-50, y-50, 10, 10)
    ellipse(x+50, y-50, 10, 10)
  pop()
  
  
  // nose
  push();
 fill(faceB);
  ellipse (x,y+30,noseW,noseH);
  pop();

  //mouth
    
  let smile = map(mouseX, 0, width, 10, 180); 
  push();
  stroke("white");
  noFill();
  strokeWeight(25);
  arc(x, y+65, mouthSize, mouthSize, 0, smile);
  pop();
  


}

