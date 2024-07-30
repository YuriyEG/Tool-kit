import styled from "styled-components"
import RepositoryItem from "./RepositoryItem"

const StyledList = styled.ul`
  margin-bottom: 20px;
`

const RepositoryList = ({ list = [], select, changeId }) => {
  return (
    <StyledList>
      {list.map(item => (
        <RepositoryItem
          item={item}
          key={item.id}
          select={() => select(item.id)}
          changeId={changeId}
        />
      ))}
    </StyledList>
  )
}

export default RepositoryList
