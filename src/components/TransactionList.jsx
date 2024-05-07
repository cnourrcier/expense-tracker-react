import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  // const context = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<li key={transaction.id} className={transaction.amount >= 0 ? "plus" : "minus"}>
          {transaction.text} <span>{transaction.amount}</span><button className="delete-btn">x</button>
        </li>))}

      </ul>
    </>
  )
}
