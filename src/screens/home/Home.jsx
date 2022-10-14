import {useTheme} from '@rneui/themed';
import {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearProgressComponent from '../../components/LinearProgressComponent';
import colorPallet from '../../constants/colorPallet';
import textStyles from '../../constants/textStyles';
import Container from '../../layout/Container';
import colorText from '../../utils/colorText';
import styles from './styles';

export default function Home() {
  const [imc, setImc] = useState(0);
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [color, setColor] = useState('gray');

  function CalcImc() {
    const alturaM = altura / 100;
    const imcFormula =
      parseFloat(peso) / (parseFloat(alturaM) * parseFloat(alturaM));

    setImc(parseFloat(imcFormula));
  }

  useEffect(() => {
    setColor(colorText(imc));
  }, [imc]);

  return (
    <>
      <Container>
        <View style={{alignSelf: 'center', marginTop: 80}}>
          <Text style={[textStyles.textSemiBold, {color: color, fontSize: 72}]}>
            {imc.toFixed(2)}
          </Text>
        </View>
        <LinearProgressComponent value={imc} />
        <View style={styles.inputContainerStyle}>
          <TextInput
            onChangeText={text => setPeso(text.replace(',', '.'))}
            placeholder={'Peso ex: 90,5'}
            style={[textStyles.textSemiBold, {color: 'black'}]}
          />
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            onChangeText={text => setAltura(text)}
            placeholder={'Altura em cm ex: 190'}
            style={[textStyles.textSemiBold, {color: 'black'}]}
          />
        </View>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => CalcImc()}>
          <Text style={textStyles.textBold}>Calcular</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}
