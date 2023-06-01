import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Opinion } from '../../../Interfaces/appInterfaces'
import RatingStars from '../../../Components/RatingStar';
import FadeinImageSrc from '../../../Components/FadeInImageSrc';
import { StylesOpinionsUsers } from './Styles'
interface Props {
    opinion: Opinion;
    totalOpiniones: string;
}

const OpinionsUsers = ({ opinion, totalOpiniones }: Props) => {
    return (
        <View style={{ ...StylesOpinionsUsers.container }}>
            <View style={{ ...StylesOpinionsUsers.containerOpinion }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ ...StylesOpinionsUsers.containerFotoPerfil }}>
                        <FadeinImageSrc style={{ ...StylesOpinionsUsers.imgStyle }} uri={require('../../../assets/logoTeamInfinitum.png')} />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ ...StylesOpinionsUsers.textOpinionStyle }}>{opinion.nombre}</Text>
                    </View>
                    <View style={{ ...StylesOpinionsUsers.containerBtnReaccionar }}>
                        <TouchableOpacity activeOpacity={0.7} style={{ ...StylesOpinionsUsers.btnReaccionarStyle }}>
                            <Text style={{ fontSize: 25, color: 'blue' }}>☻</Text>
                            <Text>+{opinion.reacciones}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ ...StylesOpinionsUsers.textTitleStyle }}>"{opinion.titulo}"</Text>
                <Text style={{ ...StylesOpinionsUsers.textOpinionStyle }}>{opinion.opinion}</Text>
                <View style={{ marginTop: 10 }}>
                    <RatingStars rating={opinion.calificacion} color='yellow' fontSize={18} />
                </View>
            </View>
        </View>
    )
}

const stylesHere = StyleSheet.create({
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
export default OpinionsUsers
