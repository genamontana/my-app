import React from 'react';
import s from './DisplayCounter.module.css'

type DisplayCounterType = {
    num: number
}

export const DisplayCounter = (props: DisplayCounterType) => {
    return (
        <div className={s.displayCounter}>
            {props.num}
        </div>
    );
};
