import { StyleSheet } from "react-native";
import { width } from "../../../constans/constans";

export const stylesMethodPay = StyleSheet.create({
    btnStyles: {
        backgroundColor: 'blue',
        borderRadius: 10,
        width: '100%',
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
})