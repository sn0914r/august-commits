class ZeroError extends Error {
    constructor (message) {
        super(message)
        this.name = "ZeroDivisionError"
    }
}

try{
    let a = 5
    let b = 0

    if (b===0) throw new ZeroError("Cannot divide with Zero");

    console.log("Result: ", a/b)
}catch(error){
    console.log(error.name)
    console.log(error.message)
}