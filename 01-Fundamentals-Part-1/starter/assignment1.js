const country = 'USA';
const continent = 'North America';
let population = 336;

const isIsland = false;
const language = 'english';

console.log(population/2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 = country + ' is in ' + continent + ', and its ' + 
    population + ' million people speak ' + language + '.';

console.log(description1);

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description2);

const avgPopulation = 33;

if (population > avgPopulation){
    console.log(`${country}'s population is ${population - avgPopulation} million above the average population.`);
} else {
    console.log(`${country}'s population is ${avgPopulation - population} million below the average population.`);
}