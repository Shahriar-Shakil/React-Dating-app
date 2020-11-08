import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import styled from "styled-components";
const { Step } = Steps;

const steps = [
  {
    title: "Step 1",
    content: "First-content",
  },
  {
    title: "Step 2",
    content: "Second-content",
  },
  {
    title: "Payment",
    content: "Last-content",
  },
];

const MobileBanking = () => {
  const [current, setcurrent] = useState(0);
  const handleNext = () => {
    setcurrent(current + 1);
  };
  const handlePrev = () => {
    setcurrent(current - 1);
  };
  return (
    <StyledDiv>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
        )}
      </div>
    </StyledDiv>
  );
};

export default MobileBanking;

const StyledDiv = styled.div`
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
`;
