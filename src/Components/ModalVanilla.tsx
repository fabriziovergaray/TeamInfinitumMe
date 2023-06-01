import React from 'react'
import { ActivityIndicator, Modal, TouchableOpacity, View } from 'react-native'
import { HeaderComponent } from './HeaderComponent'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
interface Props {
    isVisible: boolean,
    close: () => void
}
const ModalVanilla = ({ isVisible, close }: Props) => {
    const navigation = useNavigation<any>()

    return (
        <Modal transparent animationType="fade" visible={isVisible}>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={close}>
                <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <View
                        style={{
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.25,
                            elevation: 10,
                            backgroundColor: '#fff',
                            borderRadius: 15,
                            width: '40%',

                        }}
                    >
                        <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => { navigation.navigate('EditInfoTeacher') }}>
                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 15 }}>Editar Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => console.log('Se abrio menu lateral')}>
                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 15 }}>Configuracion</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => navigation.navigate('ReportScreen')}>
                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 15 }}>Reportar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>

        </Modal>
    )
}

export default ModalVanilla
