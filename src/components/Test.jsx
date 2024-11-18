import React, { Fragment, useEffect, useState} from "react";

const TestComponent = ({ getItems }) => {

    const [items, setItems] = useState([])
    
    useEffect(() => {
        setItems(getItems())
        console.log('Inside todos..')
    }, [getItems])

    return (
        <Fragment>
            <div className="w-3/4 mx-auto my-3 p-3">
                {items.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
            </div>
        </Fragment>
    );
};

export default TestComponent;
