import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem
        text="프로젝트 생성하기"
        content={"프로젝트 생성 시작!!!"}
        done={true}
      />
      <TodoItem
        text="컴포넌트 스타일링 하기"
        content={"컴포넌트 개꿀~"}
        done={true}
      />
      <TodoItem text="Context 만들기" content={"컨텍스트 극혐~"} done={false} />
      <TodoItem text="기능 구현하기" content={"기능 구현완료"} done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
