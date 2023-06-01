import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import BarHome from '../../../Components/BarHome'
import { globalStyles } from '../../../Theme/Styles'
import ButtonComponent from '../../../Components/ButtonComponent'
import { stylesSecurity } from './Styles'
const SecurityScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <BarHome />
            <View style={{ ...globalStyles.globalMarginHorizontal }}>
                <HeaderComponent title='Seguridad y protección' color='#000' fontSize={32} />
                <Text style={{ ...globalStyles.text }}>¿Con quién deseas ponerte en contacto?</Text>
                <ButtonComponent styleText={{ ...stylesSecurity.textBtn }} style={{ ...stylesSecurity.stylesButton }} title='Policia' onPress={() => console.log('Policia')} />
                <ButtonComponent styleText={{ ...stylesSecurity.textBtn }} style={{ ...stylesSecurity.stylesButton }} title='Ambulancia' onPress={() => console.log('Ambulancia')} />
                <ButtonComponent styleText={{ ...stylesSecurity.textBtn }} style={{ ...stylesSecurity.stylesButton }} title='Enviar Mensaje a soporte' onPress={() => console.log('Mensaje a soporte')} />
                <ButtonComponent styleText={{ ...stylesSecurity.textBtn }} style={{ ...stylesSecurity.stylesButton }} title='Consejos de seguridad' onPress={() => console.log('Consejos de seguridad')} />
            </View>
            <View style={{ ...globalStyles.globalMarginHorizontal, flex: 1, justifyContent: 'flex-end' }}>
                <ButtonComponent styleText={{ ...stylesSecurity.textBtn, color: '#fff' }} style={{ ...stylesSecurity.stylesButton, backgroundColor: 'blue' }} title='Terminar' onPress={() => console.log('Consejos de seguridad')} />
            </View>
        </View>
    )
}

export default SecurityScreen
