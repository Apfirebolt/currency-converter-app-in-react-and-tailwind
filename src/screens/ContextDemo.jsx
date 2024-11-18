import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import LoaderComponent from "../components/Loader";
import ErrorComponent from "../components/Error";
import AuthContext from "../context/data";
import NestedComponent from "../components/NestedComponent";

const ContextDemo = () => {

    return (
        <Fragment>
            <AuthContext.Provider value={{ status: 'Logged', login: 'Toe' }}>
                <NestedComponent />
            </AuthContext.Provider>
            <div className="w-3/4 mx-auto my-3 p-3">
                <h4 className="text-center text-4xl text-primary">
                    Context Demo
                </h4>
            </div>
        </Fragment>
    );
};

export default ContextDemo;
