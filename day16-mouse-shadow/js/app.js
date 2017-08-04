const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const range = 200;



function shadow(e){
    const { offsetWidth: width, offsetHeight: height} = hero; // Im not familliar with that
    let { offsetX: x, offsetY: y} = e;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xRange = Math.round((x / width * range)  - (range / 2));
    const yRange = Math.round((y / height * range)  - (range / 2));

    text.style.textShadow = `
        ${xRange}px ${yRange}px 0 rgba(255,0,255,0.7),
        ${yRange}px ${xRange}px 0 rgba(0,255,255,0.4),
        ${yRange}px ${yRange}px 0 rgba(255,255,0,0.9),
        ${xRange}px ${xRange}px 0 rgba(0,255,255,0.2)
        `;
}

hero.addEventListener('mousemove', shadow);