import React from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../Theme/Styles'
interface Props {
  title: string;
  color?: string;
  fontSize?: number,
  styleText?: StyleProp<TextStyle>,
  marginBottom?: number
}
export const HeaderComponent = ({ title, color = '#5856D6', fontSize = 35, styleText, marginBottom = 20 }: Props) => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top + 20, marginBottom: marginBottom }}>
      <Text style={[globalStyles.title, { color, fontSize }, styleText]}>{title}</Text>
    </View>
  );
};
