function printThis() {
  console.log(this);
}

let obj = {
  name: "My Object",
  act: printThis,
};

console.log(this)
printThis();
obj.act();
setTimeout(printThis, 0);

// don't forget bind/call

