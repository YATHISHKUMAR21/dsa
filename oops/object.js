//in js if there is not class , how can we say it object oriented programming?
//In JavaScript, even though there are no traditional classes like in some other programming languages,
//  it still supports object-oriented programming (OOP) 
// through the use of objects and prototypes. Here are a few ways JavaScript implements OOP concepts:

//js is a prototype based language
//prototype = object

// in js there is no class , if i need to add existing property to object i use prototype



// 1. Objects: JavaScript is a prototype-based language, and everything in JavaScript is an object or can be treated as one.
// 2. Prototypes: JavaScript uses prototypes for inheritance. Every object has a prototype, 
// which is another object from which it can inherit properties and methods.
// 3. Constructor Functions: Before the introduction of ES6 classes, constructor functions were used to create objects and implement inheritance.
// 4. ES6 Classes: Although not traditional classes, ES6 introduced a class syntax that provides a more familiar way to create objects and handle inheritance.
// 5. Encapsulation: JavaScript allows for encapsulation through closures and modules, enabling data hiding and organization of code.
// 6. Polymorphism: JavaScript supports polymorphism through method overriding and dynamic typing, allowing objects to be treated as instances of their parent type.
//In summary, while JavaScript does not have traditional classes, it still embraces the principles of object-oriented programming through its use of objects, prototypes, and other features.

// Example of Object Creation using Object Literal

let obj = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
}
obj.greet(); // Output: Hello, John

// Example of Prototype-based Inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
}

let person1 = new Person("Alice");
person1.greet(); // Output: Hello, Alice


//custom prototype addition

let obj2 = {
    name: "Bob"
}

let temp = {
    name: "Temporary",
    age : 30,
    fun(){
        console.log("Inside fun");
    }
}

obj.__proto__ = temp; //adding prototype to existing object

console.log(obj2.age); // Output: 30
obj2.fun; // Output: Inside fun