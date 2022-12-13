import React, {useState} from 'react';


export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementClick = () => {
        setCounter(Math.min(counter + 1, 5))
    }
    const reset = () => setCounter(0)


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            width: '100%',
            height: '100%',
        }}>
            <h1>COUNTER</h1>
            <div className={counter >= 5 ? 'red' : ''}
                 style={{
                     fontSize: '60px',
                 }}>
                {counter}
            </div>
            <div>
                <button style={{
                    fontSize: '40px',
                    marginRight: '5px',
                    backgroundColor: 'green',
                    borderRadius: '10%',
                    width: '120px',
                    color: 'white',
                }}
                        onClick={incrementClick}>+
                </button>
                <button style={{
                    fontSize: '40px',
                    marginLeft: '5px',
                    backgroundColor: 'red',
                    borderRadius: '10%',
                    width: '120px',
                    color: 'white',
                }}
                        onClick={reset}>Reset
                </button>
            </div>
        </div>
    );
};

