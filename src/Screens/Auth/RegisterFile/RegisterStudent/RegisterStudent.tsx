import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Platform, KeyboardAvoidingView, Alert } from 'react-native'
import { HeaderComponent } from '../../../../Components/HeaderComponent'
import { globalStyles } from '../../../../Theme/Styles'
import TextInputComponent from '../../../../Components/TextInputComponent'
import ButtonComponent from '../../../../Components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsAuth } from '../../../../Navigation/AuthNavigator'
import HeadAuthComponent from '../../../../Components/HeadAuthComponent'
import { StylesRegisterStudent } from './Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useForm } from '../../../../Hooks/useForm'
import LoadingModal from '../../../../Components/LoadingModal'
import Checkbox from '../../../../Components/CheackBoxComponent'
import { AuthContext } from '../../../../Context/AuthContext'
import Loading from '../../../../Components/Loading'
import PasswordStrengthMeter from '../../../../Components/ContraComponent'
interface Props extends StackScreenProps<RootStackParamsAuth, 'RegisterStudentScreen'> { }
interface GradoAcademico {
    [key: string]: boolean;
    Universitario: boolean;
    EscolarPrimaria: boolean;
    EscolarSecundaria: boolean;
    GradoDeAcademia: boolean;
    Inicial: boolean;
}
interface FormErrors {
    apellidos: string;
    nombres: string
}
const initialState: FormErrors = {
    apellidos: '',
    nombres: ''
};
const RegisterStudent = ({ route, navigation }: Props) => {
    const { errorMessage, removeError, singUpStudent } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [modalLoading, setModalLoading] = useState<boolean>(false)
    const [gradoAcademico, setGradoAcademico] = useState<GradoAcademico>({
        Universitario: false,
        EscolarPrimaria: false,
        EscolarSecundaria: false,
        GradoDeAcademia: false,
        Inicial: false
    })
    useEffect(() => {
        if (errorMessage.length == 0) return
        Alert.alert('Login Incorrecto', errorMessage, [
            { text: 'Ok', onPress: removeError }
        ])
    }, [errorMessage])
    const handleStudentCheckboxPress = (grado: string) => {
        setGradoAcademico((prevState) => {
            const updatedGradoAcademico: GradoAcademico = {
                Universitario: false,
                EscolarPrimaria: false,
                EscolarSecundaria: false,
                GradoDeAcademia: false,
                Inicial: false,
                [grado]: true,
            };
            return { ...prevState, ...updatedGradoAcademico };
        });
    };
    const obtenerGradoSeleccionado = (): string => {
        for (const grado in gradoAcademico) { //Bucle for para el grado 
            if (gradoAcademico[grado]) {
                return grado;
            }
        }
        return '';
    };
    const gradoAcademicoSeleccionado = obtenerGradoSeleccionado()
    function addSpacesToCamelCase(text: string): string {
        return text.replace(/([A-Z])/g, ' $1').trim();
    }
    const gradoAcademicoBd = addSpacesToCamelCase(gradoAcademicoSeleccionado)
    const { tipo } = route.params
    const { top } = useSafeAreaInsets()



    const { apellidos, contrasena, correo, edad, nombres, onChange, form } = useForm({
        nombres: '',
        apellidos: '',
        correo: '',
        edad: '',
        contrasena: '',
    })
    const [erros, setErros] = useState<FormErrors>(initialState)
    const ExpRegNom = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    const ValidateForm = () => {
        let err: FormErrors = { apellidos: '', nombres: '' };

        if (!ExpRegNom.test(apellidos)) {
            err = { ...err, apellidos: 'Campo hola' }
        }

        if (nombres === '') {
            err = { ...err, nombres: 'Campo obligatorio' }
        }
        if (err.apellidos || err.nombres) {
            setErros(_errors => ({ ..._errors, ...err }));
            console.log('Faliido')

        } else {
            console.log('Exito')
        }

    }
    const onRegister = async () => {
        setIsLoading(true)
        const registroExitoso = await singUpStudent({ apellidos, nombres, contrasena, correo, edad, tipo, gradoAcademico: gradoAcademicoBd })

        if (registroExitoso) {
            setIsLoading(false)
            setModalLoading(true)
            console.log('Exitoso')
        } else {
            setIsLoading(false)
            console.log('Fallido')
        }
    }
    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <ScrollView style={{ ...globalStyles.globalMarginHorizontal }} showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ marginTop: top + 20 }}>
                    <HeadAuthComponent pantalla_='IdentifyRegister' titulo='Registro' color='#000' />
                </View>
                <HeaderComponent title={`Registrarse como ${tipo}`} color='#000' />
                <Text style={globalStyles.text}>!Hola! Antes de empezar tu busqueda registrate para conocer tur preferencias</Text>
                <View style={StylesRegisterStudent.formContainer}>
                    <View>
                        <HeaderComponent title='Nombre Completo' color='#000' fontSize={17} />
                        <TextInputComponent value={nombres} onChangeText={value => onChange(value, 'nombres')} placeholderTextColor={'gray'} placeholder='Ingresa tus nombres completos' style={[StylesRegisterStudent.inputField, Platform.OS == 'ios' ? StylesRegisterStudent.inputFieldIOS : StylesRegisterStudent.inputField]} underlineColorAndroid="#000" />
                        {erros.nombres ? <Text>{erros.nombres}</Text> : null}
                    </View>
                    <View>
                        <HeaderComponent title='Apellido Completos Completo' color='#000' fontSize={17} />
                        <TextInputComponent value={apellidos} onChangeText={value => {
                            onChange(value, 'apellidos'), setErros(_errors => ({ ..._errors, apellidos: '' }))
                        }} placeholderTextColor={'gray'} placeholder='Ingresa tus apellidos completos' style={[StylesRegisterStudent.inputField, Platform.OS == 'ios' ? StylesRegisterStudent.inputFieldIOS : StylesRegisterStudent.inputField]} underlineColorAndroid="#000" />
                        {erros.apellidos ? <Text>{erros.apellidos}</Text> : null}

                    </View>
                    <View>
                        <HeaderComponent title='Correo Electronico' color='#000' fontSize={17} />
                        <TextInputComponent value={correo} onChangeText={value => onChange(value, 'correo')} placeholderTextColor={'gray'} placeholder='Ingresa tu correo electrónico' style={[StylesRegisterStudent.inputField, Platform.OS == 'ios' ? StylesRegisterStudent.inputFieldIOS : StylesRegisterStudent.inputField]} underlineColorAndroid="#000"
                        />
                    </View>
                    <View >
                        <HeaderComponent title='Elija su grado Academico' color='#000' fontSize={17} />
                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox checked={gradoAcademico.Universitario} onPress={() => handleStudentCheckboxPress('Universitario')} />
                            <Text style={{ fontSize: 16, color: '#000' }}>Universitario</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Checkbox checked={gradoAcademico.GradoDeAcademia} onPress={() => handleStudentCheckboxPress('GradoDeAcademia')} />
                            <Text style={{ fontSize: 16, color: '#000' }}>Grado de Academia</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Checkbox checked={gradoAcademico.EscolarSecundaria} onPress={() => handleStudentCheckboxPress('EscolarSecundaria')} />
                            <Text style={{ fontSize: 16, color: '#000' }}>Escolar secundaria</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Checkbox checked={gradoAcademico.EscolarPrimaria} onPress={() => handleStudentCheckboxPress('EscolarPrimaria')} />
                            <Text style={{ fontSize: 16, color: '#000' }}>Escolar Primaria</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Checkbox checked={gradoAcademico.Inicial} onPress={() => handleStudentCheckboxPress('Inicial')} />
                            <Text style={{ fontSize: 16, color: '#000' }}>Inicial</Text>
                        </View>
                    </View>
                    <View>
                        <HeaderComponent title='Edad' color='#000' fontSize={17} />
                        <TextInputComponent value={edad} onChangeText={value => onChange(value, 'edad')} placeholderTextColor={'gray'} placeholder='Ingresa tu edad actual' style={[StylesRegisterStudent.inputField, Platform.OS == 'ios' ? StylesRegisterStudent.inputFieldIOS : StylesRegisterStudent.inputField]} underlineColorAndroid="#000" />
                    </View>
                    <View>
                        <HeaderComponent title='Crear una contraseña' color='#000' fontSize={17} />
                        <TextInputComponent value={contrasena} onChangeText={value => onChange(value, 'contrasena')} placeholderTextColor={'gray'} placeholder='Contraseña mínima de 8 caracteres y simbolos' style={[StylesRegisterStudent.inputField, Platform.OS == 'ios' ? StylesRegisterStudent.inputFieldIOS : StylesRegisterStudent.inputField]} underlineColorAndroid="#000" />
                        <PasswordStrengthMeter contrasena={contrasena} />
                    </View>
                    <View style={{ marginVertical: 15 }}>
                        <ButtonComponent title='Terminar' onPress={ValidateForm} style={{ ...globalStyles.buttonsAuth }} activeOpacity={0.7} />
                    </View>
                </View>
            </KeyboardAvoidingView>

            <LoadingModal activarActivity={false} mostrarBotonRegresar isVisible={modalLoading} title='!Registrado!' subtitle='!Felicidades se registro correctamente!' closeModal={() => setModalLoading(false)} />
        </ScrollView>
    )
}

export default RegisterStudent
