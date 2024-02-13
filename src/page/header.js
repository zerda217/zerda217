import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = ({name, viewLevel, setViewLevel}) => {
    const navigate = useNavigate();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // console.log('viewLevel: ', viewLevel)

    return (
        <Wrap>
            <h2 onClick={() => navigate('/user')}>
                <Div>{getCurrentDate().slice(-2)}</Div>
                <Div>{name ? name : '성함'}</Div>
            </h2>
            <Div onClick={() => navigate('/')}>
                <div style={{fontSize: '5vh'}}>
                    TITLE
                </div>
                <div style={{fontSize: '3vh'}}>
                    {time.toLocaleTimeString()}
                </div>
            </Div>
            <div style={{display: 'flex'}}>
                <Button onClick={() => navigate('/info')}>설명보기</Button>
                <Button>낱개보기</Button>
                <Button>모아보기</Button>
                <Button onClick={() => setViewLevel(0)}>기본보기</Button>
                <Button onClick={() => setViewLevel(1)}>크게보기</Button>
            </div>
        </Wrap>
    )
}


const Wrap = styled.div`
    display: flex;
    flex-direction: columns;
    justify-content: space-around;
    align-items: center;
    padding: 1vh 5vh;
    width: 100%;
    height: 10vh;
    background: #13264E;
    color: #FFF;
    // border: 5px solid #72dede;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    background: ${props => props.viewLevel === 0 ? '#CCC' : '#FFF'};
    color: #000;
    width: 9vh;
    height: 9vh;
    margin: 5px;
`

export default Header