import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDoc } from '../utils/firebase/firebase.utils.js'

// import SHOP_DATA from '../shop.data.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDoc()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  // !!! stop the useEffect after uploading the data so it will not upload it again or overwrite it. !!!
  // useEffect(() => {
  //   addCollectionAndDoc('categories', SHOP_DATA)
  // },[])

  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
