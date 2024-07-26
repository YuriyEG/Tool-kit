import RepositoryItem from "../features/RepositoryItem"

const RepositoryList = ({ list = [1, 2, 3, 4, 5] }) => {
  return (
    <ul>
      {list.map(item => (
        <RepositoryItem />
      ))}
    </ul>
  )
}

export default RepositoryList
