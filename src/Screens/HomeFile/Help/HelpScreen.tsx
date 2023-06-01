import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BarHome from '../../../Components/BarHome'
import { globalStyles } from '../../../Theme/Styles'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import LoadingModal from '../../../Components/LoadingModal'

const HelpScreen = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isVisible2, setIsVisible2] = useState<boolean>(false)
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <BarHome />
            <View style={{ ...globalStyles.globalMarginHorizontal }}>
                <HeaderComponent title='Ayuda' color='#000' />
                <View>
                    <HeaderComponent title='¿Cómo empiezo a usar la app?' color='#000' fontSize={23} />
                    <Text style={{ ...globalStyles.text }}>Aqui podras resportar algun incidente que hayas tenido con la aplicacion y con tu servicio como profesor o alummno</Text>
                </View>
                <View>
                    <HeaderComponent title='¿Cómo funciona el servicio de asistencia del profesor?' color='#000' fontSize={23} />
                    <Text style={{ ...globalStyles.text }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, commodi esse libero ea officiis explicabo sed nam dolorum aliquid distinctio voluptatem sequi ex possimus? Nam quam provident assumenda adipisci impedit!</Text>
                </View>
                <View>
                    <HeaderComponent title='¿Cómo acepto una solicitud de un alumno?' color='#000' fontSize={23} />
                    <Text style={{ ...globalStyles.text }}>Aqui podras resportar algun incidente que hayas tenido con la aplicacion y con tu servicio como profesor o alummno</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <HeaderComponent title='¿Cómo veo cuantos profesores hay cerca a mí?' color='#000' fontSize={23} />
                    <Text style={{ ...globalStyles.text }}>Aqui podras resportar algun incidente que hayas tenido con la aplicacion y con tu servicio como profesor o alummno</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
                <Text>
                    Abrir modal
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsVisible2(true)}>
                <Text>
                    Abrir modal2
                </Text>
            </TouchableOpacity>
            <LoadingModal title='Buscando profesor....' subtitle='Estamos buscando un profesor para ti esto tomora un momento' isVisible={isVisible} closeModal={() => setIsVisible(false)} />
            <LoadingModal title='Precio Enviado' subtitle='Dirigiendo al chat de servicio' isVisible={isVisible2} closeModal={() => setIsVisible2(false)} />
        </ScrollView>
    )
}

export default HelpScreen
