const fs = require('fs');

var addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  }
  catch(e) {
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
}

var readNote = (title) => {
  console.log('Getting note ', title);
}

var removeNote = (title) => {
  console.log('Removed note')
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}
