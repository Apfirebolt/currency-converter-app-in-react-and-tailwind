import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import LoaderComponent from "../components/Loader";
import ErrorComponent from "../components/Error";

const CurrencyCompare = () => {
  const [currencyOne, setCurrencyOne] = useState("Select Currency One");
  const [currencyTwo, setCurrencyTwo] = useState("Select Currency Two");

  const getCurrencies = async () => {
    const currencies = await axiosInstance.get(`currencies.json`);
    console.log(currencies);
    return currencies.data;
  };

  const { isLoading, error, data, isPreviousData } = useQuery(
    ["currencies"],
    () => getCurrencies(),
    { keepPreviousData: true }
  );

  const compareCurrencyAction = async () => {
    console.log(currencyOne, currencyTwo)
    let link = `currencies/${currencyOne}/${currencyTwo}.json`
    
    const data = await axiosInstance.get(link);
    console.log('Compare data ', data);
    
  }

  return (
    <Fragment>
      <div className="w-3/4 mx-auto my-3 p-3 bg-blue-300">
        <h4 className="text-center text-4xl text-primary">
          COMPARE CURRENCIES
        </h4>
        <div className="flex justify-center items-center my-3 p-3 w-full">
          <Listbox value={currencyOne} onChange={setCurrencyOne}>
            <div className="relative mt-1 mx-2">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">Select First Currency</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data &&
                    Object.keys(data).map((item, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={item}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {data[item]}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

          <Listbox value={currencyTwo} onChange={setCurrencyTwo}>
            <div className="relative mt-1 mx-2">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">Select Second Currency</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data &&
                    Object.keys(data).map((item, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={item}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {data[item]}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <div className="ml-3 text-center">
            <button
              type="button"
              className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
              onClick={() => compareCurrencyAction()}
            >
              Compare
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CurrencyCompare;
