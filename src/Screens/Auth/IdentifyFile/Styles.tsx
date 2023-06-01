import { StyleSheet } from 'react-native'
import { RADIO } from '../../../constans/constans'
export const stylesIndentifyScreen = StyleSheet.create({
    btnTeacher: {
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 2,
        width: '100%',
        marginTop: 15

    },
    btnStudent: {
        borderRadius: 5,
        backgroundColor: 'blue',
        width: '100%'
    },
    textStyle: {
        fontSize: 15,
        color: 'gray'
    },
    divGroup1: {
        bottom: RADIO * 10,
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1
    },
    divGroup2: {
        bottom: RADIO * 10,
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1
    }

})