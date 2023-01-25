import React from 'react';
import s from './ButtonsCounter.module.css'

export const ButtonsCounter = () => {
    return (
        <div className={s.buttonsCounterBody}>
            <button>INC</button>
            <button>RES</button>
        </div>
    );
};
