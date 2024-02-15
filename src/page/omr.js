import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'

import styled from 'styled-components';

const OMRTable = ({testData, examData, sheet, setSheet}) => {
  const location = useLocation();
  const path = location.pathname;
  const lastPathComponent = path.substring(path.lastIndexOf('/') + 1);

  const choiceData = () => {
    if (lastPathComponent == 'test') {
      return testData
    } else if (lastPathComponent == 'exam') {
      return examData
    } else {
      return null
    }
  }

  const data = choiceData()
  const numbers = data ? Array.from({ length: data.length }, (_, index) => index + 1) : [];

  const optionNumbers = [{1: '①'}, {2: '②'}, {3: '③'}, {4: '④'}, {5: '⑤'}]

  const handleClick = (number) => (value) => {
  
    const updatedSheet = [...sheet];
    updatedSheet[number - 1] = { [number]: value };
    setSheet(updatedSheet);
  };
  
return (
  <Table>
    <tbody>
      {numbers.map((questionNumber) => (
        <tr key={questionNumber}>
          <Cell>{questionNumber}.</Cell>
          {optionNumbers.map((option) => (
            <Cell key={Object.keys(option)[0]} onClick={() => handleClick(questionNumber)(parseInt(Object.keys(option)[0], 10))}>
              {sheet[questionNumber - 1] && sheet[questionNumber - 1][questionNumber] === parseInt(Object.keys(option)[0], 10) ? '●' : Object.values(option)[0]}
            </Cell>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
);

  // return (
  //   <Table>
  //     <tbody>
  //       {numbers.map((questionNumber) => (
  //         <tr key={questionNumber}>
  //           <Cell>{questionNumber}.</Cell>
  //           {optionNumbers.map((option) => (
  //             <Cell key={Object.keys(option)[0]}>
  //               {Object.values(option)[0]}
  //             </Cell>
  //           ))}
  //         </tr>
  //       ))}
  //     </tbody>
  //   </Table>
  // );
};

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background: #FFF;
  color: #000;
`;

const Cell = styled.td`
  border: 1px solid #000;
  padding: 10px;
`;

const Checkbox = styled.input`
  display: none;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 1.5vh;
  height: 1.5vh;
  line-height: 1.5vh;
  border: 1px solid #000;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;

  /* 체크됐을 때 동그라미 안에 검은색으로 채우기 */
  &::after {
    content: ${props => props.checked ? '"●"' : '""'};
    // display: block;
    color: black;
  }
`;

export default OMRTable;
