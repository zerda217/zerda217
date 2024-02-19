import React from 'react'
import Omr from './omr'

import styled from 'styled-components'

const Solve = ({testData, examData, sheet, setSheet}) => {

  return (
    <Wrap>
        <h2>답지</h2>
        <Omr examData={examData} testData={testData} sheet={sheet} setSheet={setSheet} />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
//   width: 40vh;
  height: 90vh;
//   padding: 1vh;
//   border: 1px solid red;
`;

export default Solve