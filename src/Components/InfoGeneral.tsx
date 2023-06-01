import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderComponent } from './HeaderComponent'
import { ProfesorCercano } from '../Interfaces/appInterfaces'

interface Props {
    profesor: ProfesorCercano
}

const InfoGeneral = ({ profesor }: Props) => {
    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <HeaderComponent title='Profesor a tiempo completo' color='#000' fontSize={20} />
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 20 }}>
                        <Text style={{ ...stylesHere.textStandar }}>Especialidad</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}>
                        <Text style={{ ...stylesHere.textStandar }}>Matematica</Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: '#EAF6F6', paddingHorizontal: 20, marginVertical: 15 }}>
                <HeaderComponent title='Descripción (de lo que sabe el profe)' color='#000' fontSize={20} />
                <View>
                    <Text style={{ ...stylesHere.textStandar }}>Descripcion</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginVertical: 15 }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={{ ...stylesHere.textStandar }}>
                        Costo de clase (por hora)
                    </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{ ...stylesHere.textStandar, fontWeight: 'bold', fontSize: 20 }}>
                        S/. {profesor.tarifa}
                    </Text>
                </View>

            </View>
        </View>
    )
}

const stylesHere = StyleSheet.create({
    textStandar: {
        fontSize: 18,
        color: 'gray'
    }
})
export default InfoGeneral
