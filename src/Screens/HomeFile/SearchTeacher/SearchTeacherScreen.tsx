import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import BarHome from '../../../Components/BarHome'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import { globalStyles } from '../../../Theme/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonComponent from '../../../Components/ButtonComponent'
import { MetodosPago } from '../../../Interfaces/appInterfaces'
import { ColorPagoEfectivo, ColorPlin, ColorYape, width } from '../../../constans/constans'
import { stylesSearchTeacher } from './Styles'
import RenderNearTeacher from '../../../Components/RenderNearTeacher'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsHome } from '../../../Navigation/HomeNavigator'
interface Props extends StackScreenProps<RootStackParamsHome, 'SearchTeacher'> { }
const SearchTeacherScreen = ({ navigation }: Props) => {
    const [metodos, setMetodos] = useState<MetodosPago>({
        yape: '',
        plin: '',
        efectivo: ''
    })
    const handleMethodToggle = (method: keyof MetodosPago) => {
        setMetodos(prevMetodos => {
            if (prevMetodos[method] === 'valor actualizado') {
                return {
                    ...prevMetodos,
                    [method]: ''
                };
            } else {
                return {
                    ...prevMetodos,
                    [method]: 'valor actualizado'
                };
            }
        });
    };
    return (
        <View style={{ flex: 1 }}>
            <View>
                <BarHome />
            </View>
            <View style={{ ...globalStyles.globalMarginHorizontal }}>
                <View >
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} style={{ justifyContent: 'center' }}>
                            <Icon name='chevron-back-outline' size={25} color={'#000'} />
                        </TouchableOpacity>
                        <View style={{ bottom: 2 }}>
                            <HeaderComponent title='Profesores cerca de ti' fontSize={25} color='#000' />
                        </View>
                    </View>
                    <View style={{ ...stylesSearchTeacher.containerPay }}>
                        <ButtonComponent colorText={metodos.yape != '' ? "#fff" : '#000'} style={{ ...stylesSearchTeacher.btnmethodsPay, backgroundColor: metodos.yape != '' ? ColorYape : '#fff' }} title='Yape' onPress={() => handleMethodToggle('yape')} />
                        <ButtonComponent colorText={metodos.plin != '' ? '#fff' : '#000'} style={{ ...stylesSearchTeacher.btnmethodsPay, backgroundColor: metodos.plin != '' ? ColorPlin : '#fff' }} title='Plin' onPress={() => handleMethodToggle('plin')} />
                        <ButtonComponent colorText={metodos.efectivo != '' ? '#fff' : '#000'} style={{ ...stylesSearchTeacher.btnmethodsPay, backgroundColor: metodos.efectivo != '' ? ColorPagoEfectivo : '#fff' }} title='Efectivo' onPress={() => handleMethodToggle('efectivo')} />
                    </View>
                </View>
            </View>
            <View style={{ ...globalStyles.globalMarginHorizontal, flex: 1 }}>
                <RenderNearTeacher />
            </View>
            <View style={{ height: 100, opacity: 0.1 }} />
            <View style={{ ...globalStyles.globalMarginHorizontal, ...stylesSearchTeacher.containerBtnCancel }}>
                <ButtonComponent colorText='#000' style={{ ...stylesSearchTeacher.btnCancelarBusqueda }} title='Cancelar Busqueda' onPress={() => console.log('Hola')} />
            </View>
        </View>
    )
}


export default SearchTeacherScreen
