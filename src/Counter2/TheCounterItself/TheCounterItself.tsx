import React from 'react';
import {DisplayCounter} from './DisplayCounter/DisplayCounter';
import {ButtonsCounter} from './ButtonsCounter/ButtonsCounter';
import s from './TheCounterItself.module.css'

type TheCounterItselfType = {
    num: number
    inc: () => void
    res: () => void
}

export const TheCounterItself = (props: TheCounterItselfType) => {
    return (
        <div className={s.theCounterContainer}>
            <DisplayCounter num={props.num}/>
            <ButtonsCounter inc={props.inc}
                            res={props.res}
            />
        </div>
    );
};

