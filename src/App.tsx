import React, {ChangeEvent, useState} from 'react';
import './App.module.css';
import {Counter} from "./Counter";

import s from './App.module.css'

import {CountSetting} from "./components/CountSetting/CountSetting";
import {Button} from "./components/Button/Button";


function App() {

    let [counter, setCounter] = useState(0)
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [disButton, setDisButton] = useState(false)// disabled button SET+

    const sum = counter + 1
    const counterMin = value2
    const counterMax = value

    const reset = () => {
        setCounter(counterMin)
    }
    const inc = () => {
        if (counter < counterMax) {
            setCounter(sum)
        }
    }

    const setHandler = () => {
        setValue(value)
        setCounter(value2)
        setDisButton(false)


        localStorage.setItem('KeyValueMax', JSON.stringify(value))
        localStorage.setItem('KeyValueMin', JSON.stringify(value2))


    }
    const disSet = (counter === counterMax || counter < 0) || (counterMin === counterMax || counterMin > counterMax)
    const disInc = counter === counterMax || counter < 0
    const disReset = counter === counterMax

    return (
        <div className={s.AppContainer}>
            <div className={s.Block}>
                <div className={s.BlockCounter}>
                    <Counter counter={counter}
                             counterMax={counterMax}/>
                </div>
                <div className={s.BlockButton}>
                    <Button callback={inc} title={'Inc'} disabled={disInc}/>
                    <Button callback={reset} title={'Reset'} disabled={disReset}/>
                </div>

            </div>
            <CountSetting
                dis={disSet}
                value={value}
                setValue={setValue}
                value2={value2}
                setValue2={setValue2}
                counter={counter}
                setHandler={setHandler}
            />

        </div>
    )
}

export default App;
