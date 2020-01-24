var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = null;
var g = null;

var tone = {
    'C3': 130.81,
    'Db3': 138.59,
    'D3': 146.83,
    'Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'Gb3': 185.00,
    'G3': 196.00,
    'Ab3': 207.65,
    'A3': 220.00,
    'Bb3': 233.08,
    'B3': 246.94,
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
}

playTone = (frequency, type, duration) => {
    if (type === undefined)
        type = "sine";
    if (duration === undefined)
        duration = 1.5;
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