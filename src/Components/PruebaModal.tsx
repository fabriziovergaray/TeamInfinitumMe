import React from 'react'
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderComponent } from './HeaderComponent'
import HorizontalSlider from './HorizontalSlide'
import TextInputIconComponent from './TextInputIconComponent'
import ButtonComponent from './ButtonComponent'
import useCursosDisponibles from '../Hooks/useCursosDisponibles'
import { globalStyles } from '../Theme/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
const ContenidoFooter = () => {
    const { curso } = useCursosDisponibles()
    return (
        <View style={{ borderRadius: 20, paddingHorizontal: 20, backgroundColor: '#fff' }}>
            <View style={{ ...styles.container }}>
                <HeaderComponent title='Método de Pago' fontSize={25} color='#000' />
                <Text style={{ ...styles.text }}>Elije uno o más métodos de pago</Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <HeaderComponent title='¿Qué aprenderemos hoy?' color='#000' fontSize={25} />
                        <Text style={{ ...globalStyles.text }}>Elije una materia para encontrar un profesor</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                        <Icon name='add-circle-outline' size={23} style={{ fontSize: 40, color: 'blue', fontWeight: 'bold' }} />
                    </TouchableOpacity>
                </View>
                <HorizontalSlider curso={curso} />
            </View>
            <View>
                <HeaderComponent title='Ofrecer precio al profesor' fontSize={25} color='#000' />
                <TextInputIconComponent placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Establece un precio para negociar' style={[styles.inputField, Platform.OS == 'ios' && styles.inputFieldIOS]} underlineColorAndroid="#000" />
            </View>
            <View style={{ alignItems: 'center', marginTop: 5, marginBottom: 15 }}>
                <ButtonComponent style={{ ...styles.button }} title='¡Encontrar profesor!' onPress={() => { }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        backgroundColor: '#0000ff',
        borderRadius: 10,
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        fontWeight: '700',
        color: 'white',
        fontSize: 18,
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    },
    inputField: {
        color: '#000',
        fontSize: 15,
        borderRadius: 0,
        borderWidth: 0,
        elevation: 0
    },
    inputFieldIOS: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 4,
    },
});

export default ContenidoFooter
