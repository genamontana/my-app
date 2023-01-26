import React, {ChangeEvent, useEffect, useState} from 'react';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';
import {TheCounterItself} from './TheCounterItself/TheCounterItself';
import s from './Counter2.module.css'

const getValue = (key: string) => {
    const value = localStorage.getItem(key)
    return value ? +value : 0
}

const getError = (key: string) => {
    const error = localStorage.getItem(key)
    return error ? error : ''
}

export const Counter2 = () => {
    const [num, setNum] = useState<number>(getValue('num'))
    const [max, setMax] = useState<number>(getValue('max'))
    const [start, setStart] = useState<number>(getValue('start'))
    const [error, setError] = useState<string>(getError('error'))

    useEffect(() => {
        localStorage.setItem('num', JSON.stringify(num))
        localStorage.setItem('max', JSON.stringify(max))
        localStorage.setItem('start', JSON.stringify(start))
        localStorage.setItem('error',error)
    }, [num, max, start,error])


    const incClick = () => {
        setNum(num => num + 1)
    }
    const resClick = () => {
        setNum(start)
    }

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
                             start={start}
                             max={max}
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
