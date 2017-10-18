var students = [
  {
    name: "Frank",
    age: 24,
    array: [],
    passing: true
  },
  {
    name: "Luke",
    age: 24,
    array: [],
    passing: true
  },
  {
    name: "Jeremy",
    age: 27,
    array: [],
    passing: true
  },
  {
    name: "Derek",
    age: "Uknown",
    array: [],
    passing: true
  },
];

for (key in students) {
  console.log(students[key].name, students[key].age);
}
