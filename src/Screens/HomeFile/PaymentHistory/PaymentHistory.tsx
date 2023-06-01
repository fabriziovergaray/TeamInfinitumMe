
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import { globalStyles } from '../../../Theme/Styles'
import BarHome from '../../../Components/BarHome'
import RenderPays from '../../../Components/RenderPays'
import ButtonComponent from '../../../Components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesPaymentHistory } from './Styles'
import { windowHeight } from '../../../constans/constans'
import { RootStackParamsHome } from '../../../Navigation/HomeNavigator'
import { AuthContext } from '../../../Context/AuthContext'
interface Props extends StackScreenProps<RootStackParamsHome, 'PaymentHistory'> { }
const PaymentHistory = ({ navigation }: Props) => {
    const { tipo_usuario } = useContext(AuthContext)
    return (
        <View style={{ flex: 1 }}>
            <BarHome />
            <View style={{ ...globalStyles.globalMarginHorizontal }}>
                <HeaderComponent title={tipo_usuario === 'Alumno' ? 'Historial de Pagos' : 'Historial de Pagos recibidos'} color='#000' fontSize={30} />
            </View>
            <View style={{ flex: 1 }}>
                <RenderPays />
            </View>
            <View style={{ height: windowHeight / 10 - 10 }} />
            <View style={{ backgroundColor: 'red', ...globalStyles.globalMarginHorizontal }}>
                <ButtonComponent activeOpacity={0.8} styleText={{ ...stylesPaymentHistory.textButton }} style={{ ...stylesPaymentHistory.styleButton }} onPress={() => tipo_usuario === 'Alumno' ? navigation.navigate('HomeScreen') : navigation.navigate('HomeTeacherScreen')} title='Terminar' />
            </View>
        </View>
    )
}


export default PaymentHistory
