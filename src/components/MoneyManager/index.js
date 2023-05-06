import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {transactionList: [], title: '', amount: '', type: 'INCOME'}

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: 'INCOME',
    }))
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(each => each.id !== id),
    }))
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {transactionList, title, amount, type} = this.state
    return (
      <div className="main-outer-container">
        <div className="top-container">
          <div className="welcome-container">
            <h1 className="welcome-container-heading">Hi, Richard</h1>
            <p className="welcome-container-para">
              Welcome back to your{' '}
              <span className="welcome-container-span">Money Manager</span>
            </p>
          </div>
          <div className="dashboard-container">
            <MoneyDetails transactionList={transactionList} />
          </div>
        </div>
        <div className="bottom-container">
          <div className="form-container">
            <form onSubmit={this.addTransaction}>
              <h1 className="bottom-heading">Add Transaction</h1>
              <label htmlFor="titleInput">TITLE</label>
              <br />
              <input
                onChange={this.changeTitle}
                id="titleInput"
                type="text"
                placeholder="TITLE"
                value={title}
              />
              <br />
              <label htmlFor="amountInput">AMOUNT</label>
              <br />
              <input
                onChange={this.changeAmount}
                id="amountInput"
                type="text"
                placeholder="AMOUNT"
                value={amount}
              />
              <br />
              <label htmlFor="dropdown">TYPE</label>
              <br />
              <select value={type} id="dropdown" onChange={this.changeType}>
                <option value={transactionTypeOptions[0].optionId}>
                  Income
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  Expenses
                </option>
              </select>
              <br />
              <button type="submit" className="form-add-button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="bottom-heading">History</h1>
            <ul className="history-list-type">
              <li className="list-heading-item">
                <p className="common-width-parameter">Title</p>
                <p className="common-width-parameter">Amount</p>
                <p className="type">Type</p>
              </li>
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  each={each}
                  transactionTypeOptions={transactionTypeOptions}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
