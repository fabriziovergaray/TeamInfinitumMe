import { StyleSheet } from 'react-native'
export const stylesAccount = StyleSheet.create({
    containerDetalleInfo: {
        flex: 1,
        alignItems: 'flex-end'
    },
    containerInfo: {
        flexDirection: 'row',
        marginVertical: 10
    },
    textSyle: {
        color: '#000',
        fontSize: 18
    },
    containerRating: {
        backgroundColor: '#fff',
        borderRadius: 150,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    containerChilldren: {
        width: 25,
        height: 25,
        backgroundColor: 'blue',
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerFather: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    imagenStyle: {
        borderRadius: 200,
        width: 120,
        height: 120
    },
})