import React from "react";
import style from "./Button.module.css"
type ButtonType={
    title:string
    callback:()=>void
    disabled:boolean

}
export const Button=(props:ButtonType)=>{
const buttonDis = {
    backgroundColor: props.disabled ? "white" : "green",
}

    return <button className = {style.button}
                   style={buttonDis}
                   disabled={ props.disabled }
                   onClick={props.callback}>{props.title}</button>
}