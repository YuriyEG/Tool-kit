import type { FC } from "react"
import { useParams } from "react-router-dom"

import styled from "styled-components"
import { useUnit } from "effector-react"

import Tooltip from "../shared/ui/Tooltip"
import Loader from "../shared/ui/Loader"

import {
  $repositoryData,
  fetchRepositoryDataFx,
} from "../models/RepositoryCardEffector"

import getDistance from "../helper/getDistance"

const Container = styled.article`
  width: 600px;
  height: auto;
  margin: 0 auto;
  padding: 28px;
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

  .name {
    font-size: 22px;
    font-weight: bold;
    overflow: hidden;
    width: 250px;
    text-align: left;
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
    overflow: hidden;
  }
`

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  .login {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    word-break: break-all;
    padding: 12px;

    &:hover {
      opacity: 0.7;
    }
  }
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .language {
    margin-bottom: 12px;
    text-align: left;
  }
  .description {
    margin-bottom: 2px;
    text-align: left;
  }

  .bold {
    font-weight: bold;
    margin-bottom: 4px;
  }
`

const RepositoryCard: FC = () => {
  const { id } = useParams<{ id: string }>()
  const card = useUnit($repositoryData)

  if (!card || card.id !== id) {
    fetchRepositoryDataFx(id!)
    return <Loader />
  }

  const {
    owner: { avatarUrl, login, url },
    name,
    pushedAt,
    stargazerCount,
    languages,
    description,
  } = card

  return (
    <Container>
      <CardHeader>
        <span className="name">{name}</span>
        <span className="stars">⭐{stargazerCount}</span>
        <span className="distance">{getDistance(pushedAt)}</span>
      </CardHeader>
      <CardBody>
        <img src={avatarUrl} className="photo" alt={name} />

        <span className="login">
          <Tooltip content={url}>{login}</Tooltip>
        </span>
      </CardBody>
      <About>
        {languages.nodes?.length !== 0 && (
          <>
            {" "}
            <p className="bold">Language: </p>
            <span className="language">
              {languages?.nodes.map((node, index) => (
                <span key={index}>{String(node.name)} </span>
              ))}
            </span>
          </>
        )}

        {description?.length && (
          <>
            <p className="bold">About: </p>
            <span className="description">{description}</span>
          </>
        )}
      </About>
    </Container>
  )
}

export default RepositoryCard
