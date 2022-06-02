noise_scale = 0.02;
function setup() {
  noiseDetail(8, .5);
  createCanvas(400, 400);
  background(100, 132, 158);

  for (x=0; x<=width; x++){
    for (y=0; y<=width; y++){
      n = (noise(x*noise_scale,y*noise_scale))
      if (n > 0.5){
        stroke(204, 192, 155);
      }
      if (n > 0.54){
        stroke(96, 117, 94)
      }
      if (n > 0.7){
        stroke(150, 150, 150)
      }
      if (n > 0.5){
        point(x, y);
      }


    }
  }

}

function draw() {

}
