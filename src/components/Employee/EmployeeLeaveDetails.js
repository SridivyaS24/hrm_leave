import React from "react";
import {  Button } from 'react-bootstrap';

export default function EmployeeLeaveDetails(){
    return(

        <div id="table-outer-div-scroll">
            <h2 id="role-title">Leave Application</h2>
            <Button
          variant="primary"
          id="add-button"
          onClick={this.props.onAddLeaveApplicationEmp}
        >
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </Button>

        </div>
    )
}
