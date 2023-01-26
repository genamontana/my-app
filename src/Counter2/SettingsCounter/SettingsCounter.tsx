import React, {ChangeEvent} from 'react';
import {DisplaySettings} from './DisplaySettings/DisplaySettings';
import {SetButton} from './SetButton/SetButton';
import s from './SettingsCounter.module.css'

type SettingsCounterType = {
    onClick: () => void
    start: number
    max: number
    onChangeStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SettingsCounter = (props: SettingsCounterType) => {
    return (
        <div className={s.settings}>
            <DisplaySettings onChangeStart={props.onChangeStart}
                             onChangeMax={props.onChangeMax}
                             start={props.start}
                             max={props.max}
            />
            <SetButton onClick={props.onClick}/>
        </div>
    );
};
