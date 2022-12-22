import React from "react";
import PropTypes from 'prop-types';

import styles from "./UpcomingDaysForecast.module.css";

const UpcomingDaysForecast = ({ nextdaytemperature, firstImgUrl, firstweekday, twodaystemperature, secondImgUrl, secondweekday }) => (
  <ul className={`${ styles.weekList } d-flex justify-content-between p-0`} >
    <li
      className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`} >
        <img width="45" src={ firstImgUrl } alt="" />
        <div>{ firstweekday }</div>
        <div>{ nextdaytemperature } <small><sup>o</sup>C</small></div>
	  </li>
    <li
      className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`} >
        <img width="45" src={ secondImgUrl } alt="" />
        <div>{ secondweekday }</div>
        <div>{ twodaystemperature } <small><sup>o</sup>C</small></div>
	  </li>
  </ul>
);

UpcomingDaysForecast.propTypes = {
  nextdaytemperature: PropTypes.number.isRequired,
  firstImgUrl: PropTypes.string.isRequired,
  firstweekday: PropTypes.string.isRequired,
  twodaystemperature: PropTypes.number.isRequired,
  secondImgUrl: PropTypes.string.isRequired,
  secondweekday: PropTypes.string.isRequired,
};

export default UpcomingDaysForecast;
