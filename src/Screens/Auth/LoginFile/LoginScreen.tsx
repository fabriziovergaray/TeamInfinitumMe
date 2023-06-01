import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert, Keyboard } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import ButtonComponent from '../../../Components/ButtonComponent';
import { HeaderComponent } from '../../../Components/HeaderComponent';
import { globalStyles } from '../../../Theme/Styles';
import FadeinImageSrc from '../../../Components/FadeInImageSrc';
import { RADIO } from '../../../constans/constans';
import { RootStackParamsAuth } from '../../../Navigation/AuthNavigator';
import Icon from 'react-native-vector-icons/Ionicons'
import TextInputComponent from '../../../Components/TextInputComponent';
import { stylesLoginScreen } from './Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeadAuthComponent from '../../../Components/HeadAuthComponent';
import TextInputIconComponent from '../../../Components/TextInputIconComponent';
import { useForm } from '../../../Hooks/useForm';
import teamInfinitum from '../../../Api/teamInfinitum';
import { AuthContext } from '../../../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../Components/Loading';
//En vez de una interface use type para poner dos tipos de navegacion ya que era incompatible usando interface
/* type Props = StackScreenProps<RootStackParams, 'IdentifyScreen'>*/
interface Props extends StackScreenProps<RootStackParamsAuth, 'LoginScreen'> { }
const LoginScreen = ({ navigation, route }: Props) => {
    const { top } = useSafeAreaInsets()
    const [viewPassword, setViewPassword] = useState<boolean>(false)
    const { tipo } = route.params

    const { contrasena, correo, onChange, tipo_usuario, form } = useForm({
        correo: '',
        tipo_usuario: tipo,
        contrasena: ''
    })
    const { singIng, errorMessage, removeError, singIngTeacher } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const onLogin = () => {
        Keyboard.dismiss();
        setIsLoading(true); // Establece isLoading en true al iniciar sesión
        if (tipo == 'Alumno') {
            singIng(
                { correo, password: contrasena, tipo_usuario: tipo },
                setIsLoading // Pasa setIsLoading directamente como argumento
            );
        } else {
            setIsLoading(false)
            singIngTeacher({ correo, password: contrasena, tipo_usuario }, setIsLoading)
        }
    };
    useEffect(() => {
        if (errorMessage.length == 0) return
        Alert.alert('Login Incorrecto', errorMessage, [
            { text: 'Ok', onPress: removeError }
        ])
    }, [errorMessage])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <ScrollView style={{ ...globalStyles.globalMarginHorizontal }} showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{ marginTop: top + 20 }}>
                        <HeadAuthComponent pantalla_='IdentifyScreen' titulo={`!Hola, ${tipo}`} />
                    </View>
                    <View style={{ height: 100 }}></View>

                    <View style={{}}>
                        <View style={{}}>
                            <HeaderComponent title='Ingresar' color='#000' fontSize={40} />
                        </View>
                        <View style={{}}>
                            <TextInputComponent value={correo} onChangeText={value => onChange(value, 'correo')} style={{ ...stylesLoginScreen.TextInputStyle }} keyboardType='email-address' placeholder='Ingresar Email' placeholderTextColor={'gray'} />
                            <View>
                                <TextInputIconComponent value={contrasena} onChangeText={value => onChange(value, 'contrasena')} secureTextEntry={viewPassword ? false : true} onPress={() => setViewPassword(!viewPassword)} icon={viewPassword ? 'eye-outline' : 'eye-off-outline'} style={{ ...stylesLoginScreen.TextInputStyle, borderWidth: 0.3 }} placeholder='Ingresar Contraseña' placeholderTextColor={'gray'} />
                            </View>


                            <TouchableOpacity activeOpacity={0.7}>
                                <Text style={globalStyles.text}>Recuperar Contraseña</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <ButtonComponent activeOpacity={0.7} colorText='#fff' style={stylesLoginScreen.btnIngresar} title='Ingresar' onPress={onLogin} />
                        </View>
                    </View>
                    <View>
                        <View style={{ alignItems: 'center', marginVertical: RADIO * 15 }}>
                            <Text style={{ fontSize: 15, color: 'gray' }}>Or continue With</Text>
                        </View>
                        <View style={{ marginVertical: RADIO * 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ ...stylesLoginScreen.ContainerIconLogin }}>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log(form)}>
                                        <Icon name='logo-google' size={35} color={'#000'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7}>
                                        <Icon name='logo-facebook' size={35} color={'blue'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: RADIO * 180 }}></View>
                        <View style={{ ...stylesLoginScreen.divGroup2 }}>
                            <View style={{ marginTop: 10 }}>
                                <FadeinImageSrc uri={require('../../../assets/persona.png')} style={{ width: 100, height: 300 }} />
                            </View>
                        </View>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default LoginScreen;
