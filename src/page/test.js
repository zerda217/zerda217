import React, { useEffect } from 'react'

const Test = () => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 테스트문제";
  }, []);

  return (
    <div>테스트 문제</div>
  )
}

export default Test