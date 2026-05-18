// Constructor function (used with `new` to create multiple similar objects)
function createUser(username, price) {

  /*
    When you call:
      new createUser("tea", 20)

    JS internally does something like:
      1. Creates an empty object: {}
      2. Links it to createUser.prototype
      3. Binds `this` to that object
      4. Executes this function
      5. Returns the object automatically
  */

  // `this` refers to the newly created object (tea / coffee)
  this.username = username;
  this.price = price;
}


// -----------------------------
// PROTOTYPE METHODS (shared)
// -----------------------------

/*
  Why use prototype?

  If we put methods inside the constructor:
    each object gets its own copy (memory waste)

  Instead:
    we attach methods to createUser.prototype
    → shared across all instances
*/

// Method to increment price
createUser.prototype.incrementPrice = function () {

  // `this` refers to the object calling the method (tea or coffee)
  this.price++;

  console.log(this.price);
};


// Method to print current state of object
createUser.prototype.printPrice = function () {

  console.log(`price of ${this.username} is ${this.price}`);
};


// -----------------------------
// Creating instances using `new`
// -----------------------------

const tea = new createUser("tea", 20);
const coffee = new createUser("coffee", 30);

/*
  Both objects now look like:

  tea = {
    username: "tea",
    price: 20,
    [[Prototype]] → createUser.prototype
  }

  coffee = {
    username: "coffee",
    price: 30,
    [[Prototype]] → createUser.prototype
  }
*/


// -----------------------------
// Method calls (prototype lookup)
// -----------------------------

/*
  When you do:
    tea.printPrice()

  JS checks:
    1. Does tea have printPrice? ❌
    2. Look in prototype → createUser.prototype.printPrice ✅
*/

tea.printPrice();   // price of tea is 20

/*
  When you do:
    tea.incrementPrice()

  JS finds incrementPrice in prototype and runs it
  with `this = tea`
*/
tea.incrementPrice(); // 21