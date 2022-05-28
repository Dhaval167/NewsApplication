import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../../components/text/custom-text';

//styles
import styles from './news-details-styles';

export default function NewsDetails({navigation, route}) {
  const newsData = route.params.newsData;

  useEffect(() => {
    //console.log('news-details screen', newsData);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
        <Image
          style={{height: 300, width: '100%'}}
          source={{uri: newsData.urlToImage}}
        />

        <CustomText style={{fontWeight: 'bold', fontSize: 18}}>
          {newsData.title}
        </CustomText>

        <CustomText>Author: {newsData.author}</CustomText>

        <CustomText>{newsData.description}</CustomText>
        <CustomText>{newsData.description}</CustomText>

        {/* Extra space for proper visibility */}
        <View style={{marginBottom: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
