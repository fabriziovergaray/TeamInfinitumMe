import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
    return (
        <View style={stylesHere.center}>
            <Text>
                Loading
            </Text>
            <ActivityIndicator size={20} color={'red'} />
        </View>
    )
}
const stylesHere = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})
export default Loading
