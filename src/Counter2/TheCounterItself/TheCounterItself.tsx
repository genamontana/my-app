import React from 'react';
import {DisplayCounter} from './DisplayCounter/DisplayCounter';
import {ButtonsCounter} from './ButtonsCounter/ButtonsCounter';
import s from './TheCounterItself.module.css'

export const TheCounterItself = () => {
    return (
        <div className={s.theCounterContainer}>
            <DisplayCounter/>
            <ButtonsCounter/>
        </div>
    );
};

