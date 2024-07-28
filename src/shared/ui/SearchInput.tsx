import { useState } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  padding: 8px;
  width: 100%;
  height: 46px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
  text-indent: 8px;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 20px;

  &:focus {
    border-color: rgba(0, 0, 0, 0.6);
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
