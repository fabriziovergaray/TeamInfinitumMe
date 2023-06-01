import React, { useContext, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { useAnimation } from '../Hooks/useAnimation';

interface Props {
  uri: number;
  style?: StyleProp<ImageStyle>;
  viewStyle?: StyleProp<ViewStyle>
}
const FadeinImageSrc = ({ uri, style, viewStyle }: Props) => {

  const { fadeIn, opacity } = useAnimation();
  const [IsLoading, setIsLoading] = useState(true);
  const FinishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View style={[viewStyle, { justifyContent: 'center', alignItems: 'center' }]}>
      {IsLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          size={30}
          color={'#084F6A'}
        />
      )}
      <Animated.Image
        resizeMode={'contain'}
        source={uri}
        onLoadEnd={FinishLoading}
        style={{ ...(style as any), opacity }}
      />
    </View>
  );
};

export default FadeinImageSrc;
