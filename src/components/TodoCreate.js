import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import {BsFillCalendarCheckFill , BsFillInboxesFill} from 'react-icons/bs'

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const InputTitle = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  margin-top : 10px;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const InputContent = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  margin-top : 10px;
  width: 100%;
  height : 100px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  icon : 
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <BsFillCalendarCheckFill size="30"/>
            <BsFillInboxesFill size="30" style={{marginLeft:10}}/>
            <InputTitle autoFocus placeholder="제목을 입력하세요."/>
            <InputContent autoFocus placeholder="내용을 입력하세요.">
            </InputContent>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;