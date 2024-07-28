import type React from "react"
import styled, { css } from "styled-components"

interface IPaginationProps {
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  currentPage: number
}

const Button = styled.button<{ selected: boolean }>`
  margin: 0 3px;
  min-width: 24px;
  padding: 3px 4px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  color: gray;

  ${props =>
    props.selected &&
    css`
      background-color: gray;
      color: white;
      cursor: default;
    `}

  &:hover {
    opacity: 70%;
  }
`

const Pagination: React.FC<IPaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const maxButtons = 10

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
      {" "}
      {currentPage !== 1 && (
        <Button
          key="first"
          onClick={handlePreviousGroup}
          disabled={currentPage === 1}
          selected={false}
        >
          &lt;
        </Button>
      )}
      {renderPageNumbers()}
      {currentPage !== totalPages && (
        <Button
          key="last"
          onClick={handleNextGroup}
          disabled={false}
          selected={false}
        >
          &gt;
        </Button>
      )}
    </div>
  )
}

export default Pagination
