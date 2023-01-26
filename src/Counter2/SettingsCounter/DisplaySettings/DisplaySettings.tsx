import React, {ChangeEvent} from 'react';
import s from './DisplaySettings.module.css'

type DisplaySettingsType = {
    onChangeStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    start: number
    max: number
}

export const DisplaySettings = (props: DisplaySettingsType) => {
    return (
        <div className={s.displayBody}>
            <div className={s.valueBody}>
                <p className={s.displayText}>
                    Max value:
                </p>
                <input type="number"
                       className={s.displayInput}
                       onChange={props.onChangeMax}
                       value={props.max}
                />
            </div>
            <div className={s.valueBody}>
                <p className={s.displayText}>
                    Start value:
                </p>
                <input type="number"
                       className={s.displayInput}
                       onChange={props.onChangeStart}
                       value={props.start}
                />
            </div>
        </div>
    );
};
