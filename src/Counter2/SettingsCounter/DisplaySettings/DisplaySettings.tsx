import React from 'react';
import s from './DisplaySettings.module.css'

export const DisplaySettings = () => {
    return (
        <div className={s.displayBody}>
            <div className={s.valueBody}>
                <p className={s.displayText}>
                    Max value:
                </p>
                <input type="number"
                       className={s.displayInput}/>
            </div>
            <div className={s.valueBody}>
                <p className={s.displayText}>
                    Start value:
                </p>
                <input type="number"
                       className={s.displayInput}/>
            </div>
        </div>
    );
};
