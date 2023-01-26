import React, {ChangeEvent, useState} from 'react';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';
import {TheCounterItself} from './TheCounterItself/TheCounterItself';
import s from './Counter2.module.css'

export const Counter2 = () => {
    const [num, setNum] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [error, setError] = useState<string>('')


    const incClick = () => {
        localStorage.setItem('numCounter', JSON.stringify(num + 1))
        let valueAsString = localStorage.getItem('numCounter')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setNum(newValue)
        }
    }
    const resClick = () => {
        setNum(start)
        localStorage.removeItem('numCounter')
    }

    const onClick = () => {
        setNum(start)
        setError('')
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('startValue', e.currentTarget.value)
        localStorage.getItem('startValue')
        setStart(Number(e.currentTarget.value))
        setError(+e.currentTarget.value === max ? 'invalid value' : 'set')
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('maxValue', e.currentTarget.value)
        localStorage.getItem('maxValue')
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
