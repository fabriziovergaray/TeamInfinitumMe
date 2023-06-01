import React from 'react';
import {
    StyleProp,
    ViewStyle,
    Text,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends TextInputProps {
    icon?: string;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void
}

const TextInputIconComponent = ({ onPress, icon = '', style, ...rest }: Props) => {
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={onPress} style={{
                ...styles.icon
            }}>
                <Icon name={icon} size={20} />
            </TouchableOpacity>
            <TextInput  {...rest} style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    icon: {
        marginRight: 10,
        position: 'absolute',
        right: 0,
        zIndex: 1
    },
    input: {
        flex: 1,
    },
});

export default TextInputIconComponent;






