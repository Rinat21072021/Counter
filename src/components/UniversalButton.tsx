import React from "react";

type TypeUniversalButton = {

    callback: () => void
    title:string
    dis:boolean

}

export function UniversalButton (props: TypeUniversalButton) {
    const buttonInc = {
        padding: " 5px",
        borderRadius: "10px",
        border: "solid 2px black",
        margin: "10px",
        backgroundColor: props.dis ? "white" : "green",

    }

    return (
        <div>
            <button disabled={props.dis} style={buttonInc} onClick={props.callback}>{props.title}</button>

        </div>
    )
}