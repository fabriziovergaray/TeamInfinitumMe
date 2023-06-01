import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import ButtonComponent from '../../../Components/ButtonComponent';
import { HeaderComponent } from '../../../Components/HeaderComponent';
import { globalStyles } from '../../../Theme/Styles';
import FadeinImageSrc from '../../../Components/FadeInImageSrc';
import { RADIO, windowHeight } from '../../../constans/constans';
import { RootStackParamsAuth } from '../../../Navigation/AuthNavigator';
import { stylesIndentifyRegisterScreen } from './Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//En vez de una interface use type para poner dos tipos de navegacion ya que era incompatible usando interface
/* type Props = StackScreenProps<RootStackParams, 'IdentifyScreen'>
 */
interface Props extends StackScreenProps<RootStackParamsAuth, 'IdentifyRegister'> { }

const IdentifyRegister = ({ navigation }: Props) => {
    const { top } = useSafeAreaInsets()

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ ...stylesIndentifyRegisterScreen.divGroup1, top: top + 20 }}>
                <View style={{ ...globalStyles.globalCenter, marginTop: 10 }}>
                    <Text style={stylesIndentifyRegisterScreen.textStyle}>¡Encuentra a tu profe cerca!</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <FadeinImageSrc uri={require('../../../assets/logoCompleto_Negro.png')} style={{ width: 200, height: 200 }} />
                </View>
            </View>

            <View style={{ ...globalStyles.globalMarginHorizontal, flex: 1 }}>
                <View style={globalStyles.globalCenter}>
                    <HeaderComponent title='Registrarse' color='#000' />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonComponent activeOpacity={0.7} title='Como Alumno' onPress={() => { navigation.navigate('RegisterStudentScreen', { tipo: 'Alumno' }) }} style={stylesIndentifyRegisterScreen.btnStudent} />
                    <ButtonComponent activeOpacity={0.7} colorText='#000' style={stylesIndentifyRegisterScreen.btnTeacher} title='Como Profesor' onPress={() => navigation.navigate('RegisterTeacherScreen', { tipo: 'Profesor' })} />
                </View>
                <View style={{ marginTop: RADIO * 5 }}>
                    <View style={{ ...globalStyles.globalCenter, margin: 10 }}>
                        <Text style={stylesIndentifyRegisterScreen.textStyle}>¿Tienes una Cuenta?</Text>
                    </View>
                    <TouchableOpacity style={{ ...globalStyles.globalCenter }} onPress={() => navigation.navigate('IdentifyScreen')}>
                        <Text style={{ ...stylesIndentifyRegisterScreen.textStyle, fontWeight: 'bold' }}>¡Ingresa Aqui!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ ...stylesIndentifyRegisterScreen.divGroup2, height: windowHeight / 3 - 10 }}>
                <View style={{ marginTop: 10, flex: 1, justifyContent: 'flex-end' }}>
                    <FadeinImageSrc uri={require('../../../assets/persona.png')} style={{ width: 100, height: 200 }} />
                </View>
            </View>

        </ScrollView>
    );
};

export default IdentifyRegister;
