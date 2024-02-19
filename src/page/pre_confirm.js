import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components';

const Pre_confirm = ({sheet}) => {
  console.log('pp: ', sheet)
  useEffect(() => {
    document.title = "요양보호사 모의시험 제출최종확인";
  }, []);
  const navigate = useNavigate();

  const onClickYes = () => {
    navigate('/confirm');
  }

  const onClickNo = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>
        최종 확인
      </h1>
      <div>시험을 정말 종료하시겠습니까?</div>
      <Table>
        <tbody>
        {sheet.map((item, index) => (
          index % 10 === 0 && (
            <tr key={index}>
              <TableHeader><b>{Object.keys(item)[0]}</b></TableHeader>
              <TableCell value={Object.values(item)[0]}>{Object.values(item)[0]}</TableCell>
              {sheet.slice(index + 1, index + 10).map((subItem, subIndex) => (
                <React.Fragment key={subIndex}>
                  <TableHeader><b>{Object.keys(subItem)[0]}</b></TableHeader>
                  <TableCell value={Object.values(subItem)[0]}>{Object.values(subItem)[0]}</TableCell>
                </React.Fragment>
              ))}
            </tr>
          )
        ))}
        </tbody>
      </Table>
      <button onClick={onClickYes}>예</button>
      <button onClick={onClickNo}>아니요</button>
    </div>
  )
}

const Table = styled.table`
  border-collapse: collapse;
  margin: 7% 0 ;
  // border: 1px solid #000;
`;

const TableHeader = styled.th`
  border: 1px solid black;
  padding: 4px;
  background-color: ${props => props.value === 0 ? 'lightcoral' : 'transparent'};
`;

const TableCell = styled.td`
  border: 1px solid black;s
  padding: 4px;
  background-color: ${props => props.value === 0 ? 'lightcoral' : 'transparent'};
`;

export default Pre_confirm