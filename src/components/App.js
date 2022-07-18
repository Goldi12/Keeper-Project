import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function createNote(allNotes){
  return (
    <Note
    title = {allNotes.title}
    content={allNotes.content}
    />
  );
}




function App() {
  return (
    <div>
      <Header />
     {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
