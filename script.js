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
        let particles2 = document.createElement('a-entity');
        particles2.setAttribute('particle-system', 'color: #000000,#00CCFF');
                particles2.setAttribute('id', 'particles2');
        button2.setAttribute('textwrap', 'textAlign: center; x: 75; y: 128; text: No fountain');
        scene.appendChild(particles2);
        fountainOn = true;
    }
    else {
        let particles2 = document.querySelector("#particles2");
        scene.removeChild(particles2);

        fountainOn = false;
    }

});

button3.addEventListener('click', e => {
    if (!worldOn) {
        let world = document.createElement("a-entity");
        world.setAttribute('id', 'world');
        world.setAttribute('environment', 'preset: dream');
        scene.appendChild(world);
        worldOn = true;
        console.log('world on');
    }
    else {
        let world = document.querySelector("#world");
        scene.removeChild(world);
        document.querySelector("a-sky").setAttribute('color', 'black');
        worldOn = false;
        console.log('world off');
    }
});
