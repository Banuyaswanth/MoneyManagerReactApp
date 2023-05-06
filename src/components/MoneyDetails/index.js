import './index.css'

const MoneyDetails = props => {
  const {transactionList} = props
  let totalExpenses = 0
  let totalIncome = 0
  transactionList.map(each => {
    if (each.type === 'INCOME') {
      totalIncome += parseInt(each.amount)
    } else {
      totalExpenses += parseInt(each.amount)
    }
    return null
  })
  const totalBalance = totalIncome - totalExpenses

  return (
    <div className="dashboard-list-style">
      <div className="dashboard-list-item list-item-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="dashboard-list-item-logo"
        />
        <div className="dashboard-list-item-content-container">
          <p className="dashboard-list-item-heading">Your Balance</p>
          <p className="dashboard-list-item-amount" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="dashboard-list-item list-item-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="dashboard-list-item-logo"
        />
        <div className="dashboard-list-item-content-container">
          <p className="dashboard-list-item-heading">Your Income</p>
          <p className="dashboard-list-item-amount" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="dashboard-list-item list-item-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="dashboard-list-item-logo"
        />
        <div className="dashboard-list-item-content-container">
          <p className="dashboard-list-item-heading">Your Expenses</p>
          <p
            className="dashboard-list-item-amount"
            data-testid="expensesAmount"
          >
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
