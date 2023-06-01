import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import ButtonComponent from '../../../Components/ButtonComponent';
import { HeaderComponent } from '../../../Components/HeaderComponent';
import { globalStyles } from '../../../Theme/Styles';
import FadeinImageSrc from '../../../Components/FadeInImageSrc';
import { RADIO, windowHeight } from '../../../constans/constans';
import { RootStackParamsAuth } from '../../../Navigation/AuthNavigator';
import { stylesIndentifyScreen } from './Styles'
//En vez de una interface use type para poner dos tipos de navegacion ya que era incompatible usando interface
/* type Props = StackScreenProps<RootStackParams, 'IdentifyScreen'>
 */
interface Props extends StackScreenProps<RootStackParamsAuth, 'IdentifyScreen'> { }
const IdentifyScreen = ({ navigation }: Props) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ ...stylesIndentifyScreen.divGroup1, top: RADIO * 10 }}>
                <View style={{ ...globalStyles.globalCenter, marginTop: 10 }}>
                    <Text style={stylesIndentifyScreen.textStyle}>¡Encuentra a tu profe cerca!</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <FadeinImageSrc uri={require('../../../assets/logoCompleto_Negro.png')} style={{ width: 200, height: 200 }} />
                </View>
            </View>
            <View style={{ ...globalStyles.globalMarginHorizontal }}>
                <View style={globalStyles.globalCenter}>
                    <HeaderComponent title='Identificate' color='#000' />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonComponent activeOpacity={0.7} title='Soy Alumno' onPress={() => { navigation.navigate('LoginScreen', { tipo: 'Alumno' }) }} style={stylesIndentifyScreen.btnStudent} />
                    <ButtonComponent activeOpacity={0.7} colorText='#000' style={stylesIndentifyScreen.btnTeacher} title='Soy Profesor' onPress={() => navigation.navigate('LoginScreen', { tipo: 'Profesor' })} />
                </View>
                <View style={{ marginTop: RADIO * 30 }}>
                    <View style={{ ...globalStyles.globalCenter, marginBottom: 10 }}>
                        <Text style={stylesIndentifyScreen.textStyle}>¿Eres Nuevo?</Text>
                    </View>
                    <TouchableOpacity style={{ ...globalStyles.globalCenter }} onPress={() => navigation.navigate('IdentifyRegister')}>
                        <Text style={{ ...stylesIndentifyScreen.textStyle, fontWeight: 'bold' }}>¡Registrate Aqui!</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ ...stylesIndentifyScreen.divGroup2, height: windowHeight / 3 - 20 }}>
                <View style={{ marginTop: 10, flex: 1, justifyContent: 'flex-end' }}>
                    <FadeinImageSrc uri={require('../../../assets/persona.png')} style={{ width: 100, height: 200 }} />
                </View>
            </View>
        </ScrollView>


    );
};

export default IdentifyScreen;
