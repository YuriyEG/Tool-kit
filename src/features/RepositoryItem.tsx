import styled from "styled-components"
import getDistance from "../helper/getDistance"

const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  padding: 10px 20px 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 2px;
  background-color: #f9f9f9;

  &:hover {
    background-color: #f1f1f1;
  }
`

const RepositoryName = styled.a`
  font-size: 1.2em;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Stars = styled.span`
  color: #f39c12;
  margin-right: 10px;
`

const Distance = styled.span`
  color: #666;
  border: 1px solid black;
`

const Link = styled.a`
  text-decoration: none;
  &:hover {
    color: gray;
  }
`

const RepositoryItem = () => {
  return (
    <RepositoryContainer>
      <RepositoryName href="#" target="_blank" rel="noopener noreferrer">
        Name
      </RepositoryName>
      <Stars>⭐ {2435}</Stars>
      <Distance>Distance</Distance>
      <Link>Link</Link>
    </RepositoryContainer>
  )
}

export default RepositoryItem
