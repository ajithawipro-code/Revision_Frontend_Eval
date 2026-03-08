import NotesProvider from "./context/NotesContext";

import { AddNote } from "./components/AddNote";
import { NoteList } from "./components/NoteList";

export default function App(){

  return (
    <div>
      
      <AddNote />
      <NoteList />

    </div>


  )
}