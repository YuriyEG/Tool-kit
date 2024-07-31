export interface IPaginationProps {
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  currentPage: number
}
