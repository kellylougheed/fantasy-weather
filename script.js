const weather1 = document.querySelector("#weather1");
const particles1 = document.querySelector("#particles1");

weather1.addEventListener('click', e => {
    console.log('add snow');
    particles1.setAttribute('particle-system', 'preset: snow; color: red');
});