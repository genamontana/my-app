import React, {useState} from 'react';
import s from './Counter.module.css'
import {Scoreboard} from './Tablo/Scoreboard';
import {Buttons} from './Buttons/Buttons';


export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementClick = () => {
        setCounter(counter + 1)
    }
    const reset = () => setCounter(0)

    return (
        <div className={s.counter}>
            <h1>COUNTER</h1>
            <Scoreboard counter={counter}/>
            <Buttons
                counter={counter}
                inc={incrementClick}
                res={reset}
            />
        </div>
    );
};

