import React from "react";
import { SingleCard } from "..";
import { Row, Col } from "react-bootstrap";
import "./CardList.scss";

export const CardList = ({ data, handleDeleteNoute, handleEditNoutes }) => {
  return (
    <Row className="justify-content-center">
      <Col md="auto">
        {data.length &&
          data.map((item) => {
            return (
              <SingleCard
                key={item.id}
                info={item}
                handleDeleteNoute={handleDeleteNoute}
                handleEditNoutes={handleEditNoutes}
              />
            );
          })}
      </Col>
    </Row>
  );
};
