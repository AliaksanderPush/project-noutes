import React from "react";
import { SingleCard } from "..";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { Spiner } from "..";
import { loadNotes } from "../../requests/Requests";
import "./CardList.scss";

export const CardList = ({ handleDeleteNoute, handleEditNoutes }) => {
  const { data, isLoading, error } = useQuery("posts", loadNotes);
  if (isLoading) return <Spiner />;
  if (error) return <div className="error">{error.toString()}</div>;

  return (
    <Row className="justify-content-center">
      <Col md="auto">
        {data?.map((item) => {
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
