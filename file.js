$(document).ready(function () {
    $('.white , .black').on('click', function (event) {
        let pitch = $(event.currentTarget).attr('pitch');
        let tone = $(event.currentTarget).attr('tone');
        chooseTone(tone);
        comparePitches(pitch);
    });

    $('.game').on('click', function (event) {
        playTone(tone[guess]);
        guessed = false;
    });
});

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = null;
var g = null;
let guess;
let guessCompare;
var guessed = true;
let correct = 0;
let missed = 0;
var octave = 5;

var tone = {
    'C4': 261.63, 'Db4': 277.18, 'D4': 293.66, 'Eb4': 311.13, 'E4': 329.63, 'F4': 349.23, 'Gb4': 369.99,
    'G4': 392.00, 'Ab4': 415.30, 'A4': 440.00, 'Bb4': 466.16, 'B4': 493.88, 'C5': 523.25, 'Db5': 554.37,
    'D5': 587.33, 'Eb5': 622.25, 'E5': 659.26, 'F5': 698.46, 'Gb5': 739.99, 'G5': 783.99, 'Ab5': 830.61,
    'A5': 880.00, 'Bb5': 932.33, 'B5': 987.77, 'C6': 1046.50, 'Db6': 1108.73, 'D6': 1174.66, 'Eb6': 1244.51,
    'E6': 1318.51, 'F6': 1396.91, 'Gb6': 1479.98, 'G6': 1567.98, 'Ab6': 1661.22, 'A6': 1760.00, 'Bb6': 1864.66,
    'B6': 1975.53, 'C7': 2093.00,
}

playTone = (frequency, type, duration) => {
    if (type === undefined)
        type = "sine";
    if (duration === undefined)
        duration = 1;
    if (frequency === undefined)
        frequency = 440;
    o = context.createOscillator();
    g = context.createGain();
    o.connect(g);
    o.type = type;
    o.frequency.value = frequency;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
}

function playSound(waveType, startFreq, endTime) {
    if (soundObj[arguments[0]] && arguments.length === 1) {
        var soundName = arguments[0];
        playSound(...soundObj[soundName]);
    } else {
        var oscillatorNode = context.createOscillator();
        var gainNode = context.createGain();
        oscillatorNode.type = waveType;
        oscillatorNode.frequency.setValueAtTime(startFreq, context.currentTime);
        for (var i = 3; i < arguments.length; i += 2)
            oscillatorNode.frequency.exponentialRampToValueAtTime(arguments[i], context.currentTime + arguments[i + 1]);
        gainNode.gain.setValueAtTime(0.3, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.1, context.currentTime + 0.5);
        oscillatorNode.connect(gainNode);
        gainNode.connect(context.destination);
        oscillatorNode.start();
        oscillatorNode.stop(context.currentTime + endTime);
    }
}

function chooseTone(pitch) {
    if (octave == 4) {
        if (pitch == "C1")
            playTone(tone["C4"]);
        else if (pitch == "Db")
            playTone(tone["Db4"]);
        else if (pitch == "D")
            playTone(tone["D4"]);
        else if (pitch == "Eb")
            playTone(tone["Eb4"]);
        else if (pitch == "E")
            playTone(tone["E4"]);
        else if (pitch == "F")
            playTone(tone["F4"]);
        else if (pitch == "Gb")
            playTone(tone["Gb4"]);
        else if (pitch == "G")
            playTone(tone["G4"]);
        else if (pitch == "Ab")
            playTone(tone["Ab4"]);
        else if (pitch == "A")
            playTone(tone["A4"]);
        else if (pitch == "Bb")
            playTone(tone["Bb4"]);
        else if (pitch == "B")
            playTone(tone["B4"]);
        else if (pitch == "C2")
            playTone(tone["C5"]);
    }
    else if (octave == 5) {
        if (pitch == "C1")
            playTone(tone["C5"]);
        else if (pitch == "Db")
            playTone(tone["Db5"]);
        else if (pitch == "D")
            playTone(tone["D5"]);
        else if (pitch == "Eb")
            playTone(tone["Eb5"]);
        else if (pitch == "E")
            playTone(tone["E5"]);
        else if (pitch == "F")
            playTone(tone["F5"]);
        else if (pitch == "Gb")
            playTone(tone["Gb5"]);
        else if (pitch == "G")
            playTone(tone["G5"]);
        else if (pitch == "Ab")
            playTone(tone["Ab5"]);
        else if (pitch == "A")
            playTone(tone["A5"]);
        else if (pitch == "Bb")
            playTone(tone["Bb5"]);
        else if (pitch == "B")
            playTone(tone["B5"]);
        else if (pitch == "C2")
            playTone(tone["C6"]);
    }
    else {
        if (pitch == "C1")
            playTone(tone["C6"]);
        else if (pitch == "Db")
            playTone(tone["Db6"]);
        else if (pitch == "D")
            playTone(tone["D6"]);
        else if (pitch == "Eb")
            playTone(tone["Eb6"]);
        else if (pitch == "E")
            playTone(tone["E6"]);
        else if (pitch == "F")
            playTone(tone["F6"]);
        else if (pitch == "Gb")
            playTone(tone["Gb6"]);
        else if (pitch == "G")
            playTone(tone["G6"]);
        else if (pitch == "Ab")
            playTone(tone["Ab6"]);
        else if (pitch == "A")
            playTone(tone["A6"]);
        else if (pitch == "Bb")
            playTone(tone["Bb6"]);
        else if (pitch == "B")
            playTone(tone["B6"]);
        else if (pitch == "C2")
            playTone(tone["C7"]);
    }
}

