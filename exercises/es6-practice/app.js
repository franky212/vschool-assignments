function collectAnimals(...animals) {
  console.log(animals);
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];

const food = {fruit, sweets, vegetables}

console.log(food);

const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

let {location, duration} = vacation;

console.log(`We're going to have a good time in ${location} for ${duration}`);

const items = ["Mario", "Peach", "Luigi"];

const [firstItem, ...rest] = items;

const [firstFav, secondFav, thirdFav, ...restFav] = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// your code

console.log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`);

/*************
ASK FOR HELP ON THIS ONE
**************/

function combineAnimals(...arr1) {
  console.log(arr1);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

const product = (a, b, c, d, e) => {
  let numbers = [a,b,c,d,e];

  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
};

console.log(product(1, 2, 3, 4, 5));

const unshift = (array, a, b, c, d, e) => {
  return [a, b, c, d, e].concat(array);
}

const populatePeople = names => {
  return names.map(name => {
    name = name.split(" ");

    return {firstName: firstName, lastName: lastName};
  })
}
