import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Solve from './solve'
import Exam from './exam'
import Test from './test'
import Main from './main'
import Info from './info'
import User from './user'
import PreConfirm from './pre_confirm'
import Confirm from './confirm'
import examData from '../data/exam_data'
import testData from '../data/test_data'

import styled from 'styled-components'

const Index = () => {
    const data = Array.from({ length: 88 }, (_, index) => ({ [index + 1]: 0 }));
    
    const [name, setName] = useState("")
    const [testId, setTestId] = useState("")
    const [sheet, setSheet] = useState(data)
    const [viewlevel, setviewlevel] = useState(0)
    const [viewcount, setviewcount] = useState(1)
    const [dataNumber, setDataNumber] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    console.log('index: ', sheet)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 830) {
            // setIsVisible(true);
            document.title = "요양보호사 모의시험 모바일화면"; // 원하는 타이틀로 변경합니다.
        //   } else {
            // setIsVisible(false);
          }
        };
    
        handleResize(); // 초기화 할 때 한 번 호출하여 현재 크기에 따라 isVisible 값을 설정
        window.addEventListener('resize', handleResize); // 화면 크기 변경 감지하여 isVisible 값 변경
    
        return () => {
          window.removeEventListener('resize', handleResize); // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
        };
      }, []);

    const NotFound = () => {
        return <div>잘못된 경로입니다.</div>
      }
    
  return (
    <Wrap>
        {isVisible ? 
            <Box isVisible={isVisible}>
                모바일 접속
            </Box> :
            <Wrap>
                <Header name={name} setviewlevel={setviewlevel} setviewcount={setviewcount} />
                <Body>
                    <GridContainer>
                        <LeftPanel>
                            <Routes>
                                <Route path='/' element={<Main name={name} setName={setName} />} />
                                <Route path='/info' element={<Info name={name} setName={setName} />} />
                                <Route path='/exam' element={<Exam name={name} viewlevel={viewlevel} viewcount={viewcount} data={examData} dataNumber={dataNumber} sheet={sheet} setSheet={setSheet} /> } />
                                <Route path='/test' element={<Test name={name} viewlevel={viewlevel} viewcount={viewcount} data={testData} dataNumber={dataNumber} sheet={sheet} setSheet={setSheet} /> } />
                                <Route path='/user' element={<User name={name} setName={setName} /> } />
                                <Route path='/pre_confirm' element={<PreConfirm name={name} /> } />
                                <Route path='/confirm' element={<Confirm name={name} /> } />
                                {/* <Route path='/todos' element={<Todos />} /> */}
                                {/* <Route path='/todos/:id' element={<Todo />} /> */}
                                <Route path='/*' element={<NotFound />} />
                            </Routes>
                        </LeftPanel>
                        <RightPanel>
                            <Solve examData={examData} testData={testData} sheet={sheet} setSheet={setSheet} />
                        </RightPanel>
                    </GridContainer>
                </Body>
                <Footer viewcount={viewcount} examData={examData} testData={testData} dataNumber={dataNumber} setDataNumber={setDataNumber} />
            </Wrap>
        }
    </Wrap>
  )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
`;

const Box = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #13264E;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    transition: transform 0.3s ease;
    transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0)'};
`;

const Body = styled.div`
    display: flex;
    width: 100%;
    display: inline-block;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
    height: calc(85vh - 4vh); /* 헤더 10vh, 푸터 5vh를 제외한 나머지 전체 높이 */
    width: 100%;
    //   background: orange;
`;

const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding: 1vh;
`;

const RightPanel = styled.div`
    overflow-y: auto;
    padding: 1vh;
    background: #13264E;
    color: #FFF;
`;

export default Index