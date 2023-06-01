import React, { useState } from 'react'
import { View, Text, ScrollView, Platform, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import { globalStyles } from '../../../Theme/Styles'
import ButtonComponent from '../../../Components/ButtonComponent'
import { StylesEditInfo } from './Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TextInputIconComponent from '../../../Components/TextInputIconComponent'
import Icon from 'react-native-vector-icons/Ionicons'
import ModalComponent from '../../../Components/ModalComponent'
import { ColorPagoEfectivo, ColorPlin, ColorYape, height, width } from '../../../constans/constans'
import BarHome from '../../../Components/BarHome'
import LoadingModal from '../../../Components/LoadingModal'
import { RootStackParamsHome } from '../../../Navigation/HomeNavigator'
interface Metodos {
    yape: string;
    plin: string;
    efectivo: string;
}
interface Props extends StackScreenProps<RootStackParamsHome, 'EditInfoTeacher'> { }
const EditInfo = ({ navigation, route, }: Props) => {
    const { top } = useSafeAreaInsets()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState(false);
    const [metodos, setMetodos] = useState<Metodos>({
        yape: '',
        plin: '',
        efectivo: ''
    })
    const handleAceptarCursos = (cursosSeleccionados: string[]) => {
        console.log('Cursos seleccionados:', cursosSeleccionados);
    };
    const emular = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigation.goBack()
        }, 5000);
    }
    console.log({ isLoading })
    const handleMethodToggle = (method: keyof Metodos) => {
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
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: Platform.OS === 'ios' ? top + 20 : top + 10 }}>
                <BarHome />
            </View>
            <View style={{ ...globalStyles.globalMarginHorizontal }}>
                <HeaderComponent title={`Tu informacion como profesor `} color='#000' />
                <View>
                    <HeaderComponent title='Método de pago' color='#000' fontSize={20} />
                    <Text style={{ ...globalStyles.text }}>Elja uno o más metodos de pago de tu preferencia</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                        <ButtonComponent colorText={metodos.yape != '' ? "#fff" : '#000'} style={{ ...StylesEditInfo.btnmethodsPay, backgroundColor: metodos.yape != '' ? ColorYape : '#fff' }} title='Yape' onPress={() => handleMethodToggle('yape')} />
                        <ButtonComponent colorText={metodos.plin != '' ? '#fff' : '#000'} style={{ ...StylesEditInfo.btnmethodsPay, backgroundColor: metodos.plin != '' ? ColorPlin : '#fff' }} title='Plin' onPress={() => handleMethodToggle('plin')} />
                        <ButtonComponent colorText={metodos.efectivo != '' ? '#fff' : '#000'} style={{ ...StylesEditInfo.btnmethodsPay, backgroundColor: metodos.efectivo != '' ? ColorPagoEfectivo : '#fff' }} title='Efectivo' onPress={() => handleMethodToggle('efectivo')} />
                    </View>
                </View>
                <View>
                    <HeaderComponent title='¿Qué materias enseñas?' fontSize={20} color='#000' />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ ...globalStyles.text }}>Elije una o mas materias según tu especialidad (Esto permitira que el alumno interesado por la materia te pueda elegir)</Text>
                        </View>
                        <TouchableOpacity onPress={() => setIsVisible(true)} activeOpacity={0.5} style={{ justifyContent: 'center' }}>
                            <Icon name='add-circle-outline' size={40} color={'#000'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <HeaderComponent title='Establece un precio de enseñanza' color='#000' fontSize={20} />
                    <TextInputIconComponent keyboardType='numeric' placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Establece un precio a negociar' style={[StylesEditInfo.inputField, Platform.OS == 'ios' && StylesEditInfo.inputFieldIOS]} underlineColorAndroid="#000" />
                </View>
                <View>
                    <HeaderComponent title='Descripción breve de tus habilidades en tu materia' color='#000' fontSize={20} />
                    <TextInputIconComponent placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Descripción breve de tus habilidades en tu materia' style={[StylesEditInfo.inputField, Platform.OS == 'ios' && StylesEditInfo.inputFieldIOS]} underlineColorAndroid="#000" />
                </View>

                <ButtonComponent style={{ ...globalStyles.buttonsAuth, marginVertical: 10 }} title='Terminar' onPress={emular} />
            </View>

            <ModalComponent isVisible={isVisible} closeModal={() => setIsVisible(false)}
                handleAceptar={handleAceptarCursos} />
            <LoadingModal closeModal={() => setIsLoading(false)} isVisible={isLoading} title='Cargando' subtitle='Actualizando Informacion' />
        </ScrollView>
    )
}
export default EditInfo


