// a)
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// b)
var all = boys.concat(girls);

// c)
var commas = all.join(',');
var hyphens = all.join('-');

// d)
all.push('Lone', 'Gitte');

// e)
all.unshift('Hans', 'Kurt');

// f)
all.shift(1);

// g)
all.pop();

// h)
all.splice(3, 2);
console.log('h', all);

// i)
all.reverse();
console.log('i', all);

// j)
all.sort();
console.log('j', all);

// k)
all.sort(function (a, b) {
  return a.toUpperCase() > b.toUpperCase();
});
console.log('k', all);

// l)
var upper = all.map(function (a) {
  return a.toUpperCase();
});
console.log('l', upper);

// m)
var startsWithL = all.filter(function (a) {
  return a.substring(0, 1).toUpperCase() === 'L';
});
console.log('m', startsWithL);




