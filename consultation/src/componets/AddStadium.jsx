import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const initialStadiumData = {
  id: 1,
  name: "",
  rows: 0,
  columns: 0,
  numberOfSeats: 0,
};

function AddStadium() {
  const [stadiumData, setStadiumData] = useState(initialStadiumData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStadiumData({
      ...stadiumData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", stadiumData);
    
  };

  return (
    <div className="container">
      <h2>Add Stadium</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 Formclass" controlId="formName">
          <Form.Label className="Titles">Stadium Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter stadium name"
            name="name"
            value={stadiumData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formRows">
          <Form.Label className="Titles">Number of Rows</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of rows"
            name="rows"
            value={stadiumData.rows}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formColumns">
          <Form.Label className="Titles">Number of Columns</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of columns"
            name="columns"
            value={stadiumData.columns}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formNumberOfSeats">
          <Form.Label className="Titles">Number of Seats</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of seats"
            name="numberOfSeats"
            value={stadiumData.numberOfSeats}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="ButtonSubmit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddStadium;
