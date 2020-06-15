import React from "react";
// import PropTypes from "prop-types";
import classnames from "classnames";

export default function InputGroup({
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
}) {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        className={classnames("form-style", {
          isvalid: error.noError === false ? true : false,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error.noError === false && (
        <div className="invalid-message">{error.message}</div>
      )}
    </div>
  );
}
