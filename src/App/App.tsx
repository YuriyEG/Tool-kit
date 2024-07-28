import { useEffect, useLayoutEffect, useState } from "react"

import styled from "styled-components"

import Pagination from "../shared/ui/Pagination"
import SearchInput from "../shared/ui/SearchInput"
import RepositoryList from "../features/RepositoryList"
import Repositories from "../widgets/Repositories"

import fetchRepositories from "../services/fetchRepositories"
import RepositoryCard from "../features/RepositoryCard"
import fetchUserRepositories from "../services/fetchUserRepositories"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-color: rgb(223, 229, 206);
  padding-top: 80px;
`

const App = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [repositories, setRepositories] = useState([])
  const [repoId, setRepo] = useState(null)
  const [myRepos, setMyRepos] = useState([])

  // useEffect(() => {
  //   fetchUserRepositories().then(res => setMyRepos(res))
  // }, [])

  const searchHandler = query => {
    setQuery(query)
  }

  useEffect(() => {
    fetchRepositories(query).then(res => setRepositories(res))
  }, [query])

  useEffect(() => {
    console.log(repoId)
  }, [repoId])

  const currentChunk = query.length
    ? repositories.slice((page - 1) * 10, page * 10)
    : myRepos.slice((page - 1) * 10, page * 10)

  return (
    <Container>
      <Repositories />
    </Container>
  )
}

export default App
