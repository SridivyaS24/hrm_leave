
import React from 'react';
import { Card, Table, Container, Navbar, Nav, Button, ButtonGroup, Form, FormGroup, Stack } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function EmpLeaveAppForm() {

  return (
    <div>
      <Container>
        <Card>
          <Card.Header as="h5" align="left">Leave Application Form </Card.Header>
          <br /><br />
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                Leave Type
              </Form.Label>
              <Col sm={8}>
                <Form.Select aria-label="Default select example">
                  <option>Select Leave Type</option>
                  <option value="1">Sick Leave </option>
                  <option value="2">Casual Leave</option>
                  <option value="3">Privilege Leave</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                From Date
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="date" name='from date' />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                To Date
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="date" name='to date' />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                Reason for Leave
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="Reason" placeholder="Reason" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
              <Form.Label column sm={2}>
                Leave Status
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="Leave status" placeholder="leave status" />
              </Col>
            </Form.Group>

            <Row>
              <Col md={4}><Button variant="primary" >Submit</Button></Col>
              <Col md={{ span: 4, offset: 4 }}><Button variant="secondary">Cancel</Button></Col>
            </Row>

          </Form>

        </Card>
      </Container>
    </div>
  );
}