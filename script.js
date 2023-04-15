// Given array
const employees = [
  {id:1,name:"john",age:"18",profession:"developer"},
  {id:2, name:"jack",age:"20", profession:"developer"},
  {id:3, name:"karen", age:"19",profession:"admin"}
];

// PrintDeveloperbyMap() - console.log all the employees which have the profession of developer using the map function.
function PrintDeveloperbyMap() {
  const developers = employees.filter(employee => employee.profession === "developer");
  console.log(developers);
}

// PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function.
function PrintDeveloperbyForEach() {
  const developers = [];
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  console.log(developers);
}

// addData() - In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.
function addData() {
  const newEmployee = {id:4, name:"susan",age:"20", profession:"intern"};
  employees.push(newEmployee);
  console.log(newEmployee);
}

// removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array.
function removeAdmin() {
  const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
  employees.length = 0;
  Array.prototype.push.apply(employees, filteredEmployees);
  console.log(employees);
}

// ConcatinateArray() - Make another array with 3 objects just like the one in the above given array.
// The objects should be different, with different ids and all other parameters should be different too. Then concatenate these 2 arrays, and console.log
function ConcatinateArray() {
  const newArray = [
    {id:5, name:"alex",age:"22", profession:"developer"},
    {id:6, name:"jane",age:"24", profession:"admin"},
    {id:7, name:"michael",age:"21", profession:"developer"}
  ];
  const concatenatedArray = employees.concat(newArray);
  console.log(concatenatedArray);
}
