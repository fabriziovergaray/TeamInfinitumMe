import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import { DOMAIN, windowHeight, windowWidth } from '../../../constans/constans'
import FadeinImageSrc from '../../../Components/FadeInImageSrc'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../../../Theme/Styles'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesAccount } from './Styles'
import { RootStackParamsHome } from '../../../Navigation/HomeNavigator'
import { AuthContext } from '../../../Context/AuthContext'
import FadeinImage from '../../../Components/FadeInImage'
interface Props extends StackScreenProps<RootStackParamsHome, 'AccountScreen'> { }
const AccountScreen = ({ navigation }: Props) => {
    const { user, tipo_usuario, userType, updateUser } = useContext(AuthContext)
    const { top } = useSafeAreaInsets()
    const update = () => {
        updateUser({ nombres: 'Fabrizio' })
    }
    console.log(userType)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <View style={{ height: windowHeight / 4, }}>
                <View style={{ backgroundColor: 'blue', height: windowHeight / 5.3 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} style={{ flexDirection: 'row', marginTop: top + 20 }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Icon name='chevron-back-outline' size={40} color={'#fff'} />
                        </View>
                        <HeaderComponent title='Mi Perfil' fontSize={27} color='#fff' />
                    </TouchableOpacity>
                    <View style={{ width: (windowWidth / 3) - 20, ...stylesAccount.containerFather }}>
                        {userType?.foto_perfil === null ?
                            <FadeinImageSrc uri={require('../../../assets/ImageDefault.jpg')} style={{ ...stylesAccount.imagenStyle }} />
                            :
                            <FadeinImage uri={`${DOMAIN + '/' + userType?.foto_perfil}`} style={{ ...stylesAccount.imagenStyle }} />

                        }
                        <View style={{ ...stylesAccount.containerRating }} >
                            <View style={{ ...stylesAccount.containerChilldren }}>
                                <Icon name='pencil-outline' style={{ color: '#fff' }} />
                            </View>
                        </View>
                    </View>
                </View>


            </View>
            <View style={{ flex: 1, ...globalStyles.globalMarginHorizontal }}>
                <HeaderComponent title='Información detallada' color='#000' fontSize={20} />
                <View style={{ ...stylesAccount.containerInfo }} >
                    <Text style={{ ...stylesAccount.textSyle, fontWeight: 'bold' }}>Nombres</Text>
                    <View style={{ ...stylesAccount.containerDetalleInfo }}>
                        <Text style={{ ...stylesAccount.textSyle }}>{userType?.nombres}</Text>
                    </View>
                </View>
                <View style={{ ...stylesAccount.containerInfo }}>
                    <Text style={{ ...stylesAccount.textSyle, fontWeight: 'bold' }}>Apellidos</Text>
                    <View style={{ ...stylesAccount.containerDetalleInfo }}>
                        <Text style={{ ...stylesAccount.textSyle }}>{userType?.apellidos}</Text>
                    </View>
                </View>
                <View style={{ ...stylesAccount.containerInfo }}>
                    <Text style={{ ...stylesAccount.textSyle, fontWeight: 'bold' }}>Tipo de {userType?.tipo_de_usuario}</Text>
                    <View style={{ ...stylesAccount.containerDetalleInfo }}>
                        <Text style={{ ...stylesAccount.textSyle }}>{userType?.tipo_de_usuario} {tipo_usuario === 'Alumno' ? userType?.grado_academico : userType?.tipo_profesor}</Text>
                    </View>
                </View>
                {tipo_usuario === 'Profesor' &&
                    <View style={{ ...stylesAccount.containerInfo }}>
                        <Text style={{ ...stylesAccount.textSyle, fontWeight: 'bold' }}>Especialidad</Text>
                        <View style={{ ...stylesAccount.containerDetalleInfo }}>
                            <Text style={{ ...stylesAccount.textSyle }}>Historia del Perú</Text>
                        </View>
                    </View>
                }
                {
                    tipo_usuario === 'Profesor' &&

                    <View style={{ ...stylesAccount.containerInfo }}>
                        <Text style={{ ...stylesAccount.textSyle, fontWeight: 'bold' }}>Descripcion</Text>
                        <View style={{ ...stylesAccount.containerDetalleInfo }}>
                            <Text style={{ ...stylesAccount.textSyle, textAlign: 'right' }}>{userType?.descripcion}</Text>
                        </View>
                    </View>
                }
                {
                    tipo_usuario === 'Alumno' &&
                    <View style={{ ...stylesAccount.containerInfo }}>
                        <Text style={{ ...stylesAccount.textSyle, fontWeight: 'bold' }}>Edad</Text>
                        <View style={{ ...stylesAccount.containerDetalleInfo }}>
                            <Text style={{ ...stylesAccount.textSyle }}>{userType?.edad}</Text>
                        </View>
                    </View>
                }

                <TouchableOpacity onPress={update}>
                    <Text>
                        prueba
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default AccountScreen
