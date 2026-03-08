import { NotesContext } from "../context/NotesContext"
import { useContext } from "react";


export const NoteItem = ({item}) =>{

    const {toggleNote} = useContext(NotesContext);



    return (
        <div>
           <span onClick={()=>toggleNote(item.id)}>{item.note}</span>
           <p>{item.note}</p>
           <p>{item.id}</p>
           <p>{item.completed}</p>
        </div>
    )




}