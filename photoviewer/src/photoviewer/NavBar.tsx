import React from "react";  // import React (to provide access to TSX)

export function NavBar(props: {
    pageState: string;
    setPageState: React.Dispatch<React.SetStateAction<string>>
}) {
    return (
        <div className = "navbar-container">
            <ul className="navbar">
                <li onClick={() => props.setPageState("homepage")}className="nav-button">Home</li>
                <li onClick={() => props.setPageState("about-page")}
                    className="nav-button">About</li>
                <li onClick={() => props.setPageState("settings-page")} className="nav-button" >Settings</li>
            </ul>
        </div >
    )
}