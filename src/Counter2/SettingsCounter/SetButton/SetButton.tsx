import React from 'react';
import s from './SetButton.module.css'

export const SetButton = () => {
    return <div className={s.setButtonContainer}>
        <button className={s.setButtonButton}>
            SET
        </button>
    </div>
};
