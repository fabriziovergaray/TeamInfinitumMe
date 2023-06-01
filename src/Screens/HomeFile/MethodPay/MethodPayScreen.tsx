import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import ButtonComponent from '../../../Components/ButtonComponent'
import { ColorPagoEfectivo, ColorPlin, ColorYape, width } from '../../../constans/constans'
import { globalStyles } from '../../../Theme/Styles'
import BarHome from '../../../Components/BarHome'
import { stylesMethodPay } from './Styles'
import teamInfinitum from '../../../Api/teamInfinitum'
import { metodosbs2 } from '../../../constans/constans'
import { AuthContext } from '../../../Context/AuthContext'
interface Metodos {
    yape: { id: number; value: string };
    plin: { id: number; value: string };
    efectivo: { id: number; value: string };
}

const MethodPayScreen = () => {
    const { userType } = useContext(AuthContext)
    const [metodos, setMetodos] = useState<Metodos>({
        yape: { id: metodosbs2.yape.id, value: metodosbs2.yape.value },
        plin: { id: metodosbs2.plin.id, value: metodosbs2.plin.value },
        efectivo: { id: metodosbs2.efectivo.id, value: metodosbs2.efectivo.value }
    });
    const handleMethodToggle = (method: keyof Metodos) => {
        setMetodos(prevMetodos => {
            const methodObj = prevMetodos[method];
            const updatedValue = methodObj.value === 'Seleccionado' ? '' : 'Seleccionado';
            const updatedMethod = { ...methodObj, value: updatedValue };
            return { ...prevMetodos, [method]: updatedMethod };
        });
    };
    const updatedMethodPay = async () => {
        const data = new FormData()
        data.append('metodos', JSON.stringify(metodos))
        data.append('profesorId', userType?.id)
        try {
            const response = await teamInfinitum.post('prueba', data, { headers: { 'Content-Type': 'multipart/form-data' } })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <BarHome />
            <View style={{ ...stylesMethodPay.container, ...globalStyles.globalMarginHorizontal }}>
                <HeaderComponent title=' Mis métodos de Pago' fontSize={30} color='#000' />
                <HeaderComponent title=' Método de Pago' fontSize={20} color='#000' />
                <Text style={stylesMethodPay.text}>Cambia tu método de pago</Text>
                <Text style={stylesMethodPay.text}>(Vizualizaras el tipo de pago que aceptas)</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                    <ButtonComponent colorText={metodos.yape.value != '' ? "#fff" : '#000'} style={{ ...stylesMethodPay.btnmethodsPay, backgroundColor: metodos.yape.value != '' ? ColorYape : '#fff' }} title='Yape' onPress={() => handleMethodToggle('yape')} />
                    <ButtonComponent colorText={metodos.plin.value != '' ? '#fff' : '#000'} style={{ ...stylesMethodPay.btnmethodsPay, backgroundColor: metodos.plin.value != '' ? ColorPlin : '#fff' }} title='Plin' onPress={() => handleMethodToggle('plin')} />
                    <ButtonComponent colorText={metodos.efectivo.value != '' ? '#fff' : '#000'} style={{ ...stylesMethodPay.btnmethodsPay, backgroundColor: metodos.efectivo.value != '' ? ColorPagoEfectivo : '#fff' }} title='Efectivo' onPress={() => handleMethodToggle('efectivo')} />
                </View>
            </View>
            <View style={{ ...globalStyles.globalMarginHorizontal, flex: 1, justifyContent: 'flex-end', marginBottom: 15 }}>
                <ButtonComponent style={{ ...stylesMethodPay.btnStyles }} title='Guardar' onPress={updatedMethodPay} />
            </View>
        </View>
    )
}



export default MethodPayScreen
