import React from "react";
import { Spinner } from "react-bootstrap";
import "./Spiner.scss";

export const Spiner = () => {
  return (
    <div className="_spiner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
