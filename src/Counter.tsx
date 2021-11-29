import React from 'react';
import './App.module.css';

type CounterPropsType={
    counter:number
    counterMax:number



}
export function Counter(props:CounterPropsType) {
    const Counter= {
        fontSize: "400%",
        fontWeight: 800,
        padding: "20px",
        marginBottom: "10px",
        color: props.counter===props.counterMax ? "red" : "blue",
    }
    return (

        <div style={Counter}>
            {props.counter}
        </div>


    )
}


