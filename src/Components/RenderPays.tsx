import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Pays } from '../Temp/PaysApi'
import PaysContent from '../Screens/HomeFile/PaymentHistory/Pays'

const RenderPays = () => {
    const { pagos_enviados } = Pays
    return (
        <View>
            <View style={{ marginTop: 10, justifyContent: 'flex-start' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={pagos_enviados}
                    keyExtractor={p => p.id_profesor}
                    renderItem={({ item }) => (
                        <PaysContent pagos_enviados={item} />
                    )}
                />
            </View>
        </View>
    )
}


export default RenderPays


