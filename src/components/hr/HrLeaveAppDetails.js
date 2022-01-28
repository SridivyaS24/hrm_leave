import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';

function HrLeaveAppDetails() {
    return (
        <div>
            <div id="table-outer-div-scroll">
                <Container fluid="md">

                    <h4>Employee Leave Details</h4>
                    <Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>Leave Type</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>Reason for Leave</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                        </Table>
                    </Card>

                </Container>



            </div>
        </div>
    );
}

export default HrLeaveAppDetails;
