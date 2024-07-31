export interface ISearchInputProps {
  searchHandler: (query: string) => void
  query: string
  onClear: () => void
}
