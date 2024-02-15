import React, { useEffect } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'

const Pre_confirm = () => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 제출최종확인";
  }, []);
  const navigate = useNavigate();

  const onClickYes = () => {
    navigate('/confirm');
  }

  const onClickNo = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>
        최종 확인
      </h1>
      <div>시험을 정말 종료하시겠습니까?</div>
      <button onClick={onClickYes}>예</button>
      <button onClick={onClickNo}>아니요</button>
    </div>
  )
}

export default Pre_confirm