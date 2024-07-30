import type { Repository } from "../services/fetchRepositories"

import { useEffect, useLayoutEffect, useState, type FC } from "react"
import { useParams } from "react-router-dom"

import styled from "styled-components"
import { useUnit } from "effector-react"

import Tooltip from "../shared/ui/Tooltip"
import Loader from "../shared/ui/Loader"

import fetchRepositoryData from "../services/fetchRepositoryData"
import {
  $repositoryData,
  fetchRepositoryDataFx,
} from "../models/RepositoryCardEffector"
import getDistance from "../helper/getDistance"

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

  .name {
    font-size: 22px;
    font-weight: bold;
    overflow: hidden;
    width: 250px;
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

  .photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  .login {
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto;
    text-decoration: none;
    width: 100%;
    text-align: center;
    word-break: break-all;
    padding: 12px;

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
  const { id } = useParams()
  let card = useUnit($repositoryData)

  if (!card || card.id !== id) {
    card = null
    fetchRepositoryDataFx(id)
  }

  if (!card) {
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
        <span className="span">
          <img src={avatarUrl} className="photo" alt={name} />
        </span>
        <span className="login">
          <Tooltip content={url}>{login}</Tooltip>
        </span>
      </CardBody>
      <About>
        <span className="language">
          Language:{" "}
          {languages?.nodes?.map((node, index) => (
            <span key={index}>{String(node.name)} </span>
          ))}
        </span>
        <span className="description">About: {description}</span>
      </About>
    </Container>
  )
}

export default RepositoryCard
