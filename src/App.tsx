import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {Counter2} from './Counter2/Counter2';
import {useDispatch} from 'react-redux';
//import {setInitializeLCValues} from './BLL/counter-reducer';

function App() {

    //const dispatch = useDispatch()


    //
    // useEffect(() => {
    //  dispatch(setInitializeLCValues({}))
    // }, [dispatch])

    return (
        <div className="App">
            <Counter/>
            <Counter2/>
        </div>
    );
}

export default App;
