import axiosInstance from '@utils/axiosInstance';
import React, {
  useCallback,
  useEffect,
  useState,
  useReducer,
  useContext,
} from 'react';
import * as RNLocalize from 'react-native-localize';
import {Alert, FlatList, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import Config from 'react-native-config';
import Typography from '@components/Typography';
import Loader from '@components/Loader';
import FastImage from 'react-native-fast-image';
import * as I18n from 'i18n-js';
import Ratting from '@components/Ratting';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
import Button from '@components/Button';
import {ProductsContext} from 'src/contexts/productsProvider';

const ITEM_HEIGHT = 300;

const wait = time => new Promise(resolve => setTimeout(resolve, time));

interface Props {}

const Home = ({}: Props) => {
  const {
    productsState: {page, loading, error, data},
    productsDispatch,
  } = useContext(ProductsContext);
  const [columnNum, setColumnNum] = useState(1);
  const {colors} = useTheme();

  const loadProducts = useCallback(async currentPage => {
    try {
      productsDispatch({type: 'LOAD_PRODUCTS_REQUEST', payload: null});
      const res = await axiosInstance.get(
        `660/products?_page=${currentPage}&_limit=5`,
      );
      await wait(3000);
      productsDispatch({type: 'LOAD_PRODUCTS_SUCCESS', payload: res.data});
    } catch (err) {
      productsDispatch({type: 'LOAD_PRODUCTS_FAIL', payload: err});
    }
  }, []);

  useEffect(() => {
    loadProducts(page);
  }, [loadProducts, page]);

  const renderItem = useCallback(({item}) => {
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
            {`Column Number: ${columnNum}`}
          </Typography>
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
        </View>
      </View>
    );
  }, []);

  const keyExtractor = item => `${item.id}`;

  const onEndReached = useCallback(() => {
    productsDispatch({type: 'INCREASE_PAGE_REQUEST', payload: null});
  }, []);

  const itemSeparatorComponent = () => {
    return <View style={{height: 1, backgroundColor: colors.border}} />;
  };

  const onRefresh = useCallback(() => {
    productsDispatch({type: 'RESET_PAGE_REQUEST', payload: null});
    loadProducts(1);
  }, [loadProducts]);

  console.warn('Home page rerender');

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
        extraData={columnNum}
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

export default Home;
