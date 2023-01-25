import React from 'react';
import {DisplaySettings} from './DisplaySettings/DisplaySettings';
import {SetButton} from './SetButton/SetButton';
import s from './SettingsCounter.module.css'

export const SettingsCounter = () => {
    return (
        <div className={s.settings}>
            <DisplaySettings/>
            <SetButton/>
        </div>
    );
};
