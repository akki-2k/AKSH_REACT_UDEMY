class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  getEncryptedPassword() {
    return `${this.password}@123`;
  }
}
const chai = new User("akshay", "akki@gmail.com", "password");
console.log(chai.getEncryptedPassword());
