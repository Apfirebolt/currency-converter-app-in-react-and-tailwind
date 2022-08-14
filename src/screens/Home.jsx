import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/Loader";
import ErrorComponent from "../components/Error";

const Home = () => {

  const getCurrencies = async () => {
    const currencies = await axiosInstance.get(`currencies.json`);
    return currencies.data;
  };

  const { isLoading, error, data, isPreviousData } = useQuery(
    ["currencies"],
    () => getCurrencies(),
    { keepPreviousData: true }
  );

  return (
    <Fragment>
      <div className="w-3/4 mx-auto my-3 p-3">
        <h4 className="text-center text-4xl text-primary">CURRENCY CONVERTER</h4>
        <div className="container mx-auto px-4 sm:px-8">
          <p className='text-center text-lg my-3'>
            A currency converter/comparer app which has daily updated data for 150+ currencies of the world including cryptocurrencies
          </p>
          <p className='text-center text-lg my-3'>
            The app is created in React and makes use of the public API <a className='text-blue-700' href="https://github.com/fawazahmed0/currency-api">Currency API</a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
