# Promise methods

1. `Promise.resolve(value)`:- Creates a promise resolved with given value.

```JS
Promise.resolve(50).then(value=>console.log(value));
// output:- 50
```

2. `Promise.reject(error)`:- Creates a promise rejected with error.

```JS
Promise.reject("unknown error").catch(error=>console.log(error));
// output:- unknown error
```

3. `Promise.all([p1, p2, ...])`:- Resolves when all promises resolve, rejects  if any reject.

```JS
Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30)
]).then(values=>console.log(values)); 
// output:- [10, 20, 30]
```

4. `Promise.allSettled([p1, p2, ....])`:- Resolves with the result of all promises (fulfilled or rejected).

```JS
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("unknown error"),
    Promise.resolve(3),
]);

// output:- [{status: "fufilled", value: 1}, {status: "rejected", reason: "unknown error"}, {status: "fufilled", value: 3}]
```

5. `Promise.race([p1, p2, ...])`:- Resolves/rejects with the first promise that settles.

```JS
Promise.race([
    Promise.resolve("fast"),
    new Promise(r=>setTimeOut(()=> r("slow"), 1000))
]).then(value=>console.log(value))

// fast
```

6. `Promise.any([p1, p2, p3....])`:- Resolves with the first fulfilled promise, rejects if all reject.

```JS
Promise.any([
    Promise.reject("x"),
    Promise.resolve("y")
]).then(value=>console.log(value));

// y
```