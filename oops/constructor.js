class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//constructor is special method for creating and initializing an object created within a class. or in the memory.
//  it is called automatically when a new object is created.it is used to set initial values for object properties.


let animal = function(){
    this.username = "amit",
    this.age = 23,
    this.gender = "male"
}

console.log(animal);
console.log(animal());
console.log(new animal());
let obj = new animal();  //now this function became a constructor function.
console.log(obj)

// when we call the function normally it will return undefined because there is no return statement.
// but when we use new keyword it will create a new object and return that object.


console.log(obj.username);
console.log(obj.age);
console.log(obj.gender);


let animal2 = function(name, age, color){
    this.name = name,
    this.age = age,
    this.color = color
}

let obj2 = new animal2("dog", 4, "black");
let obj3 = new animal2("cat", 2, "white");
let obj4 = new animal2("cow", 5, "brown");
console.log(obj2);
console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.color);
console.log(obj3);
console.log(obj4);          
console.log(obj3.name);
console.log(obj4.color);
console.log(obj4.age);


//after ES6 we have class syntax to create constructor function

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

let myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar);
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.year);



