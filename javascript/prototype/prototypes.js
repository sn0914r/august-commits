// const obj1 = {
//     fname: "sivananda",
//     lname: "reddy"
// }

// const obj2 = Object.create(obj1);
// obj2.gender="male"

// // console.log(obj2.fname); // Ouput:- sivananda
// // console.log(obj2.gender); // output:- male

// // console.log(obj2);

// // console.log(Object.getPrototypeOf(obj2));
// // console.log(Object.getPrototypeOf(obj2.__proto__))
// // console.log(Object.getPrototypeOf(obj2.__proto__.__proto__)) // null

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHello = function() {
//   console.log("Hi, I'm " + this.name);
// };

// function Student(name, grade) {
//   Person.call(this, name); // copies property "name"
//   this.grade = grade;
// }
// Student.prototype = Object.create(Person.prototype); // inherit methods
// Student.prototype.constructor = Student;

// // const s1 = new Student("Siva", "A");

// //console.log(s1)

// // console.log(Object.getPrototypeOf(s1));


// // const array=[1, 2, 3]

// // console.log(array)
// // console.log(array.__proto__)

// // const obj45 = {
// //     name: "siva"
// // }

// // console.log(obj45.__proto__)

// // const str = "siva"


// const obj444 = {
//     name: "Siva"
// }


// class Person{
//     static fname="ramesh"
//     lname = "yadav"
// }

// let p1 = new Person();
// console.log(Person.fname)

function siv() {
    console.log(this.name)
}
siv.name = "hi"

console.log(siv.name)
