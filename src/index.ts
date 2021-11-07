let siprator: string = "*".repeat(5);
console.log(siprator, "change prop outside constructor", siprator);
class User {
  constructor(public name: string) {}
  changeUserName(newName: string) {
    this.name = newName;
  }
}
let user = new User("jac");
user.changeUserName("sam");
console.log(user.name); // output sam

console.log(siprator, "using readonly", siprator);
class Admin {
  // let name:string //without shorthand
  constructor(public readonly name: string) {}
  changeUserName(newName: string) {
    // this.name=name //without shorthand
    this.name = newName; //runtime error
    // name is readonly
  }
}
let admin = new Admin("jac");
admin.changeUserName("sam");
console.log(admin.name); // output sam as js
//but its runtime error on typescript
