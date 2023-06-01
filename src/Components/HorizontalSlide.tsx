import React from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import CursoSlider from './CursoSlider';
import { CursosDisponiblesResponse, Courses } from '../Interfaces/appInterfaces';

interface Props {
    curso: Courses[];
}
const HorizontalSlider = ({ curso }: Props) => {
    return (
        <View
            style={{ justifyContent: 'center' }}>
            <View style={{ marginTop: 15 }}>
                <FlatList
                    data={curso}
                    renderItem={({ item }: any) => (
                        <CursoSlider curso={item} width={180} height={100} />
                    )}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default HorizontalSlider;
