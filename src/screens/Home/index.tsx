import axiosInstance from '@utils/axiosInstance';
import React, {useCallback, useEffect, useState} from 'react';
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

interface Props {}

const Home = ({}: Props) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const {colors} = useTheme();

  const loadProducts = useCallback(async currentPage => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(
        `660/products?_page=${currentPage}&_limit=5`,
      );
      setData(val => [...val, ...res.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts(page);
  }, [loadProducts, page]);

  const renderItem = ({item}) => {
    return (
      <RectButton
        onPress={() => Alert.alert('Hi')}
        style={{flex: 1, flexDirection: 'row', paddingVertical: 8}}>
        <View style={{flex: 1}}>
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
        <View style={{flex: 2, paddingHorizontal: 8}}>
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
      </RectButton>
    );
  };

  const keyExtractor = item => `${item.id}`;

  const onEndReached = () => {
    setPage(val => val + 1);
  };

  const itemSeparatorComponent = () => {
    return <View style={{height: 1, backgroundColor: colors.border}} />;
  };

  const ListHeaderComponent = () => {
    if (loading) {
      return <Loader />;
    }
    return null;
  };

  if (error) {
    return (
      <Typography variant="error">
        {error.response.data || error.message}
      </Typography>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={itemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      removeClippedSubviews
      maxToRenderPerBatch={8}
      initialNumToRender={8}
      windowSize={11}
      onEndReached={onEndReached}
    />
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
