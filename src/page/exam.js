import React, { useEffect } from 'react'

const Exam = () => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 모의문제";
  }, []);

  return (
    <div>모의 문제</div>
  )
}

export default Exam