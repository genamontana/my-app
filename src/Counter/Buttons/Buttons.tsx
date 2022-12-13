import React from 'react';
import s from './Buttons.module.css'

 type ButtonsType = {
    inc: () => void
    res: () => void
     counter:number
}
export const Buttons = (props:ButtonsType) => {
    return (
        <div>
            <button disabled={props.counter===5} className={s.button_green}
                    onClick={props.inc}>+
            </button>
            <button className={s.button_red}
                    onClick={props.res}>Reset
            </button>
        </div>
    );
};