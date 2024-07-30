import styled from "styled-components"
import RepositoryItem from "./RepositoryItem"
import Pagination from "../shared/ui/Pagination"

import { useNavigate } from "react-router-dom"

import { useUnit } from "effector-react"
import { $currentPage } from "../models/RepositoriesPagination"

import { changeCurrentPage } from "../models/RepositoriesPagination"

const StyledList = styled.ul`
  margin-bottom: 20px;
`

const RepositoryList = ({ results }) => {
  const navigate = useNavigate()
  const currentPage = useUnit($currentPage)

  const openCardHandler = id => {
    console.log("$", id)
    navigate(`/details/${id}`)
  }
  const currentChunk = results.slice((currentPage - 1) * 10, currentPage * 10)
  return (
    <StyledList>
      {currentChunk.map(item => (
        <RepositoryItem
          item={item}
          key={item.id}
          select={() => select(item.id)}
          changeId={openCardHandler}
        />
      ))}

      {results.length > 10 && (
        <Pagination
          totalItems={results.length}
          itemsPerPage={10}
          onPageChange={changeCurrentPage}
          currentPage={currentPage}
        />
      )}
    </StyledList>
  )
}

export default RepositoryList
