// A simple utility function that assigns a username
function setUserName(username) {

  // `this` refers to whatever object calls this function
  // Example:
  // setUserName.call(obj, "akshay")
  // => obj.username = "akshay"

  this.username = username;
}

// Constructor function for creating user objects
function createUserDetails(username, password, id) {

  /*
    Why use `.call()` here?

    If we simply wrote:
      setUserName(username);

    then inside setUserName, `this` would NOT refer to the
    newly created object from `new createUserDetails(...)`.

    By using:
      setUserName.call(this, username);

    we explicitly bind `this` from createUserDetails
    to setUserName.

    So both functions now work on the SAME object.

    Equivalent idea:
      this.username = username;

    But `.call()` is useful when:
    - reusing logic
    - borrowing methods
    - inheritance-style patterns
  */
  setUserName.call(this, username);

  // Add more properties to the same object
  this.password = password;
  this.id = id;
}

// `new` creates a fresh object and binds `this` to it
const user = new createUserDetails("akshay", "password", 33);

// Final object: {username: "akshay", password: "password", id: 33}

console.log(user);