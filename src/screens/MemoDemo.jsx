import React, { Fragment, useState, useMemo } from "react";

const MemoDemo = () => {

    const [counter, setCounter] = useState(0)
    const [highCounter, setHighCounter] = useState(1)

    const incrementCounter = () => {
        console.log('Increment counter called..')
        setCounter(counter + 1)
    }

    const fastCounter = () => {
        console.log('Fast increment counter called..')
        setHighCounter(highCounter * 2)
    }

    const returnFastCounter = useMemo(() => {
        console.log('Returning high counter')
        return highCounter * 2
    }, [highCounter])


    return (
        <Fragment>
            <h1>
                Memo Demo Page {counter} - {highCounter}
            </h1>
            <button onClick={() => incrementCounter()}>
                Click Counter
            </button>
            <button onClick={() => fastCounter()}>
                Fast Counter
            </button>

            <h2>{returnFastCounter}</h2>
        </Fragment>
    );
};

export default MemoDemo;
