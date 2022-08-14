import React, { Fragment } from "react";

const FooterComponent = () => {
  return (
    <Fragment>
      <footer
        className="bg-red-700
             text-2xl text-white text-center
             border-t-4
             fixed
             inset-x-0
             bottom-0
             p-4"
      >
        <p>Copyright @2022 Currency Converter</p>
      </footer>
    </Fragment>
  );
};

export default FooterComponent;
