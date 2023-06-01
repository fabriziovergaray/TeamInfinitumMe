import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  TextStyle,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  colorText?: string;
  activeOpacity?: number;
  styleText?: StyleProp<TextStyle>;

}

const ButtonComponent = ({ onPress, title, style, colorText = '#fff', activeOpacity = 0.5, styleText }: Props) => {
  return (
    <TouchableOpacity
      style={[stylesHere.buttonComponent, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      <Text style={[stylesHere.buttonText, { color: colorText }, styleText]}>{title}</Text>
    </TouchableOpacity >
  );
};

const stylesHere = StyleSheet.create({
  buttonComponent: {
    height: 45,
    width: 200,
    backgroundColor: '#000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ButtonComponent;
