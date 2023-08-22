import styled from "styled-components";

export const TodoHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TodoHeaderList = styled.ul`
  display: flex;
  gap: 0.7rem;
  list-style: none;
`

export const TodoHeaderListItem = styled.li`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #000;
  }
`