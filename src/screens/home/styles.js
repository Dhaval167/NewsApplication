import {StyleSheet} from 'react-native';
import {screenWidth} from '../../helper/utils';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  newsItemContainer: {
    height: 150,
    width: screenWidth * 0.45,
    margin: 10,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '2%',
  },
  nodataFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
