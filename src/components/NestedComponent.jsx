import React, { Fragment, useEffect, useContext } from "react";
import AuthContext from "../context/data";

const NestedComponent = () => {

    const auth = useContext(AuthContext);

    useEffect(() => {
        console.log('Inside use effect..', auth.status, auth.login)
    }, [])

    return (
        <Fragment>
            <div className="w-3/4 mx-auto my-3 p-3">
                <p className="text-center text-xl text-primary">
                    Context Demo
                </p>
            </div>
        </Fragment>
    );
};

export default NestedComponent;
