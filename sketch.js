let scaleFactor;
let audioPlayer;
let fft;

function preload(){
  soundFormats('mp3', 'ogg');
// Add AudioPlayer (From p5.js example:https://p5js.org/examples/imported-media-create-audio/)
  audioPlayer = createAudio('/assets/Faith in Strangers.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(247, 241, 225);
  
  audioPlayer.showControls();
  audioPlayer.position(20,20)

  audioPlayer.attribute(
    'audio-description', 'The playback speed of this audio player is controlled by the position of the mouse. The further to the right the mouse is, the faster the audio will play.'
  );

  // connect FFT to audio Player
  fft = new p5.FFT(0.8, 128);
  audioPlayer.connect(fft);

  //  Based on width scaling
  scaleFactor = min(width / 800, height / 600);  // original scale
}

function draw() {
  background(247, 241, 225); 

  audioPlayer.speed(1 + mouseX / windowWidth);

  let spectrum = fft.analyze();
  let bass = fft.getEnergy("bass");
  let mid = fft.getEnergy("mid");
  let treble = fft.getEnergy("treble");

  let spacing = map(treble, 0, 255, 2, 5);
  let weight = map(bass, 0, 255, 0.5, 2,5);
  let alpha = map(mid, 0, 255, 60, 255);

  let trap1Spacing = map(treble, 0, 255, 2, 5);
  let trap1Alpha = map(mid, 0, 255, 80, 255); 
  let distortion = map(bass, 0, 255, -20, 20);
  let trap2Spacing = 3.5;
  let trap2Alpha = 255;
  let trap3Height = int(map(mid, 0, 255, 8, 24));
  let trap3Spacing = 3.2;
  let trap3Alpha = 255;

  push();
  // Move the centre
  translate(width / 2, height / 2);
  scale(scaleFactor); 
  rotate(radians(-30));
  translate(-430, -470);      

  // Thick 5
  push();
  translate(189, 343);       
  drawLineGroup(0, 0, 495, 2, spacing, weight, alpha);  
  pop();

  push();
  translate(198, 360);
  drawLineGroup(0, 0, 320, 2, spacing, weight, alpha);  
  pop();

 // Thick 6
  push();
  translate(445, 430);     
  drawLineGroup(0, 0, 60, 4, spacing, weight, alpha); 
  pop();

  push();
  translate(440, 436);     
  drawLineGroup(0, 0, 70, 4, spacing, weight, alpha); 
  pop();

 // Thick 7
  push();
  translate(130, 550);     
  drawLineGroup(0, 0, 595, 2, spacing, weight, alpha); 
  pop();

 // Thick 8
  push();
  translate(432, 450);     
  drawLineGroup(0, 0, 85, 8, spacing, weight, alpha); 
  pop();

  push();
  translate(135, 489);     
  drawLineGroup(0, 0, 100, 3,spacing, weight, alpha); 
  pop();

// Thick 1
  push();     
  translate(110, 383); 
  drawLineGroup(0, 0, 80, 4, spacing, weight, alpha);  
  pop();

  push();
  translate(115, 392); 
  drawLineGroup(0, 0, 80, 3, spacing, weight, alpha);
  pop();

// Thick 2
  push();
  translate(515, 315); 
  drawLineGroup(0, 0, 170, 8,spacing, weight, alpha);
  pop();

  push();
  translate(517, 350); 
  drawLineGroup(0, 0, 170, 6, spacing, weight, alpha);
  pop();

// Thick 3
  push();
  translate(448, 316);
  drawLineGroup(0, 0, 30, 8, spacing, weight, alpha);
  pop();

  push();
  translate(432, 347);
  drawLineGroup(0, 0, 50, 8, spacing, weight, alpha);
  pop();

  push();
  translate(411, 380);
  drawLineGroup(0, 0, 70, 5, spacing, weight, alpha);
  pop();

//Thick 4
  push();
  translate(190, 348);
  drawLineGroup(0, 0, 190, 6, spacing, weight, alpha);
  pop();

  push();
  translate(196, 364);
  drawLineGroup(0, 0, 179, 6, spacing, weight, alpha);
  pop();

  push();
  translate(240, 438);
  drawLineGroup(0, 0, 20, 6, spacing, weight, alpha);
  pop();

  push();
  translate(246, 452);
  drawLineGroup(0, 0, 10, 6, spacing, weight, alpha);
  pop();

//Thin 1
  push();
  translate(125, 448);
  drawLineGroup(0, 0, 600, 22, spacing, weight, alpha)
  pop();

  push();
  translate(125,525);
  drawLineGroup(0, 0, 600, 22, spacing, weight, alpha)
  pop();

//Thin 2
  push();
  translate(137,320);
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, 255);
  pop();

  push();
  translate(176, 390);
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, 255);
  pop();

  push();
  translate(212, 455);
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, 255);
  pop();

//Trapezoid3
  push();
  translate(190,356);
  drawTrapezoidLines(0, 80, 23, 55, 0, trap3Height, trap3Spacing, trap3Alpha);
  pop();

  push();
  translate(172,320);
  drawTrapezoidLines(0, 103, 14, 85, 0, trap3Height, trap3Spacing, trap3Alpha);
  pop();

//Trapezoid2
  push();
  translate(110,320);
  drawTrapezoidLines(0, 165, 40 + distortion, 115 + distortion, 0, 19, trap2Spacing, trap2Alpha);
  pop();

  push();
  translate(456,300);
  drawTrapezoidLines(0, 56, -47 + distortion, 66 + distortion, 0, 25, trap2Spacing, trap2Alpha);
  pop();

  push();
  translate(105,354);
  drawTrapezoidLines(0, 145, 0 + distortion, 120 + distortion, 0, 12, trap2Spacing, trap2Alpha);
  pop();

//Trapezoid1
  push();
  translate(135, 440);
  drawTrapezoidLines(0, 255, 0, 215, 0, 16, trap1Spacing, trap1Alpha);
  pop();

  push();
  translate(440,440);
  drawTrapezoidLines(0, 70, -40, 80, 0, 16, trap1Spacing, trap1Alpha);
  pop();

  push();
  translate(128,550);
  drawTrapezoidLines(0, 201, 0, 176, 0, 9, trap1Spacing, trap1Alpha);
  pop();

  push();
  translate(390,522);
  drawTrapezoidLines(0, 120, -36, 130, 0, 15, trap1Spacing, trap1Alpha);
  pop();

  pop();
}

function drawLineGroup(x, y, len, count, spacing, weight, baseAlpha = 255) {
  strokeWeight(weight);
  for (let i = 0; i < count; i++) {
    let alpha = map(i, 0, count - 1, 0, baseAlpha); 
    stroke(0, alpha);
    let yOffset = y + i * spacing;
    line(x, yOffset, x + len, yOffset);
  }
}

function drawTrapezoidLines(x1, x2, x3, x4, y, h, spacing = 3, alpha = 255) {
  stroke(0, alpha);
  strokeWeight(1);
  for (let i = 0; i < h; i++) {
    let yi = y + i * spacing;
    let xi1 = lerp(x1, x3, i / h);
    let xi2 = lerp(x2, x4, i / h);
    line(xi1, yi, xi2, yi);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleFactor = min(width / 800, height / 600);
}