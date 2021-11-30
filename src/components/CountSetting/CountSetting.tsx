import React, {ChangeEvent} from "react";
import style from "./CountSetting.module.css";
import {Button} from "../Button/Button";

type CountSettingType = {
    value: number
    setValue: (value: number) => void
    value2: number
    setValue2: (value2: number) => void
    counter: number
    disSet: boolean
    disButton?: boolean
    setDisSet: (value: boolean) => void
    setDisInc: (value: boolean) => void
    setDisReset: (value: boolean) => void
    setCounter: (value: number) => void
}

export function CountSetting(props: CountSettingType) {

    const maxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.valueAsNumber)
        props.setDisSet(false)
    }
    const minChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue2(+e.currentTarget.value)
        props.setDisSet(false)

    }

    const setDisAndSetCounterMin = () => {
        props.setDisSet(true)
        props.setDisInc(false)
        props.setDisReset(false)
        props.setCounter(props.value2)

    }


    return (
        <div className={style.Block}>
            <div className={style.BlockCounter}>
                <div>
                    <p className={style.InputContainer}>
                        Max value: <input type={'number'} value={props.value} onChange={maxChangeHandler}/>
                    </p>
                    <p className={style.InputContainer}>
                        Min value: <input type={'number'} value={props.value2} onChange={minChangeHandler}/>
                    </p>
                </div>

            </div>
            <div className={style.BlockCounter}>
                <Button title={'Set+'} disButton={props.disButton} callback={setDisAndSetCounterMin} disabled={props.disSet}/>

            </div>

        </div>
    )
}