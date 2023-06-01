import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PagosEnviados } from '../../../Interfaces/appInterfaces'
import ButtonComponent from '../../../Components/ButtonComponent'
import FadeinImageSrc from '../../../Components/FadeInImageSrc'
import { globalStyles } from '../../../Theme/Styles'
import { windowWidth } from '../../../constans/constans'
import { stylesPays } from './Styles'
interface Props {
    pagos_enviados: PagosEnviados
}
const PaysContent = ({ pagos_enviados }: Props) => {

    return (
        <View style={{ flex: 1, ...globalStyles.globalMarginHorizontal, marginBottom: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <FadeinImageSrc style={{ ...stylesPays.styleImage }} uri={require('../../../assets/logoTeamInfinitum.png')} />
                </View>
                <View style={{ width: windowWidth / 2 - 15, padding: 15 }}>
                    <Text style={{ ...stylesPays.textPayment }}>Pago enviado a:</Text>
                    <Text style={{ ...stylesPays.textPayment, fontWeight: 'bold' }}>{pagos_enviados.para}</Text>
                </View>
                <View style={{ ...stylesPays.btnContainer }}>
                    <View style={{ ...stylesPays.montoStyle }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'blue' }}>
                            S/ {pagos_enviados.monto}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


export default PaysContent
