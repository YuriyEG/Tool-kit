import { useEffect, useState } from "react"

import styled from "styled-components"

import SearchInput from "../shared/ui/SearchInput"
import RepositoryList from "../features/RepositoryList"
import Pagination from "../shared/ui/Pagination"
import RepositoryCard from "../features/RepositoryCard"

import {
  $loading,
  $repositories,
  fetchListFx,
  loadList,
} from "../models/RepositoriesEffector"

import { useUnit } from "effector-react"
import { query } from "effector-storage"
import fetchRepositories from "../services/fetchRepositories"

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  min-height: 200px;
`
const Repositories = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")

  const [myRepos, setMyRepos] = useState([])

  const results = useUnit($repositories)
  const loading = useUnit($loading)

  const searchHandler = (searchQuery: string) => {
    setQuery(searchQuery)
    if (!searchQuery) {
      return
    }
    fetchListFx(searchQuery)
  }
  console.log(results)
  return (
    <Container>
      {" "}
      {/* <RepositoryCard id={repoId} /> */}
      <SearchInput searchHandler={searchHandler} query={query} />
      <RepositoryList list={results} select={() => ""} />
      <Pagination
        // totalItems={query.length ? repositories.length : myRepos.length}
        totalItems={results.length}
        itemsPerPage={10}
        onPageChange={setPage}
        currentPage={page}
      />
    </Container>
  )
}

export default Repositories
