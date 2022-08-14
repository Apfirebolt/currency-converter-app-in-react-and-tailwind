import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/Loader";
import ErrorComponent from "../components/Error";

const Home = () => {
  const navigate = useNavigate();
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

  const compareCurrency = (symbol) => {
    navigate(`/detail/${symbol}`);
  }

  return (
    <Fragment>
      <div className="w-3/4 mx-auto my-3 p-3 bg-blue-300">
        <h4 className="text-center text-4xl text-primary">CURRENCIES</h4>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Currency Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Currency Code
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      Object.keys(data).map((item, index) => (
                        <tr key={index}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap text-center">
                                {data[item]}
                              </p>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap text-center">
                                {item}
                              </p>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                            <div className="ml-3 text-center">
                              <button
                                type="button"
                                className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                onClick={() => compareCurrency(item)}
                              >
                                Compare
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
