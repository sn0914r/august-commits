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

// promise methods

async function all(){
  try{
    let result = await Promise.all([
      Promise.resolve("tiGOr"),
      Promise.reject("error from all")
    ]);

    console.log(result)
  }catch(error){
    console.log(error)
  }
}

all();

async function allSettled(){
  try{
    let result = await Promise.allSettled([
      Promise.resolve("bhAAi"),
      Promise.reject("error from allSettled")
    ])

    console.log(result)
  }catch(error){
    console.log(error)
  }
}

allSettled();

async function race(){
  try{
    let result = await Promise.race([
      Promise.resolve("fast promise"),
      new Promise(function(resolve){
        setTimeout(()=>{
          resolve("slow promise")
        })
      })
    ])

    console.log(result);
  }catch(error){
    console.log(error);
  }
}
race();

async function any(){
  try{
    let result = await Promise.any([
      Promise.reject("error from any"),
      Promise.resolve("tiGor"),
      Promise.resolve("bhAAi")
    ])

    console.log(result)
  }catch(error){
    console.log(error);
  }
}

any();