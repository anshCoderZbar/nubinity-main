import React from "react";

export const Textarea = (props) => {
  return (
    <textarea
      className="form-control"
      placeholder={props?.placeholder}
      rows="5"
      {...props}
    />
  );
};
