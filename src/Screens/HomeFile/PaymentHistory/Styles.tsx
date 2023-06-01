import { StyleSheet } from "react-native";

export const stylesPays = StyleSheet.create({
    textPayment: {
        fontSize: 18,
        color: '#000'
    },
    montoStyle: {
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        backgroundColor: '#fff',
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 10
    },
    styleImage: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})
export const stylesPaymentHistory = StyleSheet.create({
    styleButton: {
        backgroundColor: 'blue',
        borderRadius: 10,
        width: '100%',
        position: 'absolute',
        bottom: 15

    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})