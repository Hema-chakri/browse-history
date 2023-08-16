const HistoryItem = props => {
  const {browserDetails, deleteBrowser} = props
  const {timeAccessed, logoUrl, title, id, domainUrl} = browserDetails
  const onDelete = () => {
    deleteBrowser(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <div>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
