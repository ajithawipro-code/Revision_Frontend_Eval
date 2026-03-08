import react from "react";
import { NotesContext } from "../context/NotesContext";
import { useContext , useMemo} from "react";
import { NoteItem } from "./NoteItem";

export const NoteList = () =>{

    const {notes}  = useContext(NotesContext);

    const totalNotes = useMemo(()=>{

        return notes.map((note)=>note.id)

    },[notes]);

    return (
        <div>
            <h3>Total Notes: {totalNotes.length} </h3>
            {
                notes.map((note)=>(
                    <NoteItem key = {note.id} item={note} />
                ))
            }
        </div>
    )


}