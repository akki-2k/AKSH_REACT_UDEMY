const user = {
  username: "akshay",
  loginCount: 1,
  isLoggedIn: true,
  getUserDetails: function getUserDetails() {
    console.log(this);
  },
};
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User("userOne", 11, false);
const userTwo = new User("userTwo", 2, true);
console.log(userOne);
console.log(userTwo);
