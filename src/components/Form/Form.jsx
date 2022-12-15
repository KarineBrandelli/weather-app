import React from "react";

import styles from "./Form.module.css";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} form-control`}
        placeholder="Search for location"
        required />

      <button type="submit" className={styles.button}>
        SEARCH
      </button>
    </form>
  );
};

export default Form;
