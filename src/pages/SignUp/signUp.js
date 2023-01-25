import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import styled from 'styled-components'

const SIGN_UP = gql`
  mutation signUp($userInformation: UserInput) {
    signUp(userInformation: $userInformation)
  }
`

const SignUp = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ name: "", password: "", mail: "" });
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [signUpComplete, setSignUpComplete] = useState(false);

  const checkEmailValid = (mail) => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return mail.match(emailRegExp);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });

    if (name === 'mail') {
      setEmailErrorMessage(
        checkEmailValid(value) === null && '이메일을 확인해주세요.'
      );
    }
  };

  const onClickSignUp = () => {
    signUp({
      variables: {
        userInformation: {
          name: userInfo.name,
          mail: userInfo.mail,
          password: userInfo.password,
        }
      },
    })
  }

  const signUpCompleted = () => {
    setSignUpComplete(true)
  }

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: signUpCompleted
  });

  return (
    <Wrap>
      <h2>회원 가입</h2>
      <StyledInput
        name='name'
        value={userInfo.name}
        placeholder='아이디'
        type='text'
        required='true'
        autoComplete='off'
        onChange={onChange} />
      <StyledInput
        name='mail'
        value={userInfo.mail}
        placeholder='이메일'
        type='email'
        autoComplete='off'
        onChange={onChange} />
        {emailErrorMessage && <div style={{color: 'red'}}> {emailErrorMessage} </div>}
      <StyledInput
        name='password'
        value={userInfo.password}
        placeholder='비밀번호'
        type='password'
        required='true'
        onChange={onChange} />

      {signUpComplete 
      ? <StyledButton onClick={() => navigate('/login')}>
          완료🎉
        </StyledButton>
      : <StyledButton onClick={() => onClickSignUp()}>
          가입
        </StyledButton>}
      
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


export default SignUp