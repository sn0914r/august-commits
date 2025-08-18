// call & apply method

function printFullName(){
    console.log(this.fname+" "+this.lname);
}

let p1 = {
    fname: "Sivananda",
    lname: "Reddy"
}

let p2 = {
    fname: "Vinod",
    lname: "kumar"
}

printFullName.call(p1); // Sivananda Reddy
printFullName.apply(p2); // Vinod Kumar

// borrowing from another object

let emp1 = {
    name: "Sai Ram",
    age: 30,
    salary: 1200000,
    details: function () {
        console.log(`
            employee name = ${this.name}
            age = ${this.age}
            salary = ${this.salary}
            `)
    }
}

let emp2 = {
    name: "tiGor",
    age: 48,
    salary: 3600000,
}
emp1.details.call(emp2);

// passing the additional argumnets

function printFullName(city, lang){
    console.log(this.fname+" "+this.lname+" is from " +city+" and speaks "+lang+".");
}

let stu1 = {
    fname: "Sivananda",
    lname: "Reddy"
}

printFullName.call(stu1, "madanapalle", "telugu"); // Sivananda Reddy is from madanapalle and speaks telugu.
printFullName.apply(stu1, ["madanapalle", "telugu"]); // Sivananda Reddy is from madanapalle and speaks telugu.
