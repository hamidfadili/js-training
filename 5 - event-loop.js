var count = 0;

function increment(){
    for(let i = 0; i < 1000; i++){
        count++;
    }
}

setTimeout(increment, 0);
setTimeout(increment, 0);
setTimeout(increment, 0);
setTimeout(increment, 0);
setTimeout(() => console.log(count), 0);

console.log(count)