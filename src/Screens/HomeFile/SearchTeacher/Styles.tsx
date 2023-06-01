import { StyleSheet } from "react-native";
import { width } from "../../../constans/constans";

export const stylesSearchTeacher = StyleSheet.create({
    containerPay: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
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
    btnCancelarBusqueda: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
        width: '100%',
        height: 60
    },
    containerBtnCancel: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginBottom: 15
    }
})

export const StylesTeachersNear = StyleSheet.create({
    containerFather: {
        marginVertical: 15,
        borderRadius: 5,
        backgroundColor: '#f0f2fa',
        padding: 5
    },
    container: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
        borderRadius: 15,
        padding: 30,
    },
    containerRow: {
        flexDirection: 'row',
    },
    textTeacherNear: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    containerStar: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerTimerPrice: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})