import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/Loader";
import ErrorComponent from "../components/Error";

const Home = () => {
  const { name } = useParams();
  const getCompareCurrencies = async () => {
    const currencies = await axiosInstance.get(`currencies/${name}.json`);
    return currencies.data[name];
  };

  const { isLoading, error, data, isPreviousData } = useQuery(
    ["compareCurrencies"],
    () => getCompareCurrencies(),
    { keepPreviousData: true }
  );

  return (
    <Fragment>
      <div className="w-3/4 mx-auto my-3 p-3 bg-blue-300">
        <h4 className="text-center text-4xl text-primary">CURRENCY DETAIL</h4>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Currency Code
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Relative Value
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
                               {item}
                              </p>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap text-center">
                                {data[item]}
                              </p>
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
