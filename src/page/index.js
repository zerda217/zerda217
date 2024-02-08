import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Solve from './solve'
import Exam from './exam'
import Test from './test'
import Main from './main'
import Info from './info'
import User from './user'

import styled from 'styled-components'

const Index = () => {
    const [name, setName] = useState("")

    const NotFound = () => {
        return <div>잘못된 경로입니다.</div>
      }
    
  return (
    <Wrap>
        <Header name={name} />
        <Body>
            <GridContainer>
                <LeftPanel>
                    <Routes>
                        <Route path='/' element={<Main name={name} setName={setName} />} />
                        <Route path='/info' element={<Info name={name} setName={setName} />} />
                        <Route path='/exam' element={<Exam name={name} /> } />
                        <Route path='/test' element={<Test name={name} /> } />
                        <Route path='/user' element={<User name={name} setName={setName} /> } />
                        {/* <Route path='/todos' element={<Todos />} /> */}
                        {/* <Route path='/todos/:id' element={<Todo />} /> */}
                        <Route path='/*' element={<NotFound />} />
                    </Routes>
                </LeftPanel>
                <RightPanel>
                    <Solve />
                </RightPanel>
            </GridContainer>
        </Body>
        <Footer />
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

const Body = styled.div`
    display: flex;
    width: 100%;
    display: inline-block;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 40vh;
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