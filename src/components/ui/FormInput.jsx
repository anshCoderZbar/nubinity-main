import React from "react";

import "styles/Contact.css";

export const FormInput = (props) => {
  return (
    <input
      className={`form-control ${props?.extra}`}
      placeholder={props?.placeholder}
      {...props}
    />
  );
};
