import React, { Fragment } from "react";
import useForecast from "../../hooks/useForecast";

import Header from "../Header";
import Form from "../Form";
import Error from "../Error";
import Loader from "../Loader";
import Forecast from "../Forecast";
import styles from "./Page.module.css";

const Page = () => {
  const { isError, isLoading, forecast } = useForecast();

  return (
    <Fragment>
      <Header />
      <div className={styles.box}>
        {!isLoading && <Form />}

        {isError && <Error />}

        {isLoading && <Loader />}
      </div>
        {forecast && <Forecast />}
    </Fragment>
  );
};

export default Page;
