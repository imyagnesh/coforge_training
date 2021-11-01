import axiosInstance from '@utils/axiosInstance';
import React, {createContext, useCallback, useReducer} from 'react';
import productsReducer, {
  productsIniialState,
} from 'src/reducers/productsReducer';

export const ProductsContext = createContext();

const wait = time => new Promise(resolve => setTimeout(resolve, time));

const ProductsProvider = ({children}) => {
  const [state, dispatch] = useReducer(productsReducer, productsIniialState);

  const loadProducts = useCallback(async currentPage => {
    try {
      dispatch({type: 'LOAD_PRODUCTS_REQUEST', payload: null});
      const res = await axiosInstance.get(
        `660/products?_page=${currentPage}&_limit=10`,
      );
      await wait(3000);
      dispatch({type: 'LOAD_PRODUCTS_SUCCESS', payload: res.data});
    } catch (err) {
      dispatch({type: 'LOAD_PRODUCTS_FAIL', payload: err});
    }
  }, []);

  const resetProducts = useCallback(() => {
    dispatch({type: 'RESET_PAGE', payload: null});
    loadProducts(1);
  }, [loadProducts]);

  const increasePage = useCallback(() => {
    dispatch({type: 'INCREASE_PAGE', payload: null});
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productsState: state,
        loadProducts,
        resetProducts,
        increasePage,
        productsDispatch: dispatch,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
