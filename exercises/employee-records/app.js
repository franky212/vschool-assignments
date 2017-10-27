var employee = [];

function Employee(name, job, salary) {
  this.name = name;
  this.job = job;
  this.salary = salary;
  this.status = "Full Time";
  this.printEmployeeForm = function() {
    console.log("Name: " + this.name);
    console.log("Job Title: " + this.job);
    console.log("Salary an hour: " + this.salary);
    console.log("Status: " + this.status);
  }
}

var bob = new Employee("Bob", "V School Instructor", 3000);
var eric = new Employee("Eric", "V School Instructor", 3000);
var marcus = new Employee("Marcus", "V School Instructor", 3000);
marcus.status = "Part Time";

employee.push(bob, eric, marcus);

bob.printEmployeeForm();
eric.printEmployeeForm();
marcus.printEmployeeForm();
