import React, { useEffect, useState } from "react";
import data from "./mock-data.json";

import { Button, Card, Container, Table, Form, Row, Col } from 'react-bootstrap';
import { BsPlus } from "react-icons/bs";



export default function EmployeeLeaveDetails() {

  return (

    <div id="table-outer-div-scroll">
      <Container fluid="md">

        <h4>Leave Details</h4>
        <Card>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Reason for Leave</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((detail) => (
                <tr>
                  <td>{detail.LeaveType}</td>
                  <td>{detail.fromDate}</td>
                  <td>{detail.toDate}</td>
                  <td>{detail.Reasonforleave}</td>
                  <td>{detail.Status}</td>
                  <td>{detail.Edit}</td>
                  <td>{detail.Delete}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card> </Container>



    </div>
  )
}
