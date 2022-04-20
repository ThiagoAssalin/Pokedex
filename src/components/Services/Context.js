import React, {useState, createContext} from "react";


export const Context = createContext()

export function PokeProvider(props){
    const [att, setAtt] = useState(0)
    return(
        <Context.Provider value={[att,setAtt]}>
            {props.children}
        </Context.Provider>
    )
}