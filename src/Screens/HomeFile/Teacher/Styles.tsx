import { StyleSheet } from "react-native";
import { width } from "../../../constans/constans";

export const StylesEditInfo = StyleSheet.create({
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
})