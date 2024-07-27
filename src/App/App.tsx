import { useState } from "react"

import styled from "styled-components"

import Pagination from "../shared/ui/Pagination"
import SearchInput from "../shared/ui/SearchInput"
import RepositoryList from "../widgets/RepositoryList"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-color: rgb(223, 229, 206);
  padding-top: 80px;
`

const App = () => {
  const [page, setPage] = useState(1)
  return (
    <Container>
      <SearchInput searchHandler={v => console.log(v)} />
      <RepositoryList />
      <Pagination
        totalItems={300}
        itemsPerPage={10}
        onPageChange={setPage}
        currentPage={page}
      />
    </Container>
  )
}

export default App
