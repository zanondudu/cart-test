import './App.css'

import StoreProvider from './store/storeProvider'

import {
  BrowserRouter,
} from "react-router-dom"

import Loader from './components/loader'

import Routes from './routes'

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Loader />
      </div>
    </StoreProvider>
  )
}

export default App
