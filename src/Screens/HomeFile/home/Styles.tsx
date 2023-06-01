import { StyleSheet } from "react-native";
import { width } from "../../../constans/constans";

export const stylesHome = StyleSheet.create({
    button: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        backgroundColor: '#0000ff',
        borderRadius: 10,
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        fontWeight: '700',
        color: 'white',
        fontSize: 18,
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    },
    inputField: {
        color: '#000',
        fontSize: 15,
        borderRadius: 0,
        borderWidth: 0,
        elevation: 0
    },
    inputFieldIOS: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 4,
    },
    containerHeadHome: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        width: '100%'
    },
    containerMap: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: 'red'
    },
    containerFooter: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff'
    },
    centerIconBtn: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex: 1
    },
    btnmethodsPay: {
        shadowColor: "#000",
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        backgroundColor: '#fff',
        elevation: 8,
        width: (width / 3) - 23,
        marginHorizontal: 3
    }
});