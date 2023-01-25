import React, { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useSelector } from "react-redux";
import styled from 'styled-components'

const GET_TODOS = gql`
  query todoList {
    todoList
  }
`

const ADD_TODO = gql`
  mutation newPost($post: TodoInput) {
  newPost(post: $post)
}
`

const UPDATE_TODO = gql`
  mutation updatePost($id:Int!, $title:String!, $complete:Boolean) {
    updatePost(id:$id, title:$title, complete:$complete)
  }
`

const Todos = () => {
  const [addTodo, setAddTodo] = useState('');
  const [addCategory, setAddCategory] = useState('인간');
  const category = ['인간', '고양이', '투두']

  const { id } = useSelector((state) => state.user);
  const { data, refetch } = useQuery(GET_TODOS);

  const onChange = (e) => {
    setAddTodo(e.target.value)
  };

  const onClickAddTodo = () => {
    newPost({
      variables: {
        post: {
          title: addTodo,
          register_user: id === 0 ? 1 : id,
          category: addCategory
        }
      }
    })
  };

  // const onClickUpdateTodo = () => {
  //   updatePost({
  //     variables: {
 
  //     }
  //   })
  // }

  const NewPostCompleted = () => {
    setAddTodo('')
    setAddCategory('인간')
    refetch()
  };

  const [newPost] = useMutation(ADD_TODO, {
    onCompleted: NewPostCompleted
  });

  return (
    <Wrap>
      <h2>투두리스트 ({data?.todoList.todoList.length})</h2>
      <StyledAddTodo>
        <select name="category" onClick={(e) => setAddCategory(e.target.value)}>
          {category.map((i) => <option value={i}>{i}</option>)}
        </select>
        <StyledInput
          type='text'
          name='addTodo'
          value={addTodo}
          placeholder='할 일 추가'
          onChange={onChange}
        />
        <StyledButton onClick={() => onClickAddTodo()}> 추가 </StyledButton>
      </StyledAddTodo>

      {data?.todoList.todoList.map((todo) => 
        <StyledList key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.complete === true ? '⭕️' : '💤'}</div>
          <div>{todo.title}</div>
          <div>{todo.user.name}님</div>
        </StyledList>
      )}
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

const StyledAddTodo = styled.div`
  display: flex;
  margin: 0 0 2vh;
  padding: 0 0 2vh;
  width: 80%;
`

const StyledInput = styled.input`
  padding: 1vh;
  margin: 0 1vh;
  border: 2px solid #888;
  width: 80%;
  font-size: 2vh;
`

const StyledButton = styled.button`
  background: #888;
  border: none;
  color: #fff;
  width: 10%;

  &:hover {
    background: #880217;
  }
`

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 40% 30%;
  width: 70vh;
  padding: 1vh;
  border: 2px solid #777;
  border-width: 0 0 2px 0;
`

export default Todos