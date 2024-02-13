import React from 'react'

import styled from 'styled-components'

const Question_1 = ({viewLevel, viewCount, data, dataNumber}) => {
    // console.log('q1: ', dataNumber)
    // console.log('d1: ', data)
    // const filterData = data.filter(item => item.id === dataNumber+1);
    let filterData = [];
    if (viewCount === 1) {
        filterData = data.filter(item => item.id === dataNumber + 1);
    } else if (viewCount === 2) {
        if (dataNumber % 2 === 0) { // viewCount가 짝수일 때
            filterData = data.filter(item => item.id === dataNumber + 1 || item.id === dataNumber + 2);
        } else { // viewCount가 홀수일 때
            filterData = data.filter(item => item.id === dataNumber || item.id === dataNumber - 1);
        }
    }
    // console.log('ff: ', data.filter(item => item.id === dataNumber+1))

  return (
    <div>
        <Box viewLevel={viewLevel} viewCount={viewCount}>
            {filterData.map((d) => (
                <div>
                    <h3 key={d.index}>
                        {d.question} {viewCount}
                    </h3>

                    { d.text ?? 
                        <div key={d.index}>
                            {d.text}
                        </div>
                    }

                    { d.image ?? 
                        <div key={d.index}> {d.image} </div> 
                    }

                    <div key={d.index}>{d.option1}</div>
                    <div key={d.index}>{d.option2}</div>
                    <div key={d.index}>{d.option3}</div>
                    <div key={d.index}>{d.option4}</div>
                    <div key={d.index}>{d.option5}</div>

                </div>
            ))}
        </Box>

    </div>
  )
}

const Box = styled.div`
    // align-items: center;
    font-size: ${props => props.viewLevel === 0 ? '3vh' : '4vh'};
    // color: ${props => props.viewLevel === 0 ? '#13264E' : 'red'};
    ${props => (props.viewCount === 2 ? `
    display: flex;
    width: 80vh;
    justify-content: space-around;
    padding: 1px;
    &::after {
        content: '';
        position: absolute;
        height: 65%;
        width: 1px;
        background-color: black;
        top:25vh;
        right: 60%;
        bottom: 0;
      }
  ` : `
    width: 60vh;`)}
`

export default Question_1