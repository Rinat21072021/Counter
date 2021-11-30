import React from "react";
import s from "../../App.module.css";
import {Button} from "../Button/Button";
import style from "./Counter.module.css"

type TypeCount = {
    inc: () => void
    disInc: boolean
    disReset: boolean
    reset: () => void
    counter: number
    setCounter: (counter: number) => void
    counterMax: number
    setDisInc: (value: boolean) => void

}
export const Counter = (props: TypeCount) => {

    const color = props.counter === props.counterMax ? style.red : style.counter
    const disableSetInt = () => {
        props.setDisInc(false)
    }
    return (
        <div className={s.Block}>
            <div className={s.BlockCounter}>
                <div className={color}>
                    {props.counter}

                </div>
            </div>
            <div className={s.BlockButton}>
                <Button callback={props.inc} title={'Inc'} disabled={props.disInc}/>
                <Button callback={props.reset} title={'Reset'} disabled={props.disReset}/>
            </div>
        </div>
    )
}