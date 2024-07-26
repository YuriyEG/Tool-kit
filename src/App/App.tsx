import styled from "styled-components"

import Pagination from "../shared/ui/pagination"
import RepositoryCard from "../features/RepositoryCard"
import { useState } from "react"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-color: rgb(223, 229, 206);
`

const App = () => {
  const [page, setPage] = useState(1)
  return (
    <Container>
      <Pagination
        totalItems={300}
        itemsPerPage={10}
        onPageChange={setPage}
        currentPage={page}
      />
      <RepositoryCard />
    </Container>
  )
}

export default App
