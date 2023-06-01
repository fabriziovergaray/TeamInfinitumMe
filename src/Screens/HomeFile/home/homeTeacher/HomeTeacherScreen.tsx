import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import BarHome from '../../../../Components/BarHome';
import { HeaderComponent } from '../../../../Components/HeaderComponent';
import ButtonComponent from '../../../../Components/ButtonComponent';
import { stylesHomeTeacher } from './Styles'
import { RADIO, windowHeight } from '../../../../constans/constans';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import ModalVanilla from '../../../../Components/ModalVanilla';
import { RootStackParamsHome } from '../../../../Navigation/HomeNavigator';
interface Props extends StackScreenProps<RootStackParamsHome, 'HomeTeacherScreen'> { }
const HomeTeacherScreen = ({ navigation }: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)


    return (
        <View style={{ flex: 1, }}>
            <View style={{ ...stylesHomeTeacher.containerHeadHome }}>
                <BarHome />
            </View>
            <View style={{ ...stylesHomeTeacher.containerMap, height: (windowHeight * 0.5) }}>
                {/* Coloca aquí tu código del mapa */}
            </View>
            <View style={{ flex: 1, }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'transparent' }}>
                    <View style={{ ...stylesHomeTeacher.containerFooter, marginTop: windowHeight * 0.4 }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={{ ...stylesHomeTeacher.container, flexDirection: 'row', alignItems: 'center' }}>
                                <HeaderComponent title='Alertas de servicio' fontSize={25} color='#000' />
                                <View style={{ ...stylesHere.IconStyle }}>
                                    <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => { setIsVisible(!isVisible), console.log('hola') }} activeOpacity={0.7}>
                                        <Icon name='ellipsis-vertical-outline' size={35} color={'#000'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <ActivityIndicator style={{ ...stylesHere.loadingStyle }} size={'large'} color={'blue'} />
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ ...stylesHere.textStyle }}>Solicitudes cercanas </Text>
                                        <Text style={{ ...stylesHere.textStyle, fontWeight: 'bold', color: '#000' }}>15 solicitudes</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <ButtonComponent styleText={{ ...stylesHere.textButton }} style={{ ...stylesHere.btnStyles }} onPress={() => console.log('Hola')} title='Detener' />
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
            <ModalVanilla close={() => setIsVisible(false)} isVisible={isVisible} />

        </View>
    );
};

const stylesHere = StyleSheet.create({
    btnStyles: {
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        width: RADIO * 100
    },
    textStyle: {
        fontSize: 18
    },
    IconStyle: {
        flex: 1,
        alignItems: 'flex-end'
    },
    loadingStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue'
    }
})
export default HomeTeacherScreen
