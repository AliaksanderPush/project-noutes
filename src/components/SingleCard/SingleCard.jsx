import React from "react";
import { Card, Button, Stack } from "react-bootstrap";
import { formatDateTime } from "../../helpers/getDate";
import "./SingleCard.scss";

export const SingleCard = ({ info, handleDeleteNoute }) => {
  const dt = new Date();
  const date = formatDateTime(dt);
  const { id, title, text } = info;

  return (
    <>
      <Card border="dark" className="mb-3">
        <Card.Header as="h5">{date}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Button variant="outline-dark" size="sm">
              Редактировать
            </Button>
            <div />
            <Button
              onClick={() => handleDeleteNoute(id)}
              variant="outline-danger"
              size="sm"
            >
              Удалить
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};
