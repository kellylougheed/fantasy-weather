const button1 = document.querySelector("#weather1");
const button2 = document.querySelector("#weather2");
const button3 = document.querySelector("#weather3");
let snowOn = false;
let fountainOn = false;

const particles1 = document.querySelector("#particles1");
const particles2 = document.querySelector("#particles2");

const world = document.querySelector("#world");

button1.addEventListener('click', e => {
    console.log('add snow');
    if (!snowOn) {
        particles1.setAttribute('particle-system', 'preset: snow; color: green');
        button1.setAttribute('textwrap', 'textAlign: center; x: 75; y: 128; text: No snow');
        snowOn = true;
    }
    else {
        particles1.setAttribute('particle-system', '');
        button1.setAttribute('textwrap', 'textAlign: center; x: 75; y: 128; text: Snow');
        snowOn = false;
    }

});

button2.addEventListener('click', e => {
    console.log('add spray');
    if (!fountainOn) {
        particles2.setAttribute('particle-system', 'color: #000000,#00CCFF');
        button2.setAttribute('textwrap', 'textAlign: center; x: 75; y: 128; text: No fountain');
        fountainOn = true;
    }
    else {
        particles2.setAttribute('particle-system', '');
        button2.setAttribute('textwrap', 'textAlign: center; x: 75; y: 128; text: Fountain');
        fountainOn = false;
    }

});

button3.addEventListener('click', e => {
    console.log('world');
    world.setAttribute('environment', 'preset: dream');
});
