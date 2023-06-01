import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonComponent from '../../../../Components/ButtonComponent'
import { globalStyles } from '../../../../Theme/Styles'
import { HeaderComponent } from '../../../../Components/HeaderComponent'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HeadAuthComponent from '../../../../Components/HeadAuthComponent'
import { courses } from '../../../../Temp/ApiCourses'
import Icon from 'react-native-vector-icons/Ionicons'
interface ContentCoursesProps {
    cursosSeleccionados: string[];
    toggleCursoSeleccionado: (curso: string) => void;
    headerAuth?: boolean;
    header?: boolean;
    title: string;
    colorTitle?: string;
    colorAuth?: string
}
const ContentCourses = ({ cursosSeleccionados, toggleCursoSeleccionado, headerAuth = true, header = true, title = 'Agregar titulo', colorTitle = '#000', colorAuth = '#000' }: ContentCoursesProps) => {
    const { top } = useSafeAreaInsets()



    return (
        <View style={{ ...globalStyles.globalMarginHorizontal, top: top + 20, flex: 1 }} >
            {headerAuth && <HeadAuthComponent titulo='Registro' color={colorAuth} />}
            {header && <HeaderComponent title={title} color={colorTitle} />}
            <Text>Elija una de las especialidades</Text>
            <View style={{ flex: 1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={courses}
                    keyExtractor={(p) => p.id}

                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.8} style={{ ...stylesHere.btnSyle, opacity: cursosSeleccionados.includes(item.name) ? 0.3 : 1, backgroundColor: item.background, flexDirection: 'row' }} onPress={() => toggleCursoSeleccionado(item.name)}>
                            <View style={{ marginLeft: 15 }}>
                                <Icon name={item.icon} size={40} color={"#fff"} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 25, color: '#fff' }}> {item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    )
}

const stylesHere = StyleSheet.create({
    btnSyle: {
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,

    }
})
export default ContentCourses
