let map;

let kx = 0;
let ky = 20;

function preload() {
  map = loadImage('images/Mirroring_map_full.png');
}

let ex;
let hourGlass;
let circle;
let c;
let h;
let t;

function setup() {
  createCanvas(1080, 1920);
  
  image(map, 0, 0, 1080, 1920);
  
  ex = String.fromCharCode(9661);
  hourGlass = String.fromCharCode(9747);
  circle = String.fromCharCode(9737);
  
  c = 0;
  h = 0;
  t = 0;
  
}

function draw() {
  textStyle(BOLD);
  textSize(60);
  fill(h,0,255);
  text(hourGlass, 560, 970);
  fill(c,0,255);
  text(circle, 450, 450);
  fill(t,0,255);
  textSize(45);
  text(ex, 600, 750);
  
}


  //MOUSE PRESSED
 
  function mousePressed() {
    
    // The circle
    if (mouseX > 450 && mouseX < 500) {
      if (mouseY > 415 && mouseY < 465) {
        print("Circle");
        c = 255;
      }    
    }
    
    // Triangle
    if (mouseX > 600 && mouseX < 650) {
      if (mouseY > 710 && mouseY < 760) {
        print("Triangle");
        t = 255;
      }    
    }
    
    // Hour glass
    if (mouseX > 570 && mouseX < 600) {
      if (mouseY > 930 && mouseY < 970) {
        print("Hour glass");
        h = 255;
      }
    }
  }