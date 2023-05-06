import './index.css'

const TransactionItem = props => {
  const {each, deleteTransaction, transactionTypeOptions} = props
  const {id, title, amount, type} = each
  const onDeleteClicked = () => {
    deleteTransaction(id)
  }
  const typeOfHistory =
    type === transactionTypeOptions[0].optionId
      ? transactionTypeOptions[0].displayText
      : transactionTypeOptions[1].displayText

  return (
    <li className="transaction-history-item">
      <p className="common-width-parameter-Transaction-Item">{title}</p>
      <p className="common-width-parameter-Transaction-Item">{amount}</p>
      <p className="common-width-parameter-Transaction-Item">{typeOfHistory}</p>
      <button
        onClick={onDeleteClicked}
        data-testid="delete"
        className="delete-button"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
