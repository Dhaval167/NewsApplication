import React from 'react';

//navigation-library
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen
import HomeScreen from '../screens/home';
import NewsDetails from '../screens/home/news-details/news-details';

//components
import SearchBar from '../components/search';

//const
const AppStack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="home">
        <AppStack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerTitle: 'Top Headline',
            headerRight: SearchBar,
          }}
        />
        <AppStack.Screen
          name="news-details"
          component={NewsDetails}
          options={{headerTitle: 'News Details'}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
