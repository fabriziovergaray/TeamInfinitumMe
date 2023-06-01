import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProfesorCercano } from '../../../Interfaces/appInterfaces';
import { globalStyles } from '../../../Theme/Styles';
import RatingStars from '../../../Components/RatingStar';
import { StylesTeachersNear } from './Styles'
import { useNavigation } from '@react-navigation/native';
interface Props {
    profesor: ProfesorCercano;
}
const TeachersNear = ({ profesor }: Props) => {
    const navigation = useNavigation<any>()
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('InfoTeacherScreen', { profesor: profesor }) }} activeOpacity={0.7} style={{ ...StylesTeachersNear.containerFather }}>
            <View style={{ ...StylesTeachersNear.containerRow }}>
                <Text style={{ ...globalStyles.text, fontSize: 18, color: '#000' }}>
                    {profesor.nombre} esta cerca
                </Text>
                <View style={{ ...StylesTeachersNear.containerTimerPrice }}>
                    <Text
                        style={{
                            ...globalStyles.text,
                            ...StylesTeachersNear.textTeacherNear
                        }}>
                        Aprox. {profesor.tiempo}
                    </Text>
                </View>
            </View>
            <View style={{ ...StylesTeachersNear.container }}>
                <View style={{ ...StylesTeachersNear.containerRow }}>
                    <Text style={{ ...globalStyles.text, ...StylesTeachersNear.textTeacherNear, fontWeight: 'normal' }}>
                        Tarifa de enseñanza
                    </Text>
                    <View
                        style={{ ...StylesTeachersNear.containerTimerPrice }}>
                        <Text
                            style={{ ...globalStyles.text, ...StylesTeachersNear.textTeacherNear }}>
                            S/. {profesor.tarifa}
                        </Text>
                    </View>
                </View>
                <View style={{ ...StylesTeachersNear.containerRow, marginTop: 10 }}>
                    <Text style={{ ...globalStyles.text, ...StylesTeachersNear.textTeacherNear, fontWeight: 'normal' }}>
                        Calificacion
                    </Text>

                    <View style={{ ...StylesTeachersNear.containerStar }}>
                        <View >
                            <RatingStars color='#F1C644' fontSize={23} rating={profesor.calificacion} />
                        </View>
                        <View style={{ alignItems: 'flex-end', }}>
                            <Text style={{ ...globalStyles.text }}>
                                ({profesor.totalCalificaciones})
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default TeachersNear;
