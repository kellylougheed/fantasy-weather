const button1 = document.querySelector("#weather1");
const button2 = document.querySelector("#weather2");
const button3 = document.querySelector("#weather3");

const particles = document.querySelector("#particles");

const world = document.querySelector("#world");

button1.addEventListener('click', e => {
    console.log('add snow');
   particles.setAttribute('particle-system', 'preset: snow; color: green');
});

button2.addEventListener('click', e => {
    console.log('add spray')
    // particle-system="color: #EF0000,#44CC00"
    // Particle system uses 'default' preset, setting custom colors. -->
   //  <<!--<a-entity position="0 3 0" particle-system="color: #EF0000,#44CC00"></a-entity>
    particles.setAttribute('particle-system', 'color: #000000,#00CCFF');
});

button3.addEventListener('click', e => {
    console.log('world');
    world.setAttribute('environment', 'preset: dream');
});