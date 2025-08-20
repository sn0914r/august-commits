const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(50);
  }, 2000);
});

// .then method
prom
.then(resolve=>console.log(resolve, "from .then() method"))
.catch(error=>console.log(error, "from .catch method"))

// async/await
async function getValue(){
    try{
        const value = await prom;
        console.log(value, "from async/await")
    }catch(error){
        console.log(error, "error from async/await")
    }
}

getValue();

// .then chaining

prom
.then(value=>new Promise(resolve=>setTimeout(()=>resolve(value+10), 2000)))
.then(value=>new Promise(resolve=>setTimeout(()=>resolve(value+10), 1000)))
.then(value=>new Promise(resolve=>setTimeout(()=>resolve(value+10), 500)))
.then(value=>console.log(value))
.catch(error=>console.log("error occured: ", error));