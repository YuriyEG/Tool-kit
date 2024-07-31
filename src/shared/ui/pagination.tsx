import type React from "react"
import type { IPaginationProps } from "../../types/Pagination.types"

import styled, { css } from "styled-components"

const Button = styled.button<{ selected: boolean }>`
  margin: 0 5px;
  min-width: 25px;
  padding: 5px 8px;
  border: 1px solid rgba(128, 128, 128, 1);
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  color: rgba(128, 128, 128, 1);

  ${props =>
    props.selected &&
    css`
      background-color: rgba(128, 128, 128, 1);
      color: rgba(255, 255, 255, 1);
      cursor: default;
    `}

  &:hover {
    opacity: 0.7;
  }
`

const Pagination: React.FC<IPaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const maxButtons = 5

  const calculatePageButtons = () => {
    let pageNumbers: number[] = []
    if (totalPages <= maxButtons) {
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    } else {
      const halfVisible = Math.floor(maxButtons / 2)
      let startPage = Math.max(currentPage - halfVisible, 1)
      let endPage = startPage + maxButtons - 1

      if (endPage > totalPages) {
        endPage = totalPages
        startPage = Math.max(endPage - maxButtons + 1, 1)
      }

      pageNumbers = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      )
    }
    return pageNumbers
  }

  const renderPageNumbers = () => {
    const pageNumbers = calculatePageButtons()
    return pageNumbers.map(number => (
      <Button
        key={number}
        onClick={() => onPageChange(number)}
        disabled={number === currentPage}
        selected={number === currentPage}
      >
        {number}
      </Button>
    ))
  }

  const handlePreviousGroup = () => {
    const newPage = Math.max(currentPage - maxButtons, 1)
    onPageChange(newPage)
  }

  const handleNextGroup = () => {
    const newPage = Math.min(currentPage + maxButtons, totalPages)
    onPageChange(newPage)
  }

  return (
    <div>
      {currentPage > 1 && (
        <Button key="first" onClick={handlePreviousGroup} selected={false}>
          &lt;
        </Button>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <Button key="last" onClick={handleNextGroup} selected={false}>
          &gt;
        </Button>
      )}
    </div>
  )
}

export default Pagination
