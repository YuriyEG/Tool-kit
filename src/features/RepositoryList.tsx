import RepositoryItem from "./RepositoryItem"

const RepositoryList = ({ list = [], select }) => {
  return (
    <ul>
      {list.map(item => (
        <RepositoryItem item={item} key={item.id} select={select} />
      ))}
    </ul>
  )
}

export default RepositoryList
