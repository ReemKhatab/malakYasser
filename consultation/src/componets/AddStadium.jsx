import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import PopUpTwo from "./PopUpTwo";

const initialStadiumData = {
  stadiumname: "",
  rows: 0,
  columns: 0,
  //numberofseats: 0,
};

function AddStadium() {
  const [stadiumData, setStadiumData] = useState(initialStadiumData);
  const [modalShow, setModalShow] = React.useState(false);
  const [validated, setValidated] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStadiumData({
      ...stadiumData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      setModalShow(true);
      console.log("Submitted:", stadiumData);

      axios
        .post("http://localhost:8808/EFA_manager/add_stadium", {
          stadiumname: stadiumData.stadiumname,
          numberofseats: stadiumData.rows * stadiumData.columns,
          rows: stadiumData.rows,
          columns: stadiumData.columns,
        })
        .then((response) => {
          console.log("testttt");
          console.log(response.data);
        });
    }
    setValidated(true);
  };

  return (
    <div className="container">
      <h2>Add Stadium</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3 Formclass" controlId="formName">
          <Form.Label className="Titles">Stadium Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter stadium name"
            name="stadiumname"
            value={stadiumData.stadiumname}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid" >
            required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formRows">
          <Form.Label className="Titles">Number of Rows</Form.Label>
          <Form.Control
            type="number"
            min='1'
            placeholder="Enter number of rows"
            name="rows"
            value={stadiumData.rows}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid" >
            required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formColumns">
          <Form.Label className="Titles">Number of Columns</Form.Label>
          <Form.Control
            type="number"
            min='1'
            placeholder="Enter number of columns"
            name="columns"
            value={stadiumData.columns}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            required
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="ButtonSubmit" variant="primary" type="submit">
          Submit
        </Button>
        <div>
          <PopUpTwo
            show={modalShow}
            onHide={() => setModalShow(false)}
            value={stadiumData.rows * stadiumData.columns}
          />
        </div>
      </Form>
    </div>
  );
}

export default AddStadium;
