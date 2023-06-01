import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParamsAuth } from '../../../Navigation/AuthNavigator';

interface Props extends StackScreenProps<RootStackParamsAuth, 'RegisterScreen'> { }

const RegisterScreen = ({ navigation }: Props) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>
                    Volver al Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen
