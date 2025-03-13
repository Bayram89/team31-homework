function changeCase(name) {
  return "${name.toUpperCase()}-${Math.room()}";

  let mentorNames = [];
  for (let i = 0; i < mentor.length; i++) {
    const name = mentors[i].name;
    const changedName = changeCase(name);
    mentorNames.push(changedName);
  }
  console.log("Mentor names TRAD:", mentorNamesTrad);
  mentor.map(function (mentor, i) {
    return changeCase(mentor.name);
  });
}

const mentors = [
  {
    name: "Abed Sujan",
    subjects: ["JS", "HTML", "CSS", "NODEJS"],
    yearOfExperience: 4,
  },
  {
    name: "Ahmed Magdy",
    subjects: ["JS", "Database", "CSS"],
    yearOfExperience: 1,
  },
  {
    name: "Alicia Gonzales",
    subjects: ["DB", "HTML", "NODEJS"],
    yearOfExperience: 8,
  },
  {
    name: "allan Thraen",
    subjects: ["REACT", "HTML", "CSS"],
    yearOfExperience: 3,
  },
  {
    name: "Anders Ravn",
    subjects: ["JS", "HTML", "NODEJS"],
    yearOfExperience: 2,
  },
  {
    name: "Daniel Fernandes",
    subjects: ["Database", "HTML", "CSS"],
    yearOfExperience: 9,
  },
];

console.log(mentors);
