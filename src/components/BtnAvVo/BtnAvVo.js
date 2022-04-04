import React from "react";
import "./btn-av-vo.css";


export default function btnAvVo(props){
    return(
        <div className="ar">
            <button className="btn-ar btn" onClick={props.previusPoke} >&larr;</button>
            <button className="btn-ar btn" onClick={props.nextPoke}>&rarr;</button>
        </div>
    )
}