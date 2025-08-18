function useCounter(){
    let count = 0;

    const increment=()=>count+=1;
    const decrement=()=>count-=1;
    const log=()=>console.log(`current count: ${count}`);

    return { increment, decrement, log }
}

const { increment, decrement, log } = useCounter();

increment(); // 1
increment(); // 2
log(); // logs 2

decrement(); // 1
log(); // logs 1
