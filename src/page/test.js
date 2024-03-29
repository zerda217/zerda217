import React, { useEffect } from 'react'
import Question_1 from './question_1';

const Test = ({viewLevel, viewCount, data, dataNumber}) => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 테스트문제";
  }, []);

  return (
    <div>
      <h1>테스트 문제</h1>
      <Question_1 viewLevel={viewLevel} viewCount={viewCount} data={data} dataNumber={dataNumber} />
    </div>
  )
}

export default Test