import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@components/Typography';
import Loader from '@components/Loader';
import {useTheme} from '@react-navigation/native';
import Button from '@components/Button';
import ProductItem from '@components/ProductItem';

interface Props {}

const Home = ({}: // productsState: {page, loading, error, data},
// loadProductsRequest,
// loadProductsSuccess,
// loadProductsFail,
// increasePageRequest,
// resetPageRequest,
Props) => {
  const [columnNum, setColumnNum] = useState(1);
  const {colors} = useTheme();
  // const {
  //   productsState: {page, loading, error, data},
  //   loadProducts,
  //   increasePage,
  //   resetProducts,
  // } = useContext(ProductsContext);

  const {
    products: {data},
    cartData,
    loading,
    error,
  } = useSelector(state => ({
    products: state.products,
    cartData: state.cart.data,
    loading: !!state.loading['LOAD_PRODUCTS'] || !!state.loading['LOAD_CART'],
    error: state.error['LOAD_PRODUCTS'] || state.error['LOAD_CART'],
  }));

  const dispatch = useDispatch();

  const loadProducts = useCallback(() => {
    dispatch({type: 'LOAD_PRODUCTS_REQUEST'});
    dispatch({type: 'LOAD_CART_REQUEST'});
  }, [dispatch]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const renderItem = ({...rest}) => {
    return <ProductItem {...rest} />;
  };

  const keyExtractor = item => `${item.id}`;

  const onEndReached = useCallback(() => {
    dispatch({type: 'INCREASE_PAGE', payload: null});
  }, [dispatch]);

  const itemSeparatorComponent = () => {
    return <View style={{height: 1, backgroundColor: colors.border}} />;
  };

  const onRefresh = useCallback(() => {
    dispatch({type: 'RESET_PAGE', payload: null});
  }, [dispatch]);

  const ListFooterComponent = () => {
    if (loading) {
      return <Loader />;
    }
    return null;
  };

  if (error) {
    return (
      <Typography variant="error">
        {error?.response?.data || error?.message}
      </Typography>
    );
  }

  // return (
  //   <View>
  //     <FlatList
  //       horizontal
  //       data={data}
  //       renderItem={renderItem}
  //       keyExtractor={keyExtractor}
  //       showsHorizontalScrollIndicator={false}
  //       snapToAlignment="center"
  //       snapToInterval={304}
  //       decelerationRate="fast"
  //       ItemSeparatorComponent={() => (
  //         <View
  //           style={{
  //             width: 8,
  //           }}
  //         />
  //       )}
  //       contentContainerStyle={{
  //         margin: 8,
  //       }}
  //     />
  //     <View style={{flex: 1}} />
  //   </View>
  // );

  return (
    <>
      <Button
        title="Chage Page View"
        onPress={() => {
          setColumnNum(val => (val === 1 ? 2 : 1));
        }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        extraData={cartData}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        removeClippedSubviews
        maxToRenderPerBatch={8}
        initialNumToRender={8}
        windowSize={11}
        onEndReached={onEndReached}
        refreshing={loading}
        onRefresh={onRefresh}
      />
    </>
  );

  // return (
  //   <ScrollView>
  //     {data.map(x => {
  //       return (
  //         <RectButton
  //           onPress={() => Alert.alert('Hi')}
  //           style={{flex: 1, flexDirection: 'row'}}>
  //           <View style={{flex: 1}}>
  //             <FastImage
  //               source={{
  //                 uri: x.image,
  //               }}
  //               style={{
  //                 height: 200,
  //               }}
  //               resizeMode="contain"
  //             />
  //           </View>
  //           <View style={{flex: 2, paddingHorizontal: 8}}>
  //             <Typography variant="h3" numberOfLines={1}>
  //               {x.title}
  //             </Typography>
  //             <Typography variant="body3" numberOfLines={2}>
  //               {x.description}
  //             </Typography>
  //             <Typography variant="body3" numberOfLines={2}>
  //               {I18n.toCurrency(x.price)}
  //             </Typography>
  //             <Ratting ratting={x.rating} />
  //           </View>
  //         </RectButton>
  //       );
  //     })}
  //   </ScrollView>
  // );
};

// const mapStateToProps = state => {
//   return {
//     productsState: state.products,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     loadProductsRequest: () =>
//       dispatch({type: 'LOAD_PRODUCTS_REQUEST', payload: null}),
//     loadProductsSuccess: payload =>
//       dispatch({type: 'LOAD_PRODUCTS_SUCCESS', payload}),
//     loadProductsFail: payload =>
//       dispatch({type: 'LOAD_PRODUCTS_FAIL', payload}),
//     increasePageRequest: () => dispatch({type: 'INCREASE_PAGE', payload: null}),
//     resetPageRequest: () => dispatch({type: 'RESET_PAGE', payload: null}),
//   };
// };

export default Home;
