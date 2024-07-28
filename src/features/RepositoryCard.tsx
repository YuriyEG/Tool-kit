import { useEffect, useState, type FC } from "react"
import styled from "styled-components"

import Tooltip from "../shared/ui/Tooltip"
import getDistance from "../helper/getDistance"
import fetchRepositoryData from "../services/fetchRepositoryData"

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

interface IRepository {
  name: string
  updated_at: Date
  stargazers_count: number
  owner: { avatar_url: string; html_url: string; login: string }
  full_name: string
  language: string
  description: string
}

const RepositoryCard: FC<{ id: string }> = ({ id }) => {
  const [card, setCard] = useState<IRepository | undefined>(undefined)

  useEffect(() => {
    fetchRepositoryData(id).then(res => setCard(res))
  }, [id])

  if (card) {
    return (
      <Container>
        <CardHeader>
          <span className="title">
            <Tooltip content={<p>Title</p>}>{card.name}</Tooltip>
          </span>
          <span className="stars">⭐{card.stargazers_count}</span>
          <span className="distance">{getDistance(card.updated_at)}</span>
        </CardHeader>
        <CardBody>
          <span className="span">
            <img
              src={card.owner.avatar_url}
              className="photo"
              alt={card.full_name}
            />
          </span>
          <a href={card.owner.html_url} className="link">
            {card.full_name}
          </a>
        </CardBody>
        <About>
          <span className="language">Language: {card.language}</span>
          <span className="description">About: {card.description}</span>
        </About>
      </Container>
    )
  }

  return null
}

export default RepositoryCard
