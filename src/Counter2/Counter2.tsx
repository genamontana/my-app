import React, {ChangeEvent, useEffect, useState} from 'react';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';
import {TheCounterItself} from './TheCounterItself/TheCounterItself';
import s from './Counter2.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {CounterRootState} from '../BLL/store';
import {incClickAC, InitState, onChangeMaxAC, onChangeStartAC, onClickAC, resClickAC} from '../BLL/counter-reducer';

export const Counter2 = () => {

    const dispatch = useDispatch();

    const counter = useSelector<CounterRootState, InitState>(state => state.counter)

    const incClick = () => {
        dispatch(incClickAC())
        //setNum(num => num + 1)
    }
    const resClick = () => {
        dispatch(resClickAC())
        //setNum(start)
    }
    const onClick = () => {
        dispatch(onClickAC())
        // setNum(start)
        // setError('')
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeStartAC(Number(e.currentTarget.value)))
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxAC(+e.currentTarget.value))
        // setMax(Number(e.currentTarget.value))
        // setError(+e.currentTarget.value < start ? 'invalid value' : 'set')
    }


    return (
        <div className={s.containerCounter2}>
            <SettingsCounter onClick={onClick}
                             start={counter.start}
                             max={counter.max}
                             onChangeStart={onChangeStart}
                             onChangeMax={onChangeMax}
            />
            <TheCounterItself max={counter.max}
                              num={counter.num}
                              inc={incClick}
                              res={resClick}
                              error={counter.error}
            />
        </div>
    );
};
