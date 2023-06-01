import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    checked?: boolean ,
    onPress: () => void
}
const Checkbox = ({ checked, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
            {checked ? (
                <Icon name="checkbox-outline" size={20} color="green" />
            ) : (
                <Icon name="square-outline" size={20} color="gray" />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        width: 19,
        height: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Checkbox;