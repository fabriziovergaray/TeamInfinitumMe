import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FadeinImageSrc from './FadeInImageSrc'
import { useNavigation } from '@react-navigation/native'
interface Props {
    titulo: string,
    color?: string,
    icon?: string,
    pantalla_: string
}
const HeadAuthComponent = ({ titulo, color = 'gray', icon = 'chevron-back-outline', pantalla_  }: Props) => {
    const navigation = useNavigation<any>()
    return (
        <View style={{ ...stylesHere.headContainer, justifyContent: 'center', }}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate(pantalla_)}>
                <Icon name={icon} size={23} color={'#000'} />
            </TouchableOpacity>
            <View style={{ flex: 1 }} >
                <FadeinImageSrc uri={require('../assets/logoTeamInfinitumBlack.png')} style={{ height: 40 }} />
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{ ...stylesHere.textStyle, color }}>{titulo}</Text>
            </View>
        </View>
    )
}
const stylesHere = StyleSheet.create({
    headContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 18,
        color: 'gray',
        fontWeight: 'bold'
    }
})
export default HeadAuthComponent
