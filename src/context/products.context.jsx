import { createContext, useState, useEffect } from 'react'

import { addCollectionAndDoc } from '../utils/firebase/firebase.utils.js'

// import SHOP_DATA from '../shop.data.js'

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  // !!! stop the useEffect after uploading the data so it will not upload it again or overwrite it. !!!
  // useEffect(() => {
  //   addCollectionAndDoc('categories', SHOP_DATA)
  // },[])

  const value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
