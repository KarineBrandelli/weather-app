import React, { Fragment } from "react";
import useForecast from "../../hooks/useForecast";

import Header from "../Header";
import Form from "../Form";
import Error from "../Error";
import Loader from "../Loader";
import Forecast from "../Forecast";

import styles from "./Page.module.css";

const Page = () => {
  let { isError, isLoading, forecast, submitRequest, setForecast } = useForecast();
  
  const onSubmit = (value) => {
    submitRequest(value);
  };
  
  const newSearch = () => {
    setForecast(null);
  };

  return (
    <Fragment>
      <Header />
      {!forecast && (
        <div className={`${styles.box} position-relative`}>
          {!isLoading && <Form submitSearch={ onSubmit } />}

          {isError && <Error message={ isError } />}

          {isLoading && <Loader />}
        </div>
      )}
      {forecast && (
        <div className={`${ styles.center }`}>
          {<Forecast forecast={ forecast } />}
          <button
            className={`${ styles.new }`}
            onClick={ newSearch }>
              NEW SEARCH
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Page;
