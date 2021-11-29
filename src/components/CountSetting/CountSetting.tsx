import React, {ChangeEvent, useState} from "react";
import style from "./CountSetting.module.css";
import {Button} from "../Button/Button";

type CountSettingType = {
    value: number
    setValue: (value: number) => void
    value2: number
    setValue2: (value2: number) => void
    counter: number
    setHandler: () => void
    dis:boolean
}

export function CountSetting(props: CountSettingType) {

    const maxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(+e.currentTarget.value)

    }
    const minChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue2(+e.currentTarget.value)
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
                <Button title={'Set+'} callback={props.setHandler} disabled={props.dis}/>

            </div>

        </div>
    )
}