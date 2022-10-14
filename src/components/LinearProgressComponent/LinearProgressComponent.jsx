import React, {useEffect} from 'react';
import {Button, Dimensions, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import styles from './styles';

export default function LinearProgressComponent({value}) {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  useEffect(() => {
    let screen = Dimensions.get('screen').width - 35;
    let moveSize = screen / 45;

    offset.value = withSpring(value * moveSize);
  }, [value]);

  return (
    <>
      <LinearGradient
        style={styles.gradientBar}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00aff0', '#00a64f', '#ffdf00', '#ffd900', '#cd4800']}>
        <Animated.View style={[styles.cursorStyle, animatedStyles]} />
      </LinearGradient>
    </>
  );
}
