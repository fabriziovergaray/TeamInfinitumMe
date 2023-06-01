import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, View, Platform, ScrollView } from 'react-native';
import BarHome from '../../../Components/BarHome';
import { HeaderComponent } from '../../../Components/HeaderComponent';
import { globalStyles } from '../../../Theme/Styles';
import ButtonComponent from '../../../Components/ButtonComponent';
import HorizontalSlider from '../../../Components/HorizontalSlide';
import TextInputIconComponent from '../../../Components/TextInputIconComponent';
import Icon from 'react-native-vector-icons/Ionicons'
import { stylesHome } from './Styles'
import { ColorPagoEfectivo, ColorPlin, ColorYape, metodosbs2, windowHeight } from '../../../constans/constans';
import ModalComponent from '../../../Components/ModalComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { courses } from '../../../Temp/ApiCourses'
import { RootStackParamsHome } from '../../../Navigation/HomeNavigator';
interface Props extends StackScreenProps<RootStackParamsHome, 'HomeScreen'> { }
export interface MetodosPago {
    yape: string;
    plin: string;
    efectivo: string;
}
const HomeScreen = ({ navigation }: Props) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
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

    const handleAceptarCursos = (cursosSeleccionados: string[]) => {
        console.log('Cursos seleccionados:', cursosSeleccionados);
    };
    return (
        <View style={{ flex: 1, }}>
            <View style={{ ...stylesHome.containerHeadHome }}>
                <BarHome />
            </View>
            <View style={{ ...stylesHome.containerMap, height: (windowHeight * 0.5) }}>
                {/* Coloca aquí tu código del mapa */}
            </View>
            <View style={{ flex: 1, }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'transparent' }}>
                    <View style={{ ...stylesHome.containerFooter, marginTop: windowHeight * 0.4 }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={stylesHome.container}>
                                <HeaderComponent title='Método de Pago' fontSize={25} color='#000' />
                                <Text style={stylesHome.text}>Elije uno o más métodos de pago</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                                    <ButtonComponent colorText={metodos.yape != '' ? "#fff" : '#000'} style={{ ...stylesHome.btnmethodsPay, backgroundColor: metodos.yape != '' ? ColorYape : '#fff' }} title='Yape' onPress={() => handleMethodToggle('yape')} />
                                    <ButtonComponent colorText={metodos.plin != '' ? '#fff' : '#000'} style={{ ...stylesHome.btnmethodsPay, backgroundColor: metodos.plin != '' ? ColorPlin : '#fff' }} title='Plin' onPress={() => handleMethodToggle('plin')} />
                                    <ButtonComponent colorText={metodos.efectivo != '' ? '#fff' : '#000'} style={{ ...stylesHome.btnmethodsPay, backgroundColor: metodos.efectivo != '' ? ColorPagoEfectivo : '#fff' }} title='Efectivo' onPress={() => handleMethodToggle('efectivo')} />
                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <HeaderComponent title='¿Qué aprenderemos hoy?' color='#000' fontSize={25} />
                                        <Text style={globalStyles.text}>Elije una materia para encontrar un profesor</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setIsVisible(true)} activeOpacity={0.7} style={{ ...stylesHome.centerIconBtn }}>
                                        <Icon name='add-circle-outline' size={23} style={{ fontSize: 40, color: 'blue', fontWeight: 'bold' }} />
                                    </TouchableOpacity>
                                </View>
                                <HorizontalSlider curso={courses} />
                            </View>
                            <View>
                                <HeaderComponent title='Ofrecer precio al profesor' fontSize={25} color='#000' />
                                <TextInputIconComponent placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Establece un precio para negociar' style={[stylesHome.inputField, Platform.OS == 'ios' && stylesHome.inputFieldIOS]} underlineColorAndroid="#000" />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: 5, marginBottom: 15 }}>
                                <ButtonComponent style={stylesHome.button} title='¡Encontrar profesor!' onPress={() => navigation.navigate('SearchTeacher')} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <ModalComponent colorTitle='#000' title='Todos los cursos' headerAuth={false} isVisible={isVisible} closeModal={() => setIsVisible(false)}
                handleAceptar={handleAceptarCursos} borderRadius={40} marginHorizontal={10} marginVertical={60} />
        </View>
    );
};

export default HomeScreen
