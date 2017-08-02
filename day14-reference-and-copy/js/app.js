// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
// You might think we can just do something like this:
const team = players;
console.log(players, team);
// You might think we can just do something like this:
// team[3] = 'Lux';
// however when we update that array? - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// solution one:
const team2 = players.slice();

// solution two:
const team3 = [].concat(players);

// solution three:
const team4 = [...players];

// solution four:
const team5 = Array.from(players);

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object

const person = {
    name: 'Yewhral',
    age: 80
};

// and think we make a copy:
// how do we take a copy instead?

const personTwo = Object.assign({}, person, { number: 99, age: 12 });
console.log(personTwo);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
