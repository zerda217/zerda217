import React, { useEffect } from 'react'

const Exam = () => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 모의문제";
  }, []);

  return (
    <h3>준비 중입니다.</h3>
  )
}

export default Exam