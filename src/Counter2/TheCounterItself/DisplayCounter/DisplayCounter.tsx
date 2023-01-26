import React from 'react';
import s from './DisplayCounter.module.css'

type DisplayCounterType = {
    num: number
    error: string
    max: number
}


export const DisplayCounter = (props: DisplayCounterType) => {
    return (
        <div className={props.num === props.max
            ? s.red
            : props.error
                ? s.error
                : s.displayCounter}>
            {props.error ? props.error : props.num}
        </div>
    );
};
