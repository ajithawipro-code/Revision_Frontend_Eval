import React, { createContext,useEffect,useState } from "react";

export const NotesContext = createContext();

 function NotesProvider ({children}) {

    const [notes,setNotes] = useState([]);

    useEffect(()=>{
        const storedNotes = JSON.parse(localStorage.getItem("notes"));

        if(storedNotes)
        {
            setNotes(storedNotes);
        }
    },[]);

    useEffect(()=>{
        
        localStorage.setItem("notes", JSON.stringify(notes));

    },[notes]);

    const addNotes =(note) =>{

        setNotes([...notes, {id: Date.now(), note, completed : true}])
    }

    const toggleNote = (id) =>{

        const completedNote = notes.map((note)=>note.id ===id ? {...note, completed :true} : note);

        setNotes(completedNote);

    }

    return (
        <div>
            <NotesContext.Provider value = {{notes, addNotes, toggleNote}}>
                {children}
            </NotesContext.Provider>
        </div>
    )

}

export default NotesProvider