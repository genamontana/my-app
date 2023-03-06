import React from 'react';
import s from './SetButton.module.css'

type SetButtonType = {
    onClick: () => void
    start: number
    max: number
}

export const SetButton = (props: SetButtonType) => {
    const disabled = props.start < 0 || props.max <= 0

    return <div className={s.setButtonContainer}>
        <button className={s.setButtonButton}
                onClick={props.onClick}
                disabled={disabled}
        >
            SET
        </button>
    </div>
};
