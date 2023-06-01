import React from 'react';
import {
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    Text,
    StyleSheet,
    TextInput,
    TextInputProps,
} from 'react-native';

interface Props extends TextInputProps {
    style?: StyleProp<ViewStyle>;
}

const TextInputComponent = ({ style, ...props }: Props) => {
    return (

        <>
            <TextInput
                style={[stylesHere.textInputComponent, style]}
                {...props}
            />
        </>


    );
};

const stylesHere = StyleSheet.create({
    textInputComponent: {
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        elevation: 1,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default TextInputComponent;
