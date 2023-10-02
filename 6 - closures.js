function firstExample() {
  function pureSum(a, b) {
    return a + b;
  }

  let base = 10;
  function closure(toAdd) {
    return base + toAdd;
  }
}

// build counter
function createCounter(){
    let counter = 0

    return () => {
        counter++
        console.log(counter)
    }
}

increment = createCounter();

increment()
increment()
increment()

function withUpdate() {
  function func() {
    let a = "initial value";

    setTimeout(() => {
      a = "updated value";
    }, 0);

    return () => {
      console.log(a);
    };
  }

  setTimeout(func(), 200);
}
