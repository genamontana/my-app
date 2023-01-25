import React from 'react';
import s from './ButtonsCounter.module.css'

type ButtonsCounterType = {
    inc: () => void
    res: () => void
}

export const ButtonsCounter = (props:ButtonsCounterType) => {
    return (
        <div className={s.buttonsCounterBody}>
            <button className={s.counterButton}
                    onClick={props.inc}
            >
                INC
            </button>
            <button className={s.counterButton}
                    onClick={props.res}
            >
                RES
            </button>
        </div>
    );
};
