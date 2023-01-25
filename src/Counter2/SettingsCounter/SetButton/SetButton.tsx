import React from 'react';
import s from './SetButton.module.css'

type SetButtonType = {
    onClick: () => void
}

export const SetButton = (props: SetButtonType) => {
    return <div className={s.setButtonContainer}>
        <button className={s.setButtonButton}
                onClick={props.onClick}
        >
            SET
        </button>
    </div>
};
