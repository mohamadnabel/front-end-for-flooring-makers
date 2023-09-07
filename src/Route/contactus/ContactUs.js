import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function ContactUs() {
  // state for the form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // state for the form validation
  const [validated, setValidated] = useState(false);

  // state for the form submission
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // handle the change of the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  // handle the submit of the form
  const handleSubmit = (e) => {
    // prevent the default browser behavior
    e.preventDefault();

    // get the form element from the event
    const form = e.currentTarget;

    // check if the form is valid
    if (form.checkValidity() === false) {
      // if not, set the validated state to true to show the validation feedback
      setValidated(true);
    } else {
      // if yes, set the loading state to true and reset the error state
      setLoading(true);
      setError(null);

      // simulate an async request to submit the form data
      setTimeout(() => {
        // reset the loading state
        setLoading(false);

        // simulate a success or failure response
        const success = Math.random() > 0.5;

        if (success) {
          // if success, set the submitted state to true and reset the form inputs and validation state
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setValidated(false);
        } else {
          // if failure, set the error state to a message and reset the submitted state
          setError("Something went wrong. Please try again later.");
          setSubmitted(false);
        }
      }, 2000);
    }
  };
  // use an effect to hide the alert after 3 seconds
  // useEffect(() => {
  //   // check if the submitted state is true
  //   if (submitted) {
  //     // create a timeout function that sets the submitted state to false after 3 seconds
  //     const timer = setTimeout(() => {
  //       setSubmitted(false);
  //     }, 3000);

  //     // return a cleanup function that clears the timeout
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [submitted]); // pass submitted as a dependency

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-4">Contact Us</h1>
          <p className="text-center mb-3">
            Have a question or feedback? We'd love to hear from you!
          </p>
          {submitted && (
            <Alert variant="success">Your message has been sent!</Alert>
          )}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={message}
                onChange={handleChange}
                rows={5}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
