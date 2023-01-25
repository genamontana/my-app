import React from 'react';
import {DisplayCounter} from './DisplayCounter/DisplayCounter';
import {ButtonsCounter} from './ButtonsCounter/ButtonsCounter';

export const TheCounterItself = () => {
    return (
        <div>
            <DisplayCounter/>
            <ButtonsCounter/>
        </div>
    );
};

