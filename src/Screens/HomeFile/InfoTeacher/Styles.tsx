import { StyleSheet } from "react-native";

export const StylesInfoTeacher = StyleSheet.create({
    containerBtnInfoGeneral: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 17
    },
    textBtn: {
        fontWeight: 'bold',
        fontSize: 20
    },
    StyleBtnAceptar: {
        backgroundColor: 'blue',
        borderRadius: 10,
        height: 60
    },
    StyleBtnRegresar: {
        borderRadius: 10,
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'blue'
    },
    StyleButton: {
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        height: 60,
        width: 150,
        position: 'absolute',
        bottom: 15,
        right: 0,

    },

    imagenStyle: {
        borderRadius: 200,
        width: 100,
        height: 100
    },
    containerRating: {
        backgroundColor: '#fff',
        borderRadius: 150,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
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
        justifyContent: 'center'
    },
    styleHeadOptionsInfo: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: 'blue'
    },
    containerName: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contanerHearInforTeacher: {
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'blue'
    },
    textStyleInactive: {
        fontSize: 18,
        color: 'gray',
        fontWeight: 'bold',
    },
    textStyleActive: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
    },
    textStandar: {
        fontSize: 18,
        color: 'gray'
    }
})

export const StylesOpinionsUsers = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerOpinion: {
        marginBottom: 20,
        padding: 5
    },
    textTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    textOpinionStyle: {
        fontSize: 15,
        color: '#000'
    },
    btnReaccionarStyle: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue'
    },
    containerFotoPerfil: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    containerBtnReaccionar: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})