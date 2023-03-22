let sound1= new Tone.Player('assets/Splat.mp3')
let soud2= new Tone.Player('assets/Quest.mp3')
let color = "white";
let previousX, previousY;


let sounds = new Tone.Players({

  "Quest": "assets/Quest.mp3",

})

let button1;


function setup() {
  createCanvas(700, 350);
  sound1.toDestination();
  sounds.toDestination();
  background("white");
  synthA.volume.value = -9;
  synthB.volume.value = -9;
  synth.volume.value = -2;
  dSynth.volume.value = -5;

  button1= createButton('Click When Finished')
  button1.position(50,50);
  button1.mousePressed(() => buttonSound('assets/Quest.mp3'));

  nxButton = Nexus.Add.Button('#nxUI', {
    'size': [1700, 100]
  });
  nxButton.on('change', () => {
    Tone.start();
    pattern.start(0);
    Tone.Transport.start();
  })


  
}

function draw() {
  strokeWeight(5);
  stroke(color);

  if (mouseIsPressed) {
    line(previousX, previousY, mouseX, mouseY);
  }

  previousX = mouseX;
  previousY = mouseY;
strokeWeight(1);
  stroke("white");
  fill("red");
  rect(0, 0, 20, 20);

  fill("orange");
  rect(0, 20, 20, 20);

  fill("yellow");
  rect(0, 40, 20, 20);
  fill("green");
  rect(0, 60, 20, 20);

  fill("cyan");
  rect(0, 80, 20, 20);
  fill("blue");
  rect(0, 100, 20, 20);

  fill("magenta");
  rect(0, 120, 20, 20);
  fill("brown");
  rect(0, 140, 20, 20);

  fill("white");
  rect(0, 160, 20, 20);
  fill("black");
  rect(0, 180, 20, 20);
}


function mousePressed() {
if (MouseX >=20 && mouseX <=1700) {
  if (MouseY >=0 && mouseY <=800) {
    sound1.start();
  }
}


}
function mousePressed() {
  if (mouseX >= 0 && mouseX <= 20) {
    if (mouseY >= 0 && mouseY <= 20) {
      color = "red";
      sound1.start();
    } else if (mouseY >= 20 && mouseY <= 40) {
      color = "orange";
      sound1.start();
    } else if (mouseY >= 40 && mouseY <= 60) {
      color = "yellow";
      sound1.start();
    } else if (mouseY >= 60 && mouseY <= 80) {
      color = "green";
      sound1.start();
    } else if (mouseY >= 80 && mouseY <= 100) {
      color = "cyan";
      sound1.start();
    } else if (mouseY >= 100 && mouseY <= 120) {
      color = "blue";
      sound1.start();
    } else if (mouseY >= 120 && mouseY <= 140) {
      color = "magenta";
      sound1.start();
    } else if (mouseY >= 140 && mouseY <= 160) {
      color = "brown";
      sound1.start();
    } else if (mouseY >= 160 && mouseY <= 180) {
      color = "white";
      sound1.start();
    } else if (mouseY >= 180 && mouseY <= 200) {
      color = "black";
      sound1.start();
    }
  }
  previousX = mouseX;
  previousY = mouseY;
}

let nxButton;
let nxButton2;

let synth = new Tone.PolySynth().toDestination();
let dSynth = new Tone.PolySynth().toDestination();

let pattern = new Tone.Pattern(function (time, note) {
  synth.triggerAttackRelease(note, 0.25, time);
}, ['C4', ['D4', 'B3'], 'E4', 'G4']);

const melody = new Tone.Sequence((time, note) => {
	synth.triggerAttackRelease(note, 0.1, time);
	// subdivisions are given as subarrays
}, [null,'E5', 'E5', 'E5', null, 'C5', 'C5', 'C5',null, 'G4', 'G4', 'G4', null, 'F4','E4', null,'F4',null,null,null,'A4',null,null,null,null,null,null,null,null,null,null,null,]).start("0:0");


const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
//play a note every quarter-note
const loopA = new Tone.Loop(time => {
	synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);
//play another note every off quarter-note, by starting it "8n"
const loopB = new Tone.Loop(time => {
	synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");


function buttonSound(whichSound) {
  if(whichSound === "Quest") {
    sounds.player("Quest").start();
  }
}










// function setup() {
//   createCanvas(400, 400);

//   synthA.volume.value = -9;
//   synthB.volume.value = -9;
//   synth.volume.value = -2;
//   dSynth.volume.value = -5;


//   nxButton = Nexus.Add.Button('#nxUI', {
//     'size': [1700, 100]
//   });
//   nxButton.on('change', () => {
//     Tone.start();
//     pattern.start(0);
//     Tone.Transport.start();
//   })
// }

