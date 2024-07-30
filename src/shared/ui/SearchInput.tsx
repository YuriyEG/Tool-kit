import styled from "styled-components"

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 42px;
`
const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  height: 50px;
  border: 2px solid rgba(204, 204, 204, 1);
  border-radius: 18px;
  font-size: 18px;
  text-indent: 10px;
  color: rgba(0, 0, 0, 1);
  background-color: white;

  &:focus {
    border-color: rgba(0, 0, 0, 0.6);
    outline: none;
  }
  &::placeholder {
    color: rgba(3, 138, 255, 0.8);
  }
`
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 12px;

  font-size: 24px;
  line-height: 24px;
  height: 50px;
  width: 50px;
  padding: 10px;
`

const SearchInput = ({ searchHandler, query, onClear }) => {
  return (
    <InputWrapper>
      {" "}
      <StyledInput
        type="text"
        placeholder="Поиск репозиториев на GitHub"
        value={query}
        onChange={e => searchHandler(e.target.value)}
      />
      <CloseButton onClick={onClear}>&#215;</CloseButton>
    </InputWrapper>
  )
}

export default SearchInput
