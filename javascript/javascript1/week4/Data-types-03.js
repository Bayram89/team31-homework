const team = "Team 31";
const teamSize = 14;
const isActive = true;
let coach;
const boss = null;
const teamInfo = { name: "Team 31", hobby: "Coding", started: 2025 };
const members = [
  "Wadim",
  "Ali",
  "Mateus",
  "Nadiia",
  "Anita",
  "Neepun",
  "Bayram",
];

console.log("team:", typeof team);

console.log("teamSize:", typeof teamSize);

console.log("isActive:", typeof isActive);

console.log("coach:", typeof coach);

console.log("boss:", typeof boss);

console.log("teamInfo:", typeof teamInfo);

console.log("members:", typeof members);

const a = 10;
const b = -10;
const c = "100";
const d = "no";
const e = true;
const f = false;
const g = null;

console.log("#1", a + a, typeof (a + a)); // #1 20 number

console.log("#2", a + b, typeof (a + b)); // #2 0 number

console.log("#3", a + c, typeof (a + c)); // #3 10010 STRING

console.log("#4", a + d, typeof (a + d)); // #4 10no STRING

console.log("#5", a + e, typeof (a + e)); // #5 11

console.log("#6", a + f, typeof (a + f)); // #6 10 NUMBER

console.log("#7", a + g, typeof (a + g)); // #7 10 NUMBER
