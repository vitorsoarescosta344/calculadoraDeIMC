import React, {useEffect} from 'react';
import {Button, Dimensions, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import styles from './styles';

let screen = Dimensions.get('screen').width - 35;
let moveSize = screen / 45;

export default function LinearProgressComponent({value}) {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  useEffect(() => {
    console.log(moveSize);
    offset.value = withSpring(value * moveSize);
  }, [value]);

  return (
    <>
      <LinearGradient
        style={styles.gradientBar}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.4, 0.55, 0.66, 0.88, 1]}
        colors={['#00aff0', '#00a64f', '#ffdf00', '#ffd900', '#cd4800']}>
        <Animated.View style={[styles.cursorStyle, animatedStyles]} />
      </LinearGradient>
    </>
  );
}
