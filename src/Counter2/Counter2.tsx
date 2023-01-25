import React, {ChangeEvent, useState} from 'react';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';
import {TheCounterItself} from './TheCounterItself/TheCounterItself';
import s from './Counter2.module.css'

export const Counter2 = () => {
    const [num, setNum] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [error, setError] = useState<string>('')


    const incClick = () => setNum(num + 1)
    const resClick = () => setNum(start)

    const onClick = () => {
        setNum(start)
        setError('')
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
        setError(+e.currentTarget.value === max ? 'invalid value' : 'set')
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
        setError(+e.currentTarget.value < start ? 'invalid value' : 'set')
    }


    return (
        <div className={s.containerCounter2}>
            <SettingsCounter onClick={onClick}
                             onChangeStart={onChangeStart}
                             onChangeMax={onChangeMax}

            />
            <TheCounterItself max={max}
                              num={num}
                              inc={incClick}
                              res={resClick}
                              error={error}
            />
        </div>
    );
};
