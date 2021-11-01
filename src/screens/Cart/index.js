import ProductItem from '@components/ProductItem';
import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();

  const {
    cart: {data},
    loading,
    error,
  } = useSelector(state => ({
    cart: state.cart,
    loading: !!state.loading['LOAD_CART'],
    error: !!state.error['LOAD_CART'],
  }));

  const loadCart = useCallback(() => {
    dispatch({type: 'LOAD_CART_REQUEST'});
  }, [dispatch]);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const handleRenderItem = ({...rest}) => {
    return <ProductItem {...rest} />;
  };

  const handleKeyExtractor = item => `${item.id}`;

  return (
    <FlatList
      data={data}
      renderItem={handleRenderItem}
      keyExtractor={handleKeyExtractor}
    />
  );
};

export default Cart;
