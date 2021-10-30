import React, {createContext, useReducer} from 'react';
import productsReducer, {
  productsIniialState,
} from 'src/reducers/productsReducer';

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [state, dispatch] = useReducer(productsReducer, productsIniialState);
  return (
    <ProductsContext.Provider
      value={{
        productsState: state,
        productsDispatch: dispatch,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
