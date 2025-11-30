// practice question prompting a user to enter his full name and suggesting him/her the user name

let fullName = prompt("Enter Your FullName:")
let userName = "@" + fullName + fullName.length;
console.log(userName);
