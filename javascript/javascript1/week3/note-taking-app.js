console.log("------>>> Save a Note <<<------");

const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote(
  "Employee Engagement: a monthly 'Lunch & Learn' program where team members can share their expertise on various topics",
  1
);
saveNote(
  "A new project management tool, like Asana, to improve task tracking and team communication",
  2
);

console.log(notes);

console.log("------>>> Get a Specific Note <<<------");
const notes1 = [
  { content: "Employee Engagement", id: 1 },
  { content: "A new project management tool", id: 2 },
];

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Oops: ID must always be a number!");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  return undefined;
}

const secondNote = getNote(2);
console.log(secondNote);

const fifthNote = getNote(5);
console.log(fifthNote);

const nonExistingNote = getNote("Budget tool");
console.log(nonExistingNote);

console.log("------>>> Log out Notes <<<------");
const notes2 = [
  {
    content:
      "Employee Engagement: a monthly 'Lunch & Learn' program where team members can share their expertise on various topics",
    id: 1,
  },
  {
    content:
      "A new project management tool, like Asana, to improve task tracking and team communication",
    id: 2,
  },
];

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        " has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted();
