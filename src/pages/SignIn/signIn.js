import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/feature/userSlice'
import styled from 'styled-components'

const SIGN_IN = gql`
  query signIn($name: String!, $password:String!) {
    signIn(name: $name, password: $password)
  }
`

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({ name: "", password: "" });
  const [confirm, setConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {loading, data} = useQuery(SIGN_IN, {
    skip: confirm === false,
    fetchPolicy: "no-cache",
    variables: {
      name: userInfo.name,
      password: userInfo.password
    }
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSignin = () => {
    setConfirm(true)
  };

  if (loading) {
    setTimeout(() => setConfirm(false), 1000)
  };

  if (data?.signIn.message === "로그인 성공") {
    setConfirm(false)
    dispatch(login(data.signIn.user))
    setUserInfo({ name: "", password: "" })
    navigate('/todos')
  } else if (data?.signIn.message === "가입된 회원이 아닙니다") {
    setConfirm(false)
    setErrorMessage('아이디와 비밀번호를 확인해주세요.')
  };

  return (
    <Wrap>
      <h2>로그인</h2>
      <StyledInput
        name="name"
        value={userInfo.name}
        placeholder='아이디'
        type='text'
        autoComplete='off'
        onChange={onChange} />
      <StyledInput
        name="password"
        value={userInfo.password}
        placeholder='비밀번호'
        type='password'
        onChange={onChange} />

      {errorMessage && <div style={{color: 'red'}}> {errorMessage} </div>}

      <StyledButton onClick={onClickSignin}>
        확인
      </StyledButton>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1vh;
`;

const StyledInput = styled.input`
  padding: 1vh;
  margin: 0.5vh;
  border: 2px solid #888;
  width: 25vh;
  font-size: 4vh;
`

const StyledButton = styled.button`
  background: #888;
  border: none;
  color: #fff;
  padding: 1vh;
  margin: 0.5vh;
  width: 27.5vh;
  font-size: 4vh;

  &:hover {
    background: #880217;
  }
`

export default SignIn