const button1 = document.querySelector("#weather1");
const button2 = document.querySelector("#weather2");
const particles1 = document.querySelector("#particles1");
const particles2 = document.querySelector("#particles2");

button1.addEventListener('click', e => {
    console.log('add snow');
    particles1.setAttribute('particle-system', 'preset: snow; color: white');
});

button2.addEventListener('click', e => {
    console.log('add spray');
    // particle-system="color: #EF0000,#44CC00"
    // Particle system uses 'default' preset, setting custom colors. -->
   //  <<!--<a-entity position="0 3 0" particle-system="color: #EF0000,#44CC00"></a-entity>
    particles2.setAttribute('particle-system', 'color: #EF0000,#44CC00');
});
