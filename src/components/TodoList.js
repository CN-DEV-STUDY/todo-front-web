import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import axios from "axios";
import { useEffect, useState } from "react";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setList(null);
        setLoading(true);
        const response = await axios.get("/todo/list/1");
        setList(response.data);
      } catch (e) {}
      setLoading(false);
    };
    fetchList();
  }, []);

  if (loading) return <div>로딩중..</div>;

  console.log("list" + list);
  return (
    <TodoListBlock>
      {list &&
        list.map((todo) => (
          <TodoItem
            key={todo.tno}
            text={todo.title}
            content={todo.content}
            done={true}
          />
        ))}
    </TodoListBlock>
  );
}

export default TodoList;
