import React from 'react'
import Omr from './omr'

import styled from 'styled-components'

const solve = ({testData, examData, sheet, setSheet}) => {
  return (
    <Wrap>
        <h2>사이드</h2>
        <Omr examData={examData} testData={testData} sheet={sheet} setSheet={setSheet} />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
//   justify-content: center;
  align-items: center;
//   width: 40vh;
  height: 90vh;
//   padding: 1vh;
//   border: 1px solid red;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #FFF;
  padding: 8px;
  text-align: center;
  background-color: #FFF;
`;

const Td = styled.td`
  border: 1px solid #FFF;
  padding: 8px;
  text-align: center;
`;

export default solve