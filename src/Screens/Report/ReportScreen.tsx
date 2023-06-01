import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import BarHome from '../../Components/BarHome'
import { HeaderComponent } from '../../Components/HeaderComponent'
import TextInputComponent from '../../Components/TextInputComponent'
import { globalStyles } from '../../Theme/Styles'
import { stylesReportScreen } from './Styles'
import ButtonComponent from '../../Components/ButtonComponent'
import { windowWidth } from '../../constans/constans'
const ReportScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <BarHome />
            <View style={{ ...globalStyles.globalMarginHorizontal }}>
                <View>
                    <HeaderComponent title='Reportar un problema' fontSize={25} color='#000' />
                    <Text style={{ ...globalStyles.text }}>Aqui podras reportar al algun incidente que hayas tenido con la aplicacion y con tu servicio como profesor</Text>
                </View>
                <View>
                    <HeaderComponent title='Indicanos tu incidente' fontSize={25} color='#000' />
                    <TextInputComponent autoCapitalize='none' placeholder='Danos una descripcion de tu incidente' underlineColorAndroid={'#000'} style={[Platform.OS === 'ios' ? stylesReportScreen.inputFieldIOS : stylesReportScreen.inputField]} />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row', marginBottom: 15, ...globalStyles.globalMarginHorizontal }}>
                <View style={{ marginHorizontal: 10 }}>
                    <ButtonComponent styleText={{ ...stylesHere.textBtnStyle }} colorText='#000' style={{ width: windowWidth / 3, ...stylesHere.ButtonCancelStyle }} onPress={() => { }} title='Cancelar' />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <ButtonComponent styleText={{ ...stylesHere.textBtnStyle }} style={{ width: windowWidth / 2, ...stylesHere.ButtonSendStyle }} onPress={() => { }} title='Enviar reporte' />
                </View>
            </View>
        </View>
    )
}

const stylesHere = StyleSheet.create({
    ButtonCancelStyle: {
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderRadius: 10,
        borderWidth: 1

    },
    ButtonSendStyle: {
        backgroundColor: 'blue',
        borderRadius: 10
    },
    textBtnStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default ReportScreen
