const UserName = "Alice";
const age = 16;
const isStudent = true;
const country = "USA";
let message = "";
let UserStatus = "";

if (age < 18) {
  UserStatus = "minor";
} else {
  UserStatus = "adult";
}

message = UserName + " is a " + UserStatus + " from " + country + ".";

console.log(message); // Alice is a minor from USA.

console.log(" ---------> Why is my code not working? <--------- ");

const canSee = true;
let room;

if (canSee) {
  room = "This room is not dark";
} else {
  room = "This room is pitch black";
}
console.log(room);
