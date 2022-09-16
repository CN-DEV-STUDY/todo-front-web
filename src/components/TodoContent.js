import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #495057;
  margin-left: 60px;
`;

function TodoContent({ content }) {
  return <Text>{content}</Text>;
}

export default TodoContent;
