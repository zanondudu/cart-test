import React from 'react'
import { Provider } from 'react-redux'
import loader from './reducers/loader'
import amount from './reducers/amount'
import shipping from './reducers/shipping'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    amount: amount,
    loader: loader,
    shipping: shipping
  }
})

const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default StoreProvider
