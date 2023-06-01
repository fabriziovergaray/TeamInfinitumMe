import React, { useState } from 'react';
import { View, Modal, Text, Button, Dimensions, StyleSheet } from 'react-native';
import { globalStyles } from '../Theme/Styles';
import ButtonComponent from './ButtonComponent';
import { RADIO } from '../constans/constans';
import ContentCourses from '../Screens/Auth/RegisterFile/RegisterTeacher/ContentCourses';

interface ModalComponentProps {
    isVisible: boolean;
    closeModal: () => void;
    handleAceptar: (cursosSeleccionados: string[]) => void; // Prop para manejar el evento de aceptar
    borderRadius?: number;
    marginVertical?: number;
    marginHorizontal?: number;
    header?: boolean;
    headerAuth?: boolean;
    title?: string;
    colorTitle?: string;
    colorAuth?: string
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isVisible, closeModal, handleAceptar, borderRadius = 0, marginVertical = 0, marginHorizontal = 0, header = true, headerAuth = true, title = '', colorTitle = '#000', colorAuth = '#000' }) => {


    const [cursosSeleccionados, setCursosSeleccionados] = useState<string[]>([]);

    const toggleCursoSeleccionado = (curso: string) => {
        if (cursosSeleccionados.includes(curso)) {
            setCursosSeleccionados(cursosSeleccionados.filter(c => c !== curso));
        } else {
            setCursosSeleccionados([...cursosSeleccionados, curso]);
        }
    };
    return (
        <Modal transparent animationType="fade" visible={isVisible}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View
                    style={{
                        flex: 1,
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        backgroundColor: '#fff',
                        borderRadius: borderRadius,
                        marginVertical: marginVertical,
                        marginHorizontal: marginHorizontal
                    }}
                >

                    <View style={{ flex: 1 }}>
                        <ContentCourses colorAuth={colorAuth} colorTitle={colorTitle} title={title} header={header} headerAuth={headerAuth} cursosSeleccionados={cursosSeleccionados} toggleCursoSeleccionado={toggleCursoSeleccionado} />
                    </View>
                    <View style={{height:20}}/>

                    <View style={{ ...stylesHere.containerBtn }}>
                        <ButtonComponent
                            activeOpacity={0.7}
                            title='Aceptar'
                            style={{ ...stylesHere.btnAceptar }}
                            onPress={() => {
                                handleAceptar(cursosSeleccionados);
                                closeModal()
                            }}
                        />
                        <View style={{ width: '3%' }} />
                        <ButtonComponent
                            title='Cancelar'
                            activeOpacity={0.7}
                            style={{ ...stylesHere.btnCancelar }}
                            colorText='#000'
                            onPress={closeModal}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const stylesHere = StyleSheet.create({
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 100,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    btnAceptar: {
        height: 55,
        backgroundColor: 'blue',
        borderRadius: 7,
        width: '57%'
    },
    btnCancelar: {
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 7,
        borderColor: 'blue',
        borderWidth: 1,
        width: '40%'
    }
});

export default ModalComponent;
