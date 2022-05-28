import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

//helper
import {ACTIVE_OPACITY, screenWidth} from '../../helper/utils';

//styles
import styles from './styles';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {getNews} from '../../redux/action/ApiAction';

export default function HomeScreen({navigation, route}) {
  const dispatch = useDispatch();

  const [isRefresh, setIsRefresh] = useState(false);

  const newsData = useSelector(state => state.apiReducer.news);
  const searchData = useSelector(state => state.apiReducer.searchData);
  const searchEnable = useSelector(state => state.stateReducer.searchEnable);

  const newsLoading = useSelector(state => state.apiReducer.newsLoading);
  const searchLoading = useSelector(
    state => state.apiReducer.searchNewsLoading,
  );

  useEffect(() => {}, [searchEnable]);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  //handle on clicked news item
  function handleNewsClicked(item, index) {
    navigation.navigate('news-details', {newsData: item});
  }

  //pull-to-refresh
  function onRefresh() {
    setIsRefresh(true);
    dispatch(getNews());
    setIsRefresh(false);
  }

  //render news item
  function _renderItem({item, index}) {
    return (
      <TouchableOpacity
        onPress={() => handleNewsClicked(item, index)}
        activeOpacity={ACTIVE_OPACITY}
        style={styles.newsItemContainer}>
        <ImageBackground
          source={{uri: item.urlToImage}}
          style={styles.imageBackground}
          blurRadius={1}
          resizeMode="cover">
          <Text numberOfLines={2} style={styles.textTitle}>
            {item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  function ListEmptyComponent() {
    return newsLoading == true || searchLoading == true ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    ) : (
      <View style={styles.nodataFound}>
        <Text style={{fontSize: 18, color: 'black'}}>No data found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={{flex: 1}}>
        <FlatList
          refreshing={isRefresh}
          onRefresh={onRefresh}
          data={searchEnable == true ? searchData : newsData}
          keyExtractor={(item, index) => String(index)}
          renderItem={_renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmptyComponent}
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>
    </SafeAreaView>
  );
}
