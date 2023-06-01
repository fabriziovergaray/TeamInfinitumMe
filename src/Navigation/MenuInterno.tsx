import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import FadeinImage from '../Components/FadeInImage';
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../Context/AuthContext';
import { DOMAIN, windowHeight } from '../constans/constans';
import ButtonComponent from '../Components/ButtonComponent';
import FadeinImageSrc from '../Components/FadeInImageSrc';
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    const { user, logOut, tipo_usuario, userType } = useContext(AuthContext)
    
    return (
        <DrawerContentScrollView style={{ flex: 1 }}>
            <View >
                <View style={stylesHere.avatarContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        {userType?.foto_perfil === null ?
                            <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')} activeOpacity={0.7}>
                                <FadeinImageSrc style={{ ...stylesHere.avatar }} viewStyle={{ justifyContent: 'center', alignItems: 'flex-start' }} uri={require('../assets/ImageDefault.jpg')} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')} activeOpacity={0.7}>
                                <FadeinImage viewStyle={{ justifyContent: 'center', alignItems: 'flex-start' }} style={{ ...stylesHere.avatar }} uri={`${DOMAIN + '/' + userType?.foto_perfil}`} />
                            </TouchableOpacity>
                        }

                        <TouchableOpacity onPress={logOut} style={{ ...stylesHere.containerBtnLogOut }}>
                            <View style={{ ...stylesHere.backgroundBtnLogOut }}>
                                <Icon name='enter-outline' size={25} color={'#fff'} style={{ padding: 5 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>
                        {userType?.nombres} {userType?.apellidos}
                    </Text>
                    <Text style={{ color: '#000' }}>
                        {userType?.tipo_de_usuario} {userType?.grado_academico}
                    </Text>
                </View>
                {/*Opciones de menu */}
                <View style={stylesHere.menuContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => tipo_usuario === 'Alumno' ? navigation.navigate('HomeScreen') : navigation.navigate('HomeTeacherScreen')}
                        style={stylesHere.menubtn}>
                        <Icon color={'#000'} name='home-outline' size={25} />
                        <Text style={[stylesHere.menutext, { paddingHorizontal: 15 }]}>
                            Inicio
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('PaymentHistory')}
                        style={stylesHere.menubtn}>
                        <Icon color={'#000'} name='cash-outline' size={25} />
                        <Text style={[stylesHere.menutext, { paddingHorizontal: 15 }]}>
                            Mis Pagos realizados
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('MethodPayScreen')}
                        style={stylesHere.menubtn}>
                        <Icon color={'#000'} name='card-outline' size={25} />
                        <Text style={[stylesHere.menutext, { paddingHorizontal: 15 }]}>
                            Métodos de pago
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SecurityScreen')}
                        activeOpacity={0.7}
                        style={stylesHere.menubtn}>
                        <Icon color={'#000'} name='key-outline' size={25} />

                        <Text style={[stylesHere.menutext, { paddingHorizontal: 15 }]}>
                            Seguridad y Protección
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SupportScreen')}
                        activeOpacity={0.7}
                        style={stylesHere.menubtn}>
                        <Icon color={'#000'} name='construct-outline' size={25} />

                        <Text style={[stylesHere.menutext, { paddingHorizontal: 15 }]}>
                            Soporte
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HelpScreen')}
                        activeOpacity={0.7}
                        style={stylesHere.menubtn}>
                        <Icon color={'#000'} name='information-circle-outline' size={25} />
                        <Text style={[stylesHere.menutext, { paddingHorizontal: 15 }]}>
                            Ayuda
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{ flex: 1, height: windowHeight / 4 - 20, justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity>
                    <ButtonComponent styleText={{ color: 'blue', fontWeight: 'bold' }} onPress={() => { }} title='Cambiar a profesor' style={{ ...stylesHere.btnStyleCambiar }} />
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
const stylesHere = StyleSheet.create({
    btnStyleCambiar: {
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10
    },
    backgroundBtnLogOut: {
        backgroundColor: '#000',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBtnLogOut: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'flex-end'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    avatarContainer: {
        marginTop: 10,
        marginHorizontal: 20
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 20,


    },
    menutext: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    menubtn: {
        flexDirection: 'row',
        marginVertical: 20,
    },
});
export default MenuInterno
