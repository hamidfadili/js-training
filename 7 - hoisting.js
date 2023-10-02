// Hoisting – var/let/const – scopes
function print(flag) {
  var value = "out";

  if (flag) {
    var value = "true block";
  } else {
    var value = "false block";
  }

  console.log(value);
}

print(true);
