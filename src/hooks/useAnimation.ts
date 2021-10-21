import {useRef, useState} from 'react';
import {Animated} from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};

export default useAnimation;
