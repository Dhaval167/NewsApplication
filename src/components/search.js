import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

//icons
import Icon from 'react-native-vector-icons/FontAwesome';
import {ACTIVE_OPACITY} from '../helper/utils';

//redux
import {useDispatch} from 'react-redux';
import {searchNews} from '../redux/action/ApiAction';
import {searchEnable} from '../redux/action/state-action';

export default function SearchBar({}) {
  const dispatch = useDispatch();

  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('bitcoin');

  useEffect(() => {
    if (searchText != '') {
      dispatch(searchNews(searchText));
    }
  }, [searchText]);

  function handleSearch() {
    dispatch(searchEnable(true));
    setIsSearch(true);
  }

  function handleClose() {
    dispatch(searchEnable(false));
    setIsSearch(false);
  }

  return isSearch == false ? (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={handleSearch}>
      <Icon name="search" size={18} />
    </TouchableOpacity>
  ) : (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Search by category"
        onChangeText={txt => setSearchText(txt)}
      />

      <TouchableOpacity style={{width: '10%'}} onPress={handleClose}>
        <Icon name="close" size={18} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textInput: {
    height: '100%',
    width: '80%',
    marginLeft: '10%',
  },
});
