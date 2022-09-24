const fs = require('fs')
const path = require('path')

function createNewNote(body, notesArray) {
    const note = body
    // push to the array to write into the DB
    notesArray.push(note)
    // write data into the
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    )
    return body
 }

 module.exports = {createNewNote}