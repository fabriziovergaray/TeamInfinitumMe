import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Courses } from '../Interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons'
interface Props {
    curso: Courses;
    height?: number;
    width?: number;
}
const CursoSlider = ({ curso, height = 420, width = 300 }: Props) => {

    return (
        <TouchableOpacity
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
            activeOpacity={0.95}>
            <View style={{ ...stylesHere.cursoContainer, backgroundColor: curso.background }}>
                <View style={{}} >
                    <Icon style={{ fontWeight: 'bold', marginLeft: 15 }} name={curso.icon} size={30} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{curso.name}</Text>
                </View>
            </View>
        </TouchableOpacity >
    );
};

const stylesHere = StyleSheet.create({
    image: {
        borderRadius: 18,
        color: 'red'
    },
    cursoContainer: {
        flexDirection: 'row',
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',


    },
});
export default CursoSlider;
