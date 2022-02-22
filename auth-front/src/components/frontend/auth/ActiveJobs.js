import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

const ActiveJobs = props => {
    return (
      <div className="activeJobs">
        <div className="activeJobsContainer">
          <span className="activeJobsNum">5</span>
        </div>
      </div>
    );
  };
  
  export default ActiveJobs;