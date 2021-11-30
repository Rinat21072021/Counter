import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {CountSetting} from "./components/CountSetting/CountSetting";
import {Counter} from "./components/Counter/Counter";


function App() {

    let [counter, setCounter] = useState(0)
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    const [disInc, setDisInc] = useState(true)
    const [disSet, setDisSet] = useState(true)
    const [disReset, setDisReset] = useState(true)

    useEffect(() => {
        let storage = localStorage.getItem('KeyValueMax')
        if (storage) {
            let newValue = JSON.parse(storage)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('KeyValueMax', JSON.stringify(value))

    }, [value])


    useEffect(() => {
        let storage2 = localStorage.getItem('KeyValueMin')
        if (storage2) {
            let newValue2 = JSON.parse(storage2)
            setValue2(newValue2)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('KeyValueMin', JSON.stringify(value2))
    }, [value2])


    const counterMin = value2
    const counterMax = value

    const reset = () => {
        setCounter(counterMin)
    }

    const inc = () => {
        debugger
        let currentIcValue = counter + 1

        if (currentIcValue <= counterMax) {
            setCounter(currentIcValue)
        }

        if (currentIcValue === counterMax) {
            setDisInc(true)
            setDisReset(true)
        }

    }

    return (
        <div className={s.AppContainer}>
            <Counter inc={inc}
                     disInc={disInc}
                     setDisInc={setDisInc}
                     disReset={disReset}
                     reset={reset}
                     counter={counter}
                     setCounter={setCounter}
                     counterMax={counterMax}

            />

            <CountSetting disSet={disSet}
                          setDisSet={setDisSet}
                          value={value}
                          setValue={setValue}
                          value2={value2}
                          setValue2={setValue2}
                          counter={counter}
                          setDisInc={setDisInc}
                          setDisReset={setDisReset}
                          setCounter={setCounter}

            />

        </div>
    )
}

export default App;
