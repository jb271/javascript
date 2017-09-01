// 1)

// Function Declaration
// Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

// Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

// Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

// 2)

console.log(add(1, 2));

// 4)
function mul(n1, n2) {
  return n1 * n2;
}

// 5)
console.log(cb(7, 2, function (n1, n2) {
  return n1 / n2;
}));

// Callbacks

// 1)
var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
var shortNames = names.filter(function (name) {
  return name.length <= 3;
});
names.forEach(function (name) {
  console.log('Name: ' + name);
});
shortNames.forEach(function (name) {
  console.log('ShortName: ' + name);
});

// 2)
var upperCaseNames = names.map(function (name) {
  return name.toUpperCase();
});
console.log(upperCaseNames);

// 3)
console.log('<ul>' + names.map(function (name) {
  return '<li>' + name + '</li>';
}).join('') + '</ul>');

// 4)

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// a)
console.log(cars.filter(function (car) {
  return car.year > 1999;
}));
console.log(cars.filter(function (car) {
  return car.make === 'Volvo';
}));
console.log(cars.filter(function (car) {
  return car.price < 5000;
}));
function carsNewerThan(year) {
  return cars.filter(function (car) {
    return car.year > year;
  });
}

function carsOfMake(make) {
  return cars.filter(function (car) {
    return car.make === make;
  });
}

function carsCheaperThan(price) {
  return cars.filter(function (car) {
    return car.price < price;
  });
}


function carsFilter(key, value) {
  return cars.filter(function (car) {
    return car[key] === value;
  });
}

