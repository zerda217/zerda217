import React, { useEffect } from 'react'

import styled from 'styled-components';

const Confirm = ({examData, testData, dataCategory, sheet}) => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 답안제출완료";
  }, []);

  console.log('!! :', dataCategory)

  // const choiceData = () => {
  //   if (lastPathComponent == 'test') {
  //     return testData
  //   } else if (lastPathComponent == 'exam') {
  //     return examData
  //   } else {
  //     return null
  //   }
  // }

  // const data = choiceData()

  return (
    <div>
      <h1>
        수고하셨습니다.
      </h1>

    </div>
  )
}

export default Confirm