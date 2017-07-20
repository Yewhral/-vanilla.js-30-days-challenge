const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Styled
console.log('%cI am a test', 'font-size:50px');

// warning!
console.warn('warning');

// Error :|
console.error('error');

// Info
console.info('info');

// Testing
console.assert(1 !== 1, 'That is wrong!');

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);

// clearing
console.clear();

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.name} years old`);
});

// counting
console.count('Doe');
console.count('Doe');
console.count('Hunter');
console.count('Hunter');
console.count('Hunter');
console.count('Doe');
console.count('Doe');


// timing
console.time('fetching data');
fetch('https://api.github.com/users/yewhral')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});