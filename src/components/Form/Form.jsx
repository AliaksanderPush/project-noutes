import React from "react";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import { Row, Col, Button } from "react-bootstrap";
import { Spiner } from "..";
import { setNotes, deleteNotes, loadNotes } from "../../requests/Requests";
import { CardList } from "..";

import "./Form.scss";

export const Form = () => {
  const [inpValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [update, setUpdate] = useState([]);

  const handleLoadNoutes = () => {
    loadNotes().then((response) => setData(response.data));
    setLoad(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    const noute = {
      id,
      title: inpValue,
      text: textValue,
    };
    setNotes(noute).then((res) => setUpdate(res));
    setInputValue("");
    setTextValue("");
  };

  const handleDeleteNoute = (id) => {
    deleteNotes(id).then((res) => console.log(res));
  };

  useEffect(() => {
    loadNotes();
  }, [update]);

  useEffect(() => {
    handleLoadNoutes();
  }, []);

  return (
    <>
      {load ? <Spiner /> : null}
      <form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={6} mt={4} md="auto" className="colona">
            <p className=" mb-0">Заметка:</p>
            <input
              className="main_input"
              type="text"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6} md="auto">
            <p className="mb-0">Текст:</p>
            <textarea className="main_textaria" onChange={handleTextChange} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sx={6} mt={3} md="auto">
            <Button as="input" type="submit" value="Добавить" />{" "}
          </Col>
        </Row>
      </form>
      <Row className="justify-content-center">
        <Col xs={4} className="mt-2">
          Название: {inpValue}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={4} className="mb-2">
          Текст: {textValue}
        </Col>
      </Row>
      <CardList data={data} handleDeleteNoute={handleDeleteNoute} />
    </>
  );
};
