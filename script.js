const button1 = document.querySelector("#weather1");
const button2 = document.querySelector("#weather2");
const button3 = document.querySelector("#weather3");
let snowOn = false;
let fountainOn = false;
let worldOn = false;

const particles1 = document.querySelector("#particles1");

const scene = document.querySelector("a-scene");

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
        let particles2 = document.createElement('a-entity');
        particles2.setAttribute('particle-system', 'color: #000000,#00CCFF');
        particles2.setAttribute('id', 'particles2');
        button2.setAttribute('color', 'blue');
        button2.setAttribute('draw', 'background: #103680');
        button2.setAttribute('textwrap', 'textAlign: center; color: white; x: 75; y: 128; text: No fountain');
        scene.appendChild(particles2);
        fountainOn = true;
    }
    else {
        let particles2 = document.querySelector("#particles2");
        particles2.setAttribute('visible', false);
        scene.removeChild(particles2);
        button2.setAttribute('color', '#bbb');
        button2.setAttribute('draw', 'background: #bbb');
        button2.setAttribute('textwrap', 'textAlign: center; color: black; x: 75; y: 128; text: Fountain');

console.log(scene);
        fountainOn = false;
    }
    console.log(scene);

});

button3.addEventListener('click', e => {
    if (!worldOn) {
        let world = document.createElement("a-entity");
        world.setAttribute('id', 'world');
        world.setAttribute('environment', 'preset: dream');
        scene.appendChild(world);
        button3.setAttribute('color', 'blue');
        button3.setAttribute('draw', 'background: #103680');
        button3.setAttribute('textwrap', 'textAlign: center; color: white; x: 75; y: 128; text: No world');
        worldOn = true;
        console.log('world on');
    }
    else {
        let world = document.querySelector("#world");
        scene.removeChild(world);
        document.querySelector("a-sky").setAttribute('color', 'black');
        button3.setAttribute('color', '#bbb');
        button3.setAttribute('draw', 'background: #bbb');
        button3.setAttribute('textwrap', 'textAlign: center; color: black; x: 75; y: 128; text: World');
        worldOn = false;
        console.log('world off');
    }
});
