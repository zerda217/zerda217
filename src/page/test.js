import React, { useEffect } from 'react'
import Question_1 from './question_1';

import styled from 'styled-components'

const Test = ({viewlevel, viewcount, data, dataNumber, sheet, setSheet}) => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 테스트문제";
  }, []);

  return (
    <Wrap>
      <h1>테스트 문제</h1>
      <Question_1 viewlevel={viewlevel} viewcount={viewcount} data={data} dataNumber={dataNumber} sheet={sheet} setSheet={setSheet} />
    </Wrap>
  )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;

export default Test