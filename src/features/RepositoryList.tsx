import RepositoryItem from "./RepositoryItem"

const RepositoryList = ({ list = [], select, changeId }) => {
  return (
    <ul>
      {list.map(item => (
        <RepositoryItem
          item={item}
          key={item.id}
          select={() => select(item.id)}
          changeId={changeId}
        />
      ))}
    </ul>
  )
}

export default RepositoryList
