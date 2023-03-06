import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';


const rootReducer = combineReducers({
    counter: counterReducer,
})

export type CounterRootState = ReturnType<typeof rootReducer>

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const store = legacy_createStore(rootReducer,loadState())

export const saveState = (state:CounterRootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter', serializedState);
    } catch {
        // ignore write errors
    }
};


store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});