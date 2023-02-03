import React from "react";  // import React (to provide access to TSX)
import "./photoviewer.css"

export function PhotoViewer(props: { src: string
}) {    // declare and export new function called 'PhotoViewer'

    return (
        <div>
            <img className="selected-image" src={props.src}></img>
        </div>
    );
}



