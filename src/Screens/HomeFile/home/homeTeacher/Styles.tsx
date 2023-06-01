import { StyleSheet } from "react-native";
import { width } from "../../../../constans/constans";

export const stylesHomeTeacher = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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

});