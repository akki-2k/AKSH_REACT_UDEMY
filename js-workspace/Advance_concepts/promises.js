const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("entered to setTimeout");
    // resolve();
  });
});
promiseOne
  .then(() => {
    console.log("then block");
  })
  .catch(() => {
    console.log("catch block");
  });
/////////////

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolve");
});

/////////////////////////
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "akshay", email: "akki@gmail.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

/////////////////////////////

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "akshay", password: "this is password" });
    } else {
      reject("error is in promise Four");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(`in promiseFour ${user.username}`);
    return user.username;
  })
  .catch((data) => {
    console.log(data);
  });

////////////////
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "promise@123" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

///////////////////
async function getAllUSers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUSers();
