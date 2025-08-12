let a = 45;
let b = 21;
let operation = '+';

switch (operation){
    case `+`: 
        console.log("Sum: ", a+b);
        break;

    case `-`:
        console.log("Difference: ", a-b);
        break;
    case `*`:
        console.log("multipplication: ", a*b)
        break;
    case `/`:
        const result = b==0? "cannot divide with zero": a/b;
        console.log("Division: ", result)
        break;
    default: 
        console.log("Invalid Operation")
        
}