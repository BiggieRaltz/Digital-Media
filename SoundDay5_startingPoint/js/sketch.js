let initTone = true;
// Set up Tone
let building;
let osc = new Tone.AMOscillator(10, 'square', 'square').start();
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 100,
  sustain: .4,
  release: 70
}).connect(pan);
osc.connect(ampEnv);



let noiseFilter = new Tone.Filter(70, "lowpass").connect(noiseEnv);
noise.connect(noiseFilter)


function setup() {
  createCanvas(250, 230);
  building = loadImage('assets/building.jpeg');
  }

function draw() {
  background(220);
  if(mouseIsPressed)
  {image(building,0,0)}

  text ('press spacebar to initialize sound', 50, 210);
}

function keyPressed(){
  if (keyCode = 32 && initTone === true) {
    Tone.start();
    initTone = false;
  }
}
//use above stuff in synth stuff to make sound come out 
function mousePressed() {
  console.log('pressed');
  ampEnv.triggerAttackRelease('4n');
  osc.frequency.setValueAtTime(10, '+1')
  ampEnv.triggerAttackRelease('4n', '+1');

 
}