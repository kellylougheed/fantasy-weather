const button1 = document.querySelector("#weather1");
const button2 = document.querySelector("#weather2");
const button3 = document.querySelector("#weather3");
let snowOn = false;
let fountainOn = false;
let worldOn = false;

const scene = document.querySelector("a-scene");
// const world = document.querySelector('#world');
const fountain = document.querySelector('#particles2');

const particles1 = document.querySelector("#particles1");

button1.addEventListener('click', e => {
    console.log('add snow');
    if (!snowOn) {
        // particles1.setAttribute('particle-system', 'preset: snow; color: green');
        scene.setAttribute('rain', 'color:#ffffff;vector:-1 -2 0;count:10000;opacity: 1;splash:false;width:40;dropHeight:0.1');
        button1.setAttribute('color', 'blue');
        button1.setAttribute('draw', 'background: #103680');
        button1.setAttribute('textwrap', 'textAlign: center; x: 75; y: 128; color: white; text: No snow');
        snowOn = true;
    }
    else {
        // particles1.setAttribute('particle-system', '');
        scene.setAttribute('rain', '');
        button1.setAttribute('color', '#bbb');
        button1.setAttribute('draw', 'background: #bbb');
        button1.setAttribute('textwrap', 'textAlign: center; color: black; x: 75; y: 128; text: Snow');
        snowOn = false;
    }

});

button2.addEventListener('click', e => {
    console.log('add spray');
    if (!fountainOn) {
        fountain.setAttribute('particle-system', 'color: #EF0000,#44CC0F;enabled: true');
        button2.setAttribute('color', 'blue');
        button2.setAttribute('draw', 'background: #103680');
        button2.setAttribute('textwrap', 'textAlign: center; color: white; x: 75; y: 128; text: No fountain');
        fountainOn = true;
    }
    else {
        fountain.setAttribute('particle-system', 'color: #EF0000,#44CC00; enabled: false');
        button2.setAttribute('color', '#bbb');
        button2.setAttribute('draw', 'background: #bbb');
        button2.setAttribute('textwrap', 'textAlign: center; color: black; x: 75; y: 128; text: Fountain');
        fountainOn = false;
    }
    console.log(scene);

});

button3.addEventListener('click', e => {
    let sky = document.querySelector('a-sky');
    if (!worldOn) {
        world.setAttribute('environment', 'preset: dream; fog:0; active: true');
        button3.setAttribute('color', 'blue');
        button3.setAttribute('draw', 'background: #103680');
        button3.setAttribute('textwrap', 'textAlign: center; color: white; x: 75; y: 128; text: No world');
        worldOn = true;
        console.log('world on');
    }
    else {
        world.setAttribute('environment', 'preset: dream; fog:0; active: false');
        button3.setAttribute('color', '#bbb');
        button3.setAttribute('draw', 'background: #bbb');
        button3.setAttribute('textwrap', 'textAlign: center; color: black; x: 75; y: 128; text: World');
        worldOn = false;
        console.log('world off');
    }
    console.log(sky);
});
