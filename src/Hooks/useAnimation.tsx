import React, {useRef} from 'react';
import {Animated, Easing, PanResponder} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const pocition = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const fadeIn = (duration:number=300) => {
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

  const StartMovingPosition = (
    initPosition: number,
    duration: number = 300,
  ) => {
    pocition.setValue(initPosition);
    Animated.timing(pocition, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
      
    ],{useNativeDriver:false}),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver:false}, // Back to zero
      ).start();
    },
  });

  return {
    fadeIn,
    fadeOut,
    opacity,
    pocition,
    StartMovingPosition,
    panResponder,
    pan,
  };
};
