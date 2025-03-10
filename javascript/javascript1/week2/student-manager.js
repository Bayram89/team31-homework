const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Not possible to add an empty name!");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log("This student" + studentName + "already exists");
    return;
  }

  if (studentName === "Queen") {
    class07Students.push(studentName);
    return;
  }

  if (class07Students.length >= 6) {
    console.log("Not possible to add more students!");
    return;
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Maryam");
addStudentToClass("Davud");
addStudentToClass("Isak");
addStudentToClass("Davud");
addStudentToClass("Queen");
addStudentToClass("Incir");
addStudentToClass("Zeytin");
addStudentToClass("Hurma");
addStudentToClass("Su");
addStudentToClass("");

console.log(
  "How many students are added in class 07? Result:" + getNumberOfStudents()
);
console.log(class07Students);
