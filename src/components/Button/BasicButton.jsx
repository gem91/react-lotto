import React from "react";
import styles from "./Button.module.css";

const BasicButton = ({ onPopup, title }) => {
   return (
      <button className={styles.blueButton} type="button" onClick={onPopup}>
         {title}
      </button>
   );
};

export default BasicButton;
