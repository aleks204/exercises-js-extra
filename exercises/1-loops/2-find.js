function find(cities, letter) {
  var counter = [];
  for (let i = 0; i < cities.lenght; i++) {
    if (cities[i].startsWith(letter)) counter.push(cities[i]);
  }
  return counter.length;
}

const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];

console.log("Number of cities with A = " + find(citiesArray, "A"));
console.log("Number of cities with B = " + find(citiesArray, "B"));
