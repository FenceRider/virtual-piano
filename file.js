var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = null;
var g = null;

var tone = {
    'C4': 261.63,
    'Db4': 277.18,
    'D4': 293.66,
    'Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'Gb4': 369.99,
    'G4': 392.00,
    'Ab4': 415.30,
    'A4': 440.00,
    'Bb4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'Db5': 554.37,
    'D5': 587.33,
    'Eb5': 622.25,
    'E5': 659.26,
    'F5': 698.46,
    'Gb5': 739.99,
    'G5': 783.99,
    'Ab5': 830.61,
    'A5': 880.00,
    'Bb5': 932.33,
    'B5': 987.77,
    'C6': 1046.50,
    'Db6': 1108.73,
    'D6': 1174.66,
    'Eb6': 1244.51,
    'E6': 1318.51,
    'F6': 1396.91,
    'Gb6': 1479.98,
    'G6': 1567.98,
    'Ab6': 1661.22,
    'A6': 1760.00,
    'Bb6': 1864.66,
    'B6': 1975.53,
    'C7': 2093.00,
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

function playGame() {
    let rand = Math.floor((Math.random() * 37) + 1);
    if (rand == 1)
        playTone(tone["C4"]);
    else if (rand == 2)
        playTone(tone["Db4"]);
    else if (rand == 3)
        playTone(tone["D4"]);
    else if (rand == 4)
        playTone(tone["Eb4"]);
    else if (rand == 5)
        playTone(tone["E4"]);
    else if (rand == 6)
        playTone(tone["F4"]);
    else if (rand == 7)
        playTone(tone["Gb4"]);
    else if (rand == 8)
        playTone(tone["G4"]);
    else if (rand == 9)
        playTone(tone["Ab4"]);
    else if (rand == 10)
        playTone(tone["A4"]);
    else if (rand == 11)
        playTone(tone["Bb4"]);
    else if (rand == 12)
        playTone(tone["B4"]);
    else if (rand == 13)
        playTone(tone["C5"]);
    else if (rand == 14)
        playTone(tone["Db5"]);
    else if (rand == 15)
        playTone(tone["D5"]);
    else if (rand == 16)
        playTone(tone["Eb5"]);
    else if (rand == 17)
        playTone(tone["E5"]);
    else if (rand == 18)
        playTone(tone["F5"]);
    else if (rand == 19)
        playTone(tone["Gb5"]);
    else if (rand == 20)
        playTone(tone["G5"]);
    else if (rand == 21)
        playTone(tone["Ab5"]);
    else if (rand == 22)
        playTone(tone["A5"]);
    else if (rand == 23)
        playTone(tone["Bb5"]);
    else if (rand == 24)
        playTone(tone["B5"]);
    else if (rand == 25)
        playTone(tone["C6"]);
    else if (rand == 26)
        playTone(tone["Db6"]);
    else if (rand == 27)
        playTone(tone["D6"]);
    else if (rand == 28)
        playTone(tone["Eb6"]);
    else if (rand == 29)
        playTone(tone["E6"]);
    else if (rand == 30)
        playTone(tone["F6"]);
    else if (rand == 31)
        playTone(tone["Gb6"]);
    else if (rand == 32)
        playTone(tone["G6"]);
    else if (rand == 33)
        playTone(tone["Ab6"]);
    else if (rand == 34)
        playTone(tone["A6"]);
    else if (rand == 35)
        playTone(tone["Bb6"]);
    else if (rand == 36)
        playTone(tone["B6"]);
    else
        playTone(tone["C7"]);
    let submit = document.getElementById("submit");
    submit.addEventListener("click", function () {
        let userNote = document.getElementById("noteRadio");
        let note = userNote.value;
        document.getElementById("output").innerText = "test " + note;
    });
}

document.addEventListener('keypress', (e) => {
    if (e.code === "KeyW")
        playTone(tone["C5"]);
    else if (e.code === "Digit3")
        playTone(tone["Db5"]);
    else if (e.code === "KeyE")
        playTone(tone["D5"]);
    else if (e.code === "Digit4")
        playTone(tone["Eb5"]);
    else if (e.code === "KeyR")
        playTone(tone["E5"]);
    else if (e.code === "KeyT")
        playTone(tone["F5"]);
    else if (e.code === "Digit6")
        playTone(tone["Gb5"]);
    else if (e.code === "KeyY")
        playTone(tone["G5"]);
    else if (e.code === "Digit7")
        playTone(tone["Ab5"]);
    else if (e.code === "KeyU")
        playTone(tone["A5"]);
    else if (e.code === "Digit8")
        playTone(tone["Bb5"]);
    else if (e.code === "KeyI")
        playTone(tone["B5"]);
    else if (e.code === "KeyO")
        playTone(tone["C6"]);
})