import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from '@rneui/themed';
import styles from './styles';

export default function Container({children}) {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header
        centerComponent={{text: 'Calcular IMC', style: styles.headerText}}
      />
      <View style={{padding: 15, flex: 1}}>{children}</View>
    </SafeAreaProvider>
  );
}
