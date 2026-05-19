const user = {
  username: "123",
  email: "111",
  isStudent: true,
};

// const info = Object.getOwnPropertyDescriptor(user, "username");
// console.log(info);
// Object.defineProperty(user, "username", { writable: false });
// const changed = Object.getOwnPropertyDescriptor(user, "username");
// console.log(changed);

for (const [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}
