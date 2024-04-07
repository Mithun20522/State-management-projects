import React, { useState } from 'react'
import ProductContext from './productContext';

const ProcutContextProvider = ({children}) => {
    const [prodData, setProdData] = useState([]);
    const [addedItem, setAddedItem] = useState(0);

  return (
    <ProductContext.Provider value={{prodData, setProdData, addedItem, setAddedItem}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProcutContextProvider