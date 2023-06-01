import React from 'react'
import { View, Text } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import zxcvbn from 'zxcvbn';

interface Props {
    contrasena: string
}
const PasswordStrengthMeter = ({ contrasena }: Props) => {
    const testResult = zxcvbn(contrasena)
    const num = testResult.score * 100 / 4
    const ProgressColor = () => {
        switch (testResult.score) {
            case 0:
                return '#080808';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none'
        }
    }

    const createPasswordLabel = () => {
        switch (testResult.score) {
            case 0:
                return 'Ingrese una contraseña';
            case 1:
                return 'Debil';
            case 2:
                return 'Aceptable';
            case 3:
                return 'Buena';
            case 4:
                return 'Muy buena';
            default:
                return ''
        }
    }

    const changePasswordColor = () => ({
        width: `${num}%`,
        backgroundColor: ProgressColor(),
        height: 7,

    })
    return (
        <View>
            <ProgressBar style={changePasswordColor()}></ProgressBar>
            <Text style={{ color: ProgressColor() }}>Seguridad de la contraseña: {createPasswordLabel()}</Text>
        </View>

    )
}
export default PasswordStrengthMeter;
