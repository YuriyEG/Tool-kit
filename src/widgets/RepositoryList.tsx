import RepositoryItem from "../features/RepositoryItem"

const RepositoryList = ({ list = [] }) => {
  return (
    <ul>
      {list.map(item => (
        <RepositoryItem item={item} />
      ))}
    </ul>
  )
}

export default RepositoryList
