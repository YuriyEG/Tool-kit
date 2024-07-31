import type { FC } from "react"
import type { IRepositoryListProps } from "../types/RepositoryList.types"

import { useNavigate } from "react-router-dom"

import { useUnit } from "effector-react"
import { $currentPage } from "../models/RepositoriesPaginationEffector"
import { changeCurrentPage } from "../models/RepositoriesPaginationEffector"

import styled from "styled-components"
import RepositoryItem from "./RepositoryItem"
import Pagination from "../shared/ui/Pagination"

const StyledList = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const Gap = styled.div`
  height: 20px;
`

const RepositoryList: FC<IRepositoryListProps> = ({ results }) => {
  const navigate = useNavigate()
  const currentPage = useUnit($currentPage)

  const openCardHandler = (id: string) => {
    navigate(`/details/${id}`)
  }

  const currentChunk = results.slice((currentPage - 1) * 10, currentPage * 10)

  return (
    <StyledList>
      {currentChunk.map(item => (
        <RepositoryItem item={item} key={item.id} changeId={openCardHandler} />
      ))}
      <Gap />
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
