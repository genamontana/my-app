import React from 'react';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';
import {TheCounterItself} from './TheCounterItself/TheCounterItself';
import s from './Counter2.module.css'

export const Counter2 = () => {
    return (
        <div className={s.containerCounter2}>
            <SettingsCounter/>
            <TheCounterItself/>
        </div>
    );
};
