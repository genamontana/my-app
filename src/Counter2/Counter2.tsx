import React, {useState} from 'react';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';
import {TheCounterItself} from './TheCounterItself/TheCounterItself';
import s from './Counter2.module.css'

export const Counter2 = () => {
    const [num,setNum] = useState(0)

    const incClick = () => setNum(num + 1)
    const resClick = () => setNum(0)

    return (
        <div className={s.containerCounter2}>
            <SettingsCounter/>
            <TheCounterItself num={num}
                              inc={incClick}
                              res={resClick}
            />
        </div>
    );
};
