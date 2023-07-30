var Person = function () {
  this.age = 5;
  this.method = function () {
    console.log('hello');
  };
};

var hsn = new Person();

hsn.age = 24;

Person.age = 20;

console.log({ hsn });
console.log({ Person });
