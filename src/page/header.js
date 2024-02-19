import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import page_1 from '../image/1page.png'
import page_2 from '../image/2page.png'
import zoom_in from '../image/zoomin.png'
import comment from '../image/comment.png'

import useStore from './store';

const Header = () => {
    const { name, seatNumber, setviewlevel, setviewcount } = useStore();

    const navigate = useNavigate();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Wrap>
            <h2 onClick={() => navigate('/user')}>
                <Div>{seatNumber}</Div>
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
                <Button onClick={() => navigate('/info')}>설명보기
                    <Img src={comment} alt="comment" />
                </Button>
                <Button onClick={() => setviewcount(1)}>낱개보기 
                    <Img src={page_1} alt="Page 1" />
                </Button>
                <Button onClick={() => setviewcount(2)}>모아보기 
                    <Img src={page_2} alt="Page 2" />
                </Button>
                <Button onClick={() => setviewlevel(0)}>기본보기
                
                </Button>
                <Button onClick={() => setviewlevel(1)}>크게보기
                    <Img src={zoom_in} alt="zoom in" />
                </Button>
            </div>
        </Wrap>
    )
}


const Wrap = styled.div`
    display: flex;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.viewlevel === 0 ? '#000' : '#FFF'};
    color: #000;
    width: 9vh;
    height: 9vh;
    margin: 5px;
`

const Img = styled.img`
    width: 5vh;
    height: 5vh;
`

export default Header