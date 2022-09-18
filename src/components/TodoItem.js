import React, { useState , useEffect } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import TodoContent from "./TodoContent";
import axios from "axios";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done && 
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;

  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text, content , todo }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const [check, setCheck] = useState(done)

  const checkToggle=()=>{
    setCheck(!check)
  }


  const removeButtonHanlder=()=>{
    axios.put("/todo/delete/3")
    .then(response => console.log("respose data : " , response.data))
    .catch((error) => alert("삭제 실패"))
    window.location.reload();
  }
  
  return (
    <>
      <TodoItemBlock>
        <CheckCircle onClick={checkToggle} done={check}>{check && <MdDone />}</CheckCircle>
        <Text onClick={toggleClass} done={check}>
          {text}
        </Text>
        <Remove>
          <MdDelete onClick={removeButtonHanlder} />
        </Remove>
      </TodoItemBlock>
      {isActive? <TodoContent content={content}></TodoContent> : null}
    </>
  );
}

export default TodoItem;
