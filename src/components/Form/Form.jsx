import React from "react";
import { useState, useEffect } from "react";
import { getTag } from "../../helpers/getTag";
import uniqid from "uniqid";
import ReactHtmlParser from "react-html-parser";
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
  const [tag, setTag] = useState([]);
  const [serchTag, setSearchTag] = useState('');

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

  const handleSearchTag = (e) => {
    setSearchTag(e.target.value);
  }

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
      const tags = searchTag(textValue);
      const noute = {
        id,
        title: inpValue,
        text: textValue,
        tag: tags || " "
      };
      setData([...data, noute]); 
      addNotes(noute); 
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

  const  searchTag = (text) => {
     let arr = text.split(" ");
     let array = [];
     for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === "#") {
        array.push(arr[i]);
      }
    }
    if (!array.length) return;
    for(const word of array) {
      setTag([...tag, word]);
    }
       return array;
  }

 const  seachTag = () => {
    if (serchTag && data.length ) {
      console.log('search>>>',serchTag );
      console.log('data>>>', data);
      const noute = data.find(item => getTag(item.tag, serchTag));
      console.log('noute>>>', noute);
    }
 }


  function clearState() {
    setInputValue("");
    setTextValue("");
    setEditId("");
  }

  useEffect(() => {
    handleLoadNoutes();
  }, []);
 
  if (!data) return <div/>

  return (
    <>
   {load ? <Spiner /> : null}
   <Row className="justify-content-center">
     <Col className="_left_col">
       <p className=" mb-0">Поиск по тэгу:</p>
       <input type='text' value={serchTag} onChange={handleSearchTag} />
       <Button className="mt-2" variant="primary" size="sm" onClick={seachTag} >
      Найти
    </Button>{' '}
     </Col>
      <Col xs={6} mt={4} md="auto" className="_midle_col">
      <form className="mb-3" onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col>
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
      </Col>
      <Col className="_right_col">
        {data?.map((item, i) => {
          return <p key={item + i} >{ Array.isArray(item.tag) ? item.tag.join(',') : item.tag}</p>
        })}
      </Col>
   </Row>
        
      <CardList
        data={data}
        handleDeleteNoute={handleDeleteNoute}
        handleEditNoutes={handleEditNoutes}
      />
    </>
  );
}
