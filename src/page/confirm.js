import React, { useEffect } from 'react'

const Confirm = () => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 답안제출완료";
  }, []);

  return (
    <div>
      <h1>
        수고하셨습니다.
      </h1>
    </div>
  )
}

export default Confirm