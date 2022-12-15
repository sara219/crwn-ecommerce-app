import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import App from './App'
import { UserProvider } from './context/user.context'
import { CategoriesProvider } from './context/categories.context'
import { CartProvider } from './context/cart.context'

// redux
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
