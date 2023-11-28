// @ts-nocheck

"use client";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    message: "",
  });

  const [showFormData, setShowFormData] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setShowFormData(true);
  };

  return (
   <div>
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            placeholder="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div>
        {showFormData && (
          <p>
            FirstName: {formData.firstname}
            LastName: {formData.lastname}
            Email: {formData.email}
            Password: {formData.password}
            Message: {formData.message}
          </p>
        )}
      </div>
    </div>
    </div>
  );
}
