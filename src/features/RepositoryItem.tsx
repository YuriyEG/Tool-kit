import type { FC } from "react"
import styled from "styled-components"
import Tooltip from "../shared/ui/Tooltip"

import getDistance from "../helper/getDistance"
import type { IRepositoryItemProps } from "../types/RepositoryItem.types"

const RepositoryContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 2px;
  background-color: rgba(249, 249, 249, 1);
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(241, 241, 241, 1);
    cursor: pointer;
  }
`

const RepositoryName = styled.a`
  font-size: 1.2em;
  color: rgba(0, 0, 0, 1);
  max-width: 250px;
  text-align: left;
  overflow: hidden;
  word-break: break-all;
  text-decoration: none;

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

const RepositoryItem: FC<IRepositoryItemProps> = ({ item, changeId }) => {
  const { id, name, url, stargazerCount, defaultBranchRef } = item
  const distance = getDistance(defaultBranchRef?.target?.committedDate)

  return (
    <RepositoryContainer onClick={() => changeId(id)}>
      <Tooltip content={url}>
        <RepositoryName>{name}</RepositoryName>
      </Tooltip>
      <Right>
        <Stars>⭐ {stargazerCount}</Stars>
        <Distance>{distance}</Distance>
      </Right>
    </RepositoryContainer>
  )
}

export default RepositoryItem
