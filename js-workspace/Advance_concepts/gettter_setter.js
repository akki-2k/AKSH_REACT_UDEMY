class User {
    constructor(username, email, isFTte,password) {
        this.username = username;
        this.email = email;
        this.isFTte = isFTte;
        this.password = password;
    }
    set password(value){
        this._password = value
    }
    get password(){
        return this._password.toUpperCase();
    }
}
const akshay = new User("phalphal", "akki@ms.com", false, 'akki');
console.log(akshay.password);
