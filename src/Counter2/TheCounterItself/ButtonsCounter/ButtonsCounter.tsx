import React from 'react';
import s from './ButtonsCounter.module.css'

export const ButtonsCounter = () => {
    return (
        <div className={s.buttonsCounterBody}>
            <button className={s.counterButton}>
                INC
            </button>
            <button className={s.counterButton}>
                RES
            </button>
        </div>
    );
};
