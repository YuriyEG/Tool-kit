import styled from "styled-components"
import getDistance from "../helper/getDistance"

const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  padding: 10px 20px 10px 20px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 2px;
  background-color: rgba(249, 249, 249, 1);

  &:hover {
    background-color: rgba(241, 241, 241, 1);
    cursor: pointer;
  }
`

const RepositoryName = styled.a`
  font-size: 1.2em;
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
  font-size: 20px;
  max-width: 60%;
  text-align: left;
  overflow: hidden;
  &:hover {
    color: rgba(128, 128, 128, 1);
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 30%;
`

const Stars = styled.span`
  color: rgba(255, 165, 0, 1);
  align-self: flex-end;
`

const Distance = styled.span`
  color: rgba(128, 128, 128, 1);
  font-size: 12px;
  align-self: flex-end;
`

const RepositoryItem = ({ item }) => {
  const {
    name,
    url,
    stargazerCount,
    defaultBranchRef: {
      target: { committedDate },
    },
  } = item
  const distance = getDistance(committedDate)

  return (
    <RepositoryContainer>
      <RepositoryName href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </RepositoryName>
      <Right>
        <Stars>⭐ {stargazerCount}</Stars>
        <Distance>{distance}</Distance>
      </Right>
    </RepositoryContainer>
  )
}

export default RepositoryItem
