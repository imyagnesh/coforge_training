import * as I18n from 'i18n-js';
import Ratting from '@components/Ratting';
import Typography from '@components/Typography';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Button from '@components/Button';
import {useDispatch, useSelector} from 'react-redux';

interface Props {}

const ProductItem = ({item}: Props) => {
  const dispatch = useDispatch();

  const cartItem = useSelector(state =>
    state.cart.data.find(x => x.id === item.id),
  );

  const addToCart = useCallback(
    payload => {
      dispatch({type: 'ADD_TO_CART_REQUEST', payload});
    },
    [dispatch],
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 10,
      }}>
      <View>
        <FastImage
          source={{
            uri: item.image,
          }}
          style={{
            height: 200,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={{paddingHorizontal: 8}}>
        <Typography variant="h3" numberOfLines={1}>
          {item.title}
        </Typography>
        <Typography variant="body3" numberOfLines={2}>
          {item.description}
        </Typography>
        <Typography variant="body3" numberOfLines={2}>
          {I18n.toCurrency(item.price)}
        </Typography>
        <Ratting ratting={item.rating} />
        {!!cartItem ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Button
              style={{flex: 1}}
              title="-"
              onPress={() =>
                addToCart({...cartItem, quantity: cartItem.quantity - 1})
              }
            />
            <Typography variant="h1" style={{paddingHorizontal: 20}}>
              {cartItem.quantity}
            </Typography>
            <Button
              style={{flex: 1}}
              title="+"
              onPress={() =>
                addToCart({...cartItem, quantity: cartItem.quantity + 1})
              }
            />
          </View>
        ) : (
          <Button
            title="Add To Cart"
            onPress={() => addToCart({...item, quantity: 1})}
          />
        )}
      </View>
    </View>
  );
};

export default ProductItem;
