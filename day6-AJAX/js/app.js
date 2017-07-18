const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const prom = fetch(endpoint); // woah, a promise!

prom.then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(words, cities) {
    return cities.filter(place => {
        const regexp = new RegExp(words, 'gi');
        return place.city.match(regexp) || place.state.match(regexp);
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    suggestions.innerHTML = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `<li>
                <span class="name">${cityName},${stateName}</span>
                <span class="population">${place.population}</span>
                </li>`})
        .join('');
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);


