import { useState } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  padding: 8px;
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  text-indent: 8px;
  color: rgba(0, 0, 0, 0.9);

  &:focus {
    border-color: gray;
    outline: none;
  }
`

const SearchInput = ({ searchHandler }) => {
  const [query, setQuery] = useState("")
  return (
    <StyledInput
      type="text"
      placeholder="Поиск репозиториев на GitHub"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  )
}

export default SearchInput
