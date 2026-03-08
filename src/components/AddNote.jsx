import react, { useContext, useState, useEffect , useRef} from "react";
import { NotesContext } from "../context/NotesContext";

export const AddNote = () =>{

    const [text,setText] = useState("");
    const {addNotes} = useContext(NotesContext);

        const noteRef = useRef();

            useEffect(()=>{

           noteRef.current.focus();      


    },[]);



    const handleAddNote= ()=>{

        addNotes(text);
        setText("");
    }



    return (

        <div>
            <h1>Add Note Here</h1>
            <input type = "text" ref={noteRef} placeholder="Enter note" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAddNote}>Add</button>
          </div>
    )


}