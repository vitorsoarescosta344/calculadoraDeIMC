import {Dimensions, StyleSheet} from 'react-native';
import colorPallet from '../../constants/colorPallet';

export default StyleSheet.create({
  inputContainerStyle: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#7c7c7c',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 20,
    width: Dimensions.get('screen').width * 0.4,
    height: 40,
    borderRadius: 20,
    backgroundColor: colorPallet.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
