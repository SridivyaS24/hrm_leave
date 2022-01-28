
import React, { useState } from 'react';
import { Card, Container, Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function EmpLeaveAppForm() {

  // ====== Declaring initial values of FormData ====== 
  const initialValues = {
    leavetype: "",
    fromDate: "",
    toDate: "",
    reasonforLeave: "",
    status: "",
  };

  const [values, setValues] = useState(initialValues);

  // ====== Events to collect FormData ======
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values, [name]: value
    })
  }

  // ====== Events for Submit Button ======
  const submitData = e => {
    e.preventDefault();
    console.log("FormData", values);
    setValues({
      leavetype: "",
      fromDate: "",
      toDate: "",
      reasonforLeave: "",
      status: "",
    });
  }



  return (
    <div>
      <Container fluid="md">
        <Card style={{borderRadius:"15px"}}>
          <Card.Header as="h5" align="left">Add Leave Application</Card.Header>
          <br /><br />
          <Form >
            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                Leave Type
              </Form.Label>
              <Col sm={8}>
                <Form.Control as="select" name='leavetype' required onChange={handleInputChange}>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Sick Leave">Sick Leave </option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Privilege Leave">Privilege Leave</option>

                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontal" >
              <Form.Label column sm={2}>
                From Date
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="date" name='fromDate' required onChange={handleInputChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                To Date
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="date" name='toDate' required onChange={handleInputChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                Reason for Leave
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="Reason" placeholder="Reason" name='reasonforLeave' required onChange={handleInputChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                Leave Status
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="Leave status" placeholder="leave status" required name="status" onChange={handleInputChange} />
              </Col>
            </Form.Group>


            <Form.Group as={Row} id="form-cancel-button">
              <Col md={6} >
                <Button variant="primary" onClick={submitData}>Submit</Button>{' '}
                <Button variant="secondary" type="reset">Cancel</Button>
                </Col>
            </Form.Group>

          </Form>

        </Card>
      </Container>
    </div>
  );
}


