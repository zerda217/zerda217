import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

const Main = ({name, setName}) => {
    const navigate = useNavigate();

    const handleChange = (event) => {
        setName(event.target.value);
    };


    return (
        <Wrap>
            <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
            />
            <Button onClick={() => navigate('/test')}>테스트 문제 풀기</Button>
            <Button onClick={() => navigate('/exam')}>모의 문제 풀기</Button>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow-x: hidden;
`;

const Button = styled.div`
    width: 20vh;
    height: 10vh;
    background: #13264E;
    color: #FFF;
    padding: 1vh;
    margin: 1vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Main