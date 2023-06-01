import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    View
    , Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
const BarHome = () => {
    const navigation = useNavigation();

    const handleOpenDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    const { top } = useSafeAreaInsets()
    return (
        <View style={{ ...stylesHere.container, marginTop: top + 20, }}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleOpenDrawer}>
                <Icon name='menu-outline' color={'black'} size={35} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='locate-outline' color={'black'} size={30} />
                <Text style={{ fontWeight: '400', fontSize: 12, color: 'black', marginStart: 8 }}>Santiago de Surco 15039, Av.</Text>
            </View>
            <Icon name='person-circle-outline' color={'black'} size={40} />
        </View>
    )
}
const stylesHere = StyleSheet.create({
    container: {
        flexDirection: 'row', marginBottom: 20, backgroundColor: 'white', borderRadius: 9, marginHorizontal: 10, height: 50, justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'
    }
})
export default BarHome
