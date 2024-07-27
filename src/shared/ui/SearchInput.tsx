import { useState } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  padding: 8px;
  width: 380px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  text-indent: 8px;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 20px;

  &:focus {
    border-color: gray;
    outline: none;
  }
`

const SearchInput = ({ searchHandler, query }) => {
  return (
    <StyledInput
      type="text"
      placeholder="Поиск репозиториев на GitHub"
      value={query}
      onChange={e => searchHandler(e.target.value)}
    />
  )
}

export default SearchInput
