import React from 'react';
import s from './DisplaySettings.module.css'

export const DisplaySettings = () => {
    return (
        <div className={s.displayBody}>
            <div className={s.valueBody}>
                <p>Max value:</p>
                <input type="number"/>
            </div>
            <div className={s.valueBody}>
                <p>Start value:</p>
                <input type="number"/>
            </div>
        </div>
    );
};
