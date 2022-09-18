import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import axios from "axios";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const now = new Date().toLocaleDateString();

  const [count, setCount] = useState();

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get("/todo/selectCount/1");
        setCount(response.data);
      } catch (e) {}
    };
    fetchCount();
  }, []);

  return (
    <TodoHeadBlock>
      <h1>
        <Moment format="YYYY년MM월DD일">{now}</Moment>
      </h1>
      <div className="day">
        <Moment format="dddd">{now}</Moment>
      </div>
      <div className="tasks-left">할 일 {count}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
