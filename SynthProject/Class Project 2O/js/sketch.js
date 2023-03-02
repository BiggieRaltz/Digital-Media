let slider;

const synth = new Tone.MetalSynth();
const drum = new Tone.MembraneSynth();
const metal = new Tone.MetalSynth({
	"frequency"  : 45 ,
	"envelope"  : {
		"attack"  : 0.001 ,
		"decay"  : 0.4 ,
		"release"  : 0.2
	}  ,
	"harmonicity"  : 8.5 ,
	"modulationIndex"  : 40 ,
	"resonance"  : 300 ,
	"octaves"  : 1.5
});
const reverb = new Tone.JCReverb(0.4);
synth.connect(reverb);
drum.connect(reverb);
metal.connect(reverb);

const osc = new Tone.OmniOscillator("C#4", "pwm").start();

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.5,
  decay: 0.6,
  sustain: 0.3,
  release: 0.2
})

let notes = {
  'a': 'C2',
  'w': 'C#2',
  'e': 'D#2',
  's': 'D2',
  'd': 'E2',
  'f': 'F2',
  't': 'F#2',
  'g': 'G2',
  'y': 'G#2',
  'h': 'A2',
  'u': 'A#2',
  'j': 'B2',
  'k': 'C3',
  'o': 'C#3',
  'l': 'D3',
  'p': 'D#3',
}

function setup() {
  createCanvas(400, 400);
  slider = new Nexus.Slider("#slider");
  reverb.toDestination();

  synth.release = 2;
  synth.resonance = 0.98;
  // synth.harmonicity.value = 1.25;
  //play a middle 'C' for the duration of an 8th note
  // synth.triggerAttackRelease("C4", "8n");

  slider.on('change', (v) =>  {
    reverb.roomSize.value = v;
  }); 

  osc.connect(ampEnv);
  ampEnv.connect(reverb);
}

function draw(){
  background(255);
  text("use the slider to change the reverb of the sound", 0, 20);
  text("pres the keys to make some cool sounds", 50,200);
}
function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);

  osc.frequency.value = toPlay;
  ampEnv.triggerAttackRelease('8n');
}