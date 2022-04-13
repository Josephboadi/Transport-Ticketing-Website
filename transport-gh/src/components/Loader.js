import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = (props) => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        marginTop: `${props.marginTop}`,
        marginBottom: `${props.marginBottom}`,
      }}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
