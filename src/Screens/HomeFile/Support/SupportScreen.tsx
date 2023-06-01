import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import BarHome from '../../../Components/BarHome'
import { globalStyles } from '../../../Theme/Styles'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import TextInputComponent from '../../../Components/TextInputComponent'
import { stylesSupport } from './Styles'
const SupportScreen = () => {
    return (
        <View>
            <BarHome />
            <View style={{ ...globalStyles.globalMarginHorizontal }}>
                <HeaderComponent title='Nuestro Soporte' color='#000' fontSize={30} />
                <Text style={{ ...globalStyles.text }}>Aquí podrás reportar algún incidente que hayas tenido con la aplicacion y con tu servicio como profesor o alumno</Text>

                <HeaderComponent title='Danos una descripción de tu consulta' color='#000' fontSize={25} />

                <TextInputComponent placeholderTextColor={'gray'} underlineColorAndroid={"#000"} style={[Platform.OS === 'ios' ? stylesSupport.inputFieldIOS : stylesSupport.inputField]} placeholder='Danos una descripcionss de tu incidente,sé precisa y detallanos el suceso' />
            </View>
        </View>
    )
}

export default SupportScreen
