// literal_Object_example();
// constructor_fucntion_example();
// prototype_example();
inheritance_example();

function literal_Object_example() {
  let obj1 = {
    id: 1,
    "phrase attribute": "Weird",
  };

  console.log("obj1", obj1);

  let obj2 = new Object();
  obj2.id = 2;
  obj2["phrase attribute"] = "Still weird";

  console.log("obj2", obj2);
}

function constructor_fucntion_example() {
  function Car(color, moving) {
    this.color = color;
    this.moving = moving;
  }

  let car = new Car("red", false);

  console.log("car", car);
}

function prototype_example() {
  function Car(color, moving) {
    this.color = color;
    this.moving = moving;
  }

  Car.prototype.move = function () {
    this.moving = true;
  };

  let car = new Car("red", false);

  console.log("car before", car);
  car.move();
  console.log("car after", car);
}

function inheritance_example() {
  function Car(color, engine, moving) {
    this.color = color;
    this.color = engine;
    this.moving = moving;
  }

  function Bicycle(color, moving) {
    this.color = color;
    this.moving = moving;
  }

  let vehicleProtoype = {
    move: function () {
      this.moving = true;
    },
    stop: function () {
      this.moving = false;
    },
  };

  Car.prototype.__proto__ = vehicleProtoype;
  Bicycle.prototype.__proto__ = vehicleProtoype;

  let car = new Car("red", "V8", false);
  let bicycle = new Bicycle("blue", false);
  console.log("---------- before starting ----------");
  console.log("car", car);
  console.log("bicycle", bicycle);

  car.move();
  bicycle.move();

  console.log("---------- after starting ----------");
  console.log("car", car);
  console.log("bicycle", bicycle);
}
