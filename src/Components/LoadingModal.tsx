import React from 'react'
import { ActivityIndicator, Modal, Text, View } from 'react-native'
import { HeaderComponent } from './HeaderComponent'
import { globalStyles } from '../Theme/Styles'
import ButtonComponent from './ButtonComponent'
import { useNavigation } from '@react-navigation/native'

interface Props {
    isVisible: boolean,
    closeModal: () => void,
    title: string,
    subtitle: string,
    mostrarBotonRegresar?: boolean,
    activarActivity?: boolean
}
const LoadingModal = ({ isVisible, closeModal, title = '', subtitle, mostrarBotonRegresar = false, activarActivity = true }: Props) => {
    const navigation = useNavigation<any>()
    const closeAndNavigate = () => {
        closeModal()
        navigation.pop()
    }

    return (
        <Modal transparent animationType="fade" visible={isVisible}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', paddingHorizontal: 10, justifyContent: 'center' }}>
                <View
                    style={{
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        backgroundColor: '#fff',
                        borderRadius: 50,
                        width: '100%',
                        height: 300,
                        justifyContent: 'center'
                    }}
                >
                    <HeaderComponent title={title} color='#000' fontSize={45} styleText={{ textAlign: 'center' }} />
                    {
                        activarActivity &&
                        <ActivityIndicator size={50} color={'red'} />
                    }
                    <Text style={{ textAlign: 'center', ...globalStyles.text }}>{subtitle}</Text>
                    {
                        mostrarBotonRegresar &&
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <ButtonComponent style={{ backgroundColor: '#fff', borderColor: 'blue', borderWidth: 0.9 }} styleText={{ color: '#000' }} onPress={closeAndNavigate} title='Regresar' />
                        </View>
                    }

                </View>
            </View>
        </Modal>
    )
}

export default LoadingModal
