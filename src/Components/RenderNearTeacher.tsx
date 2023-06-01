import React from 'react'
import { FlatList, View } from 'react-native'
import TeachersNear from '../Screens/HomeFile/SearchTeacher/TeachersNear'
import { profesores } from '../Temp/ProfesoresApi'

const RenderNearTeacher = () => {
    return (
        <View
            style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ marginTop: 15 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={profesores}
                    keyExtractor={p => p.id}
                    renderItem={({ item }) => (
                        <TeachersNear profesor={item} />
                    )}
                />
            </View>
        </View>
    )
}

export default RenderNearTeacher
