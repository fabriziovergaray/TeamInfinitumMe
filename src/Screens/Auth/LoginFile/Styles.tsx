import { StyleSheet } from "react-native";
import { RADIO } from "../../../constans/constans";

export const stylesLoginScreen = StyleSheet.create({
    btnIngresar: {
        borderRadius: 5,
        backgroundColor: 'blue',
        width: '100%',
        marginTop: 15,
        height: RADIO * 50,

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
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
    },
    divGroup2: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    saludoHead: {
        marginTop: 10,
        alignItems: 'flex-end',
        flex: 1
    },
    TextInputStyle: {
        borderRadius: 0,
        marginVertical: 10,
        color: 'black'

    },
    ContainerIconLogin: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '50%'
    }
})