import type { Repository } from "../services/fetchRepositories"

import { useEffect, useState, type FC } from "react"
import styled from "styled-components"

import Tooltip from "../shared/ui/Tooltip"
import getDistance from "../helper/getDistance"
import fetchRepositoryData from "../services/fetchRepositoryData"

import { useUnit } from "effector-react"

import { $repositoryCard } from "../models/RepositoryCardEffector"

const Container = styled.article`
  width: 500px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 12px 1px rgba(0, 0, 0, 0.5);
  font-family: "Regular", Arial;
  border-radius: 4px;
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .title {
    font-size: 22px;
    font-weight: bold;
  }
  .stars {
    font-size: 18px;
    font-weight: bold;
    opacity: 0.6;
    margin-left: auto;
    margin-right: 18px;
  }
  .distance {
    font-size: 12px;
    font-weight: bold;
    opacity: 0.6;
  }
`

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .photo {
    width: 250px;
    border-radius: 50%;
  }

  .link {
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto;
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
  }

  margin-bottom: 20px;
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .language {
    margin-bottom: 8px;
  }
`

const RepositoryCard: FC = () => {
  const { id } = useUnit($repositoryCard)
  const [card, setCard] = useState(null)

  useEffect(() => {
    fetchRepositoryData(id).then(res => setCard(res))
  })

  if (card) {
    const avatar = card?.owner?.avatarUrl
    const name = card?.name
    const pushedAt = card?.pushedAt
    const stargazerCount = card?.stargazerCount
    const login = card?.owner?.login
    const languages = card?.languages?.nodes
    const description = card?.description

    return (
      <Container>
        <CardHeader>
          <span className="title">
            <Tooltip content={<p>Title</p>}>{name}</Tooltip>
          </span>
          <span className="stars">⭐{stargazerCount}</span>
          <span className="distance">{getDistance(pushedAt)}</span>
        </CardHeader>
        <CardBody>
          <span className="span">
            <img src={avatar} className="photo" alt={name} />
          </span>
          <a href={login} className="link">
            {login}
          </a>
        </CardBody>
        <About>
          <span className="language">
            Language: {languages => map(node => <p>{node.name} </p>)}
          </span>
          <span className="description">About: {description}</span>
        </About>
      </Container>
    )
  } else {
    return <h2>Загрузка</h2>
  }
}

export default RepositoryCard
