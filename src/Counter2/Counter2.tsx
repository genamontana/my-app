import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';
import {TheCounterItself} from './TheCounterItself/TheCounterItself';
import s from './Counter2.module.css'

const getValue = (key: string) => {
    const value = localStorage.getItem(key)
    return value ? +value : 0
}

export const Counter2 = () => {
    const [num, setNum] = useState<number>(getValue('num'))
    const [max, setMax] = useState<number>(getValue('max'))
    const [start, setStart] = useState<number>(getValue('start'))
    const [error, setError] = useState<string>('')

    useEffect(() => {
        localStorage.setItem('num', JSON.stringify(num))
        localStorage.setItem('max', JSON.stringify(max))
        localStorage.setItem('start', JSON.stringify(start))
        /*localStorage.setItem('error',error)*/
    }, [num, max, start])

/*    useLayoutEffect(() => {
        const lsnum = localStorage.getItem('num');
        const lsmax = localStorage.getItem('max')
        const lsstart = localStorage.getItem('start')
        const lserror = localStorage.getItem('error')
        lsnum && setNum(+lsnum)
        lsmax && setNum(+lsmax)
        lsstart && setNum(+lsstart)
    }, [])*/


    const incClick = () => {
        setNum(num => num + 1)
        /*localStorage.setItem('numCounter', JSON.stringify(num))*/
        /*      let valueAsString = localStorage.getItem('numCounter')
              if (valueAsString) {
                  let newValue = JSON.parse(valueAsString)
                  setNum(newValue)
              }*/
    }
    const resClick = () => {
        setNum(start)
        /*localStorage.removeItem('numCounter')*/
    }

    const onClick = () => {
        setNum(start)
        setError('')
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        /*   localStorage.setItem('startValue', e.currentTarget.value)
           localStorage.getItem('startValue')*/
        setStart(Number(e.currentTarget.value))
        setError(+e.currentTarget.value === max ? 'invalid value' : 'set')
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        /* localStorage.setItem('maxValue', e.currentTarget.value)
         localStorage.getItem('maxValue')*/
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
