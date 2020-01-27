var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = null;
var g = null;

var tone = {
    'C5': 523.25,
    'Db': 554.37,
    'D': 587.33,
    'Eb': 622.25,
    'E': 659.26,
    'F': 698.46,
    'Gb': 739.99,
    'G': 783.99,
    'Ab': 830.61,
    'A': 880.00,
    'Bb': 932.33,
    'B': 987.77,
    'C6': 1046.50,
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

document.addEventListener('keypress', (e) => {
    if (e.code === "Digit2") {
        playTone(tone["C5"]);
    }
    else if (e.code === "KeyW") {
        playTone(tone["Db"]);
    }
    else if (e.code === "Digit3") {
        playTone(tone["D"]);
    }
    else if (e.code === "KeyE") {
        playTone(tone["Eb"]);
    }
    else if (e.code === "Digit4") {
        playTone(tone["E"]);
    }
    else if (e.code === "Digit5") {
        playTone(tone["F"]);
    }
    else if (e.code === "KeyT") {
        playTone(tone["Gb"]);
    }
    else if (e.code === "Digit6") {
        playTone(tone["G"]);
    }
    else if (e.code === "KeyY") {
        playTone(tone["Ab"]);
    }
    else if (e.code === "Digit7") {
        playTone(tone["A"]);
    }
    else if (e.code === "KeyU") {
        playTone(tone["Bb"]);
    }
    else if (e.code === "Digit8") {
        playTone(tone["B"]);
    }
    else if (e.code === "Digit9") {
        playTone(tone["C6"]);
    }
})