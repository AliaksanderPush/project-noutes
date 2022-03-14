import React from "react";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import { Row, Col, Button } from "react-bootstrap";
import { Spiner } from "..";
import { CardList } from "..";
import {
  addNotes,
  deleteNotes,
  loadNotes,
  updateNotes,
} from "../../requests/Requests";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Form.scss";

export const Form = () => {
  const [inpValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [editId, setEditId] = useState("");

  const closeAfter = () =>
    toast.success("7 Kingdoms", {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });

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

  const handleEditNoutes = (id) => {
    const copyData = [...data];
    const editNoute = copyData.find((item) => item.id === id);
    const { title, text } = editNoute;
    clearState();
    setInputValue(title);
    setTextValue(text);
    setEditId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editId) {
      const id = uniqid();
      const noute = {
        id,
        title: inpValue,
        text: textValue,
      };
      addNotes(noute).then((res) => setData([...data, res.data]));
      clearState();
      closeAfter();
    } else {
      const copyData = [...data];
      const index = copyData.findIndex((item) => item.id === editId);
      copyData[index].title = inpValue;
      copyData[index].text = textValue;
      setData(copyData);
      updateNotes(editId, copyData[index]);
      clearState();
    }
  };

  const handleDeleteNoute = (id) => {
    deleteNotes(id);
    const copyData = [...data];
    const newData = copyData.filter((item) => {
      return item.id !== id;
    });
    setData(newData);
  };

  function clearState() {
    setInputValue("");
    setTextValue("");
    setEditId("");
  }

  useEffect(() => {
    handleLoadNoutes();
  }, []);

  return (
    <>
      {load ? <Spiner /> : null}
      <form className="mb-3" onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={6} mt={4} md="auto" className="colona">
            <p className=" mb-0">Заметка:</p>
            <input
              className="main_input"
              type="text"
              onChange={handleInputChange}
              value={inpValue}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6} md="auto">
            <p className="mb-0">Текст:</p>
            <textarea
              className="main_textaria"
              onChange={handleTextChange}
              value={textValue}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sx={6} mt={3} md="auto">
            <Button as="input" type="submit" value="Добавить" />{" "}
          </Col>
        </Row>
      </form>

      <CardList
        data={data}
        handleDeleteNoute={handleDeleteNoute}
        handleEditNoutes={handleEditNoutes}
      />
    </>
  );
};
