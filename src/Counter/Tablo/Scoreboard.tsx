import React from 'react';
import s from './Scoreboard.module.css'

type ScoreboardType = {
    counter: number
}

export const Scoreboard = (props: ScoreboardType) => {
    return (
        <div className={props.counter === 5 ? s.red : s.scoreboard}>
            {props.counter}
        </div>
    );
};

