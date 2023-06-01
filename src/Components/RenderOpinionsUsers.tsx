import React from 'react'
import { FlatList, Text, View } from 'react-native'
import OpinionsUsers from '../Screens/HomeFile/InfoTeacher/OpinionsUsers'
import { opiniones } from '../Temp/OpinionesApi'
import { HeaderComponent } from './HeaderComponent'
const RenderOpinionsUsers = () => {
    const { totalOpiniones, opiniones: opinionesData } = opiniones
    return (
        <View
            style={{ justifyContent: 'center', flex: 1, }}>
            <View style={{ marginTop: 50 }}>
                <HeaderComponent title={`${totalOpiniones} Opiniones positivas`} color='#000' fontSize={18} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={opinionesData}
                    keyExtractor={p => p.id}
                    renderItem={({ item }) => (
                        <OpinionsUsers totalOpiniones={totalOpiniones} opinion={item} />
                    )}
                />
            </View>
        </View>
    )
}


export default RenderOpinionsUsers
