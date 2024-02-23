import React, { useEffect } from 'react';

import useStore from './store';
import styled from 'styled-components';

const OMRTable = () => {
  const { testData, examData, sheet, setSheet } = useStore();
  const dataType = useStore((state) => state.dataType);

  const choiceData = () => {
    if (dataType == 'test') {
      return testData
    } else if (dataType == 'exam') {
      return examData
    } else {
      return null
    }
  }

  const data = choiceData()

  useEffect(() => {
    const setSheet(() => data ? Array.from({ length: 88 }, (_, index) => ({ [index + 1]: 0 })): []);
  }, [data])

  const numbers = data ? Array.from({ length: 88 }, (_, index) => index + 1) : [];

  const optionNumbers = [{1: '①'}, {2: '②'}, {3: '③'}, {4: '④'}, {5: '⑤'}]

  const handleClick = (number) => (value) => {
  
    const updatedSheet = [...sheet];
    updatedSheet[number - 1] = { [number]: value };
    setSheet(updatedSheet);
  };

  console.log('sheet: ', sheet)
  
  return (
    <Table>
      <tbody>
      {basicSheet.map((sheetItem) => (
  <tr key={Object.keys(sheetItem)[0]}> {/* Use Object.keys(sheetItem)[0] to get the question number */}
    <Cell><b>{Object.keys(sheetItem)[0]}.</b></Cell>
    {optionNumbers.map((option) => (
      <Cell key={Object.keys(option)[0]} onClick={() => handleClick(Object.keys(sheetItem)[0])(parseInt(Object.keys(option)[0], 10))}>
        {sheet[Object.keys(sheetItem)[0] - 1] && sheet[Object.keys(sheetItem)[0] - 1][Object.keys(sheetItem)[0]] === parseInt(Object.keys(option)[0], 10) ? '●' : Object.values(option)[0]}
      </Cell>
    ))}
  </tr>
))}
        {/* {basicSheet.map((questionNumber) => (
          <tr key={questionNumber}>
            <Cell><b>{questionNumber}.</b></Cell>
            {optionNumbers.map((option) => (
              <Cell key={Object.keys(option)[0]} onClick={() => handleClick(questionNumber)(parseInt(Object.keys(option)[0], 10))}>
                {sheet[questionNumber - 1] && sheet[questionNumber - 1][questionNumber] === parseInt(Object.keys(option)[0], 10) ? '●' : Object.values(option)[0]}
              </Cell>
            ))}
          </tr>
        ))} */}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  background: #FFF;
  color: #000;
`;

const Cell = styled.td`
  border: 1px solid #000;
  padding: 3%;
`;

export default OMRTable;