document.addEventListener('keypress', (e) => {
    if (e.code === "KeyW") {
        chooseTone("C1");
        comparePitches("C");
    }
    else if (e.code === "Digit3") {
        chooseTone("Db");
        comparePitches("C#/Db");
    }
    else if (e.code === "KeyE") {
        chooseTone("D");
        comparePitches("D");
    }
    else if (e.code === "Digit4") {
        chooseTone("Eb");
        comparePitches("D#/Eb");
    }
    else if (e.code === "KeyR") {
        chooseTone("E");
        comparePitches("E");
    }
    else if (e.code === "KeyT") {
        chooseTone("F");
        comparePitches("F");
    }
    else if (e.code === "Digit6") {
        chooseTone("Gb");
        comparePitches("F#/Gb");
    }
    else if (e.code === "KeyY") {
        chooseTone("G");
        comparePitches("G");
    }
    else if (e.code === "Digit7") {
        chooseTone("Ab");
        comparePitches("G#/Ab");
    }
    else if (e.code === "KeyU") {
        chooseTone("A");
        comparePitches("A");
    }
    else if (e.code === "Digit8") {
        chooseTone("Bb");
        comparePitches("A#/Bb");
    }
    else if (e.code === "KeyI") {
        chooseTone("B");
        comparePitches("B");
    }
    else if (e.code === "KeyO") {
        chooseTone("C2");
        comparePitches("C");
    }
    else if (e.code === "KeyQ") {
        octave--;
        if (octave < 4)
            octave = 4;
        document.getElementById("octaveDisplay").innerHTML = octave;
    }
    else if (e.code === "KeyP") {
        octave++;
        if (octave > 6)
            octave = 6;
        document.getElementById("octaveDisplay").innerHTML = octave;
    }
})

function randomNote() {
    let rand = Math.floor((Math.random() * 37) + 1);
    if (rand == 1)
        guess = "C4";
    else if (rand == 2)
        guess = "Db4";
    else if (rand == 3)
        guess = "D4";
    else if (rand == 4)
        guess = "Eb4";
    else if (rand == 5)
        guess = "E4";
    else if (rand == 6)
        guess = "F4";
    else if (rand == 7)
        guess = "Gb4";
    else if (rand == 8)
        guess = "G4";
    else if (rand == 9)
        guess = "Ab4";
    else if (rand == 10)
        guess = "A4";
    else if (rand == 11)
        guess = "Bb4";
    else if (rand == 12)
        guess = "B4";
    else if (rand == 13)
        guess = "C5";
    else if (rand == 14)
        guess = "Db5";
    else if (rand == 15)
        guess = "D5";
    else if (rand == 16)
        guess = "Eb5";
    else if (rand == 17)
        guess = "E5";
    else if (rand == 18)
        guess = "F5";
    else if (rand == 19)
        guess = "Gb5";
    else if (rand == 20)
        guess = "G5";
    else if (rand == 21)
        guess = "Ab5";
    else if (rand == 22)
        guess = "A5";
    else if (rand == 23)
        guess = "Bb5";
    else if (rand == 24)
        guess = "B5";
    else if (rand == 25)
        guess = "C6";
    else if (rand == 26)
        guess = "Db6";
    else if (rand == 27)
        guess = "D6";
    else if (rand == 28)
        guess = "Eb6";
    else if (rand == 29)
        guess = "E6";
    else if (rand == 30)
        guess = "F6";
    else if (rand == 31)
        guess = "Gb6";
    else if (rand == 32)
        guess = "G6";
    else if (rand == 33)
        guess = "Ab6";
    else if (rand == 34)
        guess = "A6";
    else if (rand == 35)
        guess = "Bb6";
    else if (rand == 36)
        guess = "B6";
    else
        guess = "C7";
    if (guess == "C4" || guess == "C5" || guess == "C6" || guess == "C7")
        guessCompare = "C";
    else if (guess == "Db4" || guess == "Db5" || guess == "Db6")
        guessCompare = "C#/Db";
    else if (guess == "D4" || guess == "D5" || guess == "D6")
        guessCompare = "D";
    else if (guess == "Eb4" || guess == "Eb5" || guess == "Eb6")
        guessCompare = "D#/Eb";
    else if (guess == "E4" || guess == "E5" || guess == "E6")
        guessCompare = "E";
    else if (guess == "F4" || guess == "F5" || guess == "F6")
        guessCompare = "F";
    else if (guess == "Gb4" || guess == "Gb5" || guess == "Gb6")
        guessCompare = "F#/Gb";
    else if (guess == "G4" || guess == "G5" || guess == "G6")
        guessCompare = "G";
    else if (guess == "Ab4" || guess == "Ab5" || guess == "Ab6")
        guessCompare = "G#/Ab";
    else if (guess == "A4" || guess == "A5" || guess == "A6")
        guessCompare = "A";
    else if (guess == "Bb4" || guess == "Bb5" || guess == "Bb6")
        guessCompare = "A#/Bb";
    else
        guessCompare = "B";
}

function comparePitches(pitch) {
    if (guessed == false) {
        if (guessCompare == pitch)
            correct++;
        else
            missed++;
        document.getElementById("correctDisplay").innerHTML = correct;
        document.getElementById("missedDisplay").innerHTML = missed;
        document.getElementById("inputDisplay").innerHTML = pitch;
        document.getElementById("noteDisplay").innerHTML = guessCompare;
        guessed = true;
        randomNote();
    }
}