import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteItemOne} = props
  const {timeAccessed, logoUrl, domainUrl, title, id} = eachItem
  const deleteItem = () => {
    deleteItemOne(id)
  }
  return (
    <li className="sub2">
      <div className="container">
        <p className="des">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="head">{title}</p>
        <p className="pads">{domainUrl}</p>
      </div>
      <button data-testid="delete" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}
export default HistoryItem
