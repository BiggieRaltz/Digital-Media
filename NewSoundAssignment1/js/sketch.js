
// let sound1 = new Tone.Player("sounds/chicken.wav");

let sounds = new Tone.Players({

  "surprise": "media/Suey.mp3",
  "MuddyWaters": "media/Muddy.mp3",
  "Tim": "media/Tim.mp3",
  "OMG": "media/OMGEE.mp3",

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["surprise", "MuddyWaters", "Tim","OMG"];
let buttons = [];

let dSlider;
let fSlider;

// let button1, button2, button3;

function setup() {
  createCanvas(500, 500);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index, index*100);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })

  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })


}

function draw() {
  background(100, 100, 40);
  text('press the buttons for a delightful audio cue', 0, 320)
  text('adjust time delay',0,480)
  text('adjust feedback delay', 150,480)

}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}