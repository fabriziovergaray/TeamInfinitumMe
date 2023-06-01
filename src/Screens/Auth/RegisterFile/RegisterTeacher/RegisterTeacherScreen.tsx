import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, Platform, TouchableOpacity, Alert } from 'react-native'
import HeadAuthComponent from '../../../../Components/HeadAuthComponent'
import { RootStackParamsAuth } from '../../../../Navigation/AuthNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { HeaderComponent } from '../../../../Components/HeaderComponent'
import { globalStyles } from '../../../../Theme/Styles'
import ButtonComponent from '../../../../Components/ButtonComponent'
import Checkbox from '../../../../Components/CheackBoxComponent'
import { StylesRegisterTeacher } from './Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TextInputIconComponent from '../../../../Components/TextInputIconComponent'
import Icon from 'react-native-vector-icons/Ionicons'
import ModalComponent from '../../../../Components/ModalComponent'
import { ColorPagoEfectivo, ColorPlin, ColorYape } from '../../../../constans/constans'
import { useForm } from '../../../../Hooks/useForm'
import CameraComponent from '../../../../Components/CamaraComponent'
import useImageToBase64 from '../../../../Hooks/useBase64'
import { AuthContext } from '../../../../Context/AuthContext'
import Loading from '../../../../Components/Loading'
import LoadingModal from '../../../../Components/LoadingModal'
interface Metodos {
    yape: { id: number; value: string };
    plin: { id: number; value: string };
    efectivo: { id: number; value: string };
}
interface Props extends StackScreenProps<RootStackParamsAuth, 'RegisterTeacherScreen'> {
}
interface TypeTeacher {
    [key: string]: boolean;
    Universitario: boolean;
    Instituto: boolean;
    Independiente: boolean;
    Colegio: boolean;
}
const RegisterTeacherScreen = ({ navigation, route, }: Props) => {
    const { errorMessage, removeError, singUpTeacher } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { apellidos, onChange, correo, nombres, numeroDoc, precio_enseñanza, descripcion, form } = useForm({
        apellidos: '',
        nombres: '',
        correo: '',
        numeroDoc: '',
        precio_enseñanza: '',
        descripcion: '',
    })
    const { top } = useSafeAreaInsets()
    const { tipo } = route.params
    const [isVisible, setIsVisible] = useState(false);
    const [modalLoading, setModalLoading] = useState(false)
    const [typeTeahcer, setTypeTeahcer] = useState<TypeTeacher>({
        Colegio: false,
        Independiente: false,
        Instituto: false,
        Universitario: false
    })

    const handleTeacherCheckboxPress = (type: string) => {
        setTypeTeahcer((prevState) => {
            const updatedGradoAcademico: TypeTeacher = {
                Universitario: false,
                Colegio: false,
                Independiente: false,
                Instituto: false,
                [type]: true,
            };
            return { ...prevState, ...updatedGradoAcademico };
        });
    };

    const getTypeTeahcer = (): string => {
        for (const type in typeTeahcer) {
            if (typeTeahcer[type]) return type
        }
        return ""
    }
    const typeSeleccionado = getTypeTeahcer()
    const [foto_perfil, setfoto_perfil] = useState<string>('')
    const [metodos, setMetodos] = useState<Metodos>({
        yape: { id: 1, value: '' },
        plin: { id: 2, value: '' },
        efectivo: { id: 3, value: '' }
    });
    const { imageBase64 } = useImageToBase64(foto_perfil);

    const handleAceptarCursos = (cursosSeleccionados: string[]) => {
        // Aquí puedes realizar las acciones necesarias con los cursos seleccionados
        console.log('Cursos seleccionados:', cursosSeleccionados);
    };

    const handleMethodToggle = (method: keyof Metodos) => {
        setMetodos(prevMetodos => {
            const methodObj = prevMetodos[method];
            const updatedValue = methodObj.value === 'Seleccionado' ? '' : 'Seleccionado';
            const updatedMethod = { ...methodObj, value: updatedValue };
            return { ...prevMetodos, [method]: updatedMethod };
        });
    };
    const handleImageSelected = (base64Image: string, uri: string) => {
        // Aquí puedes hacer lo que necesites con la imagen en formato Base64
        setfoto_perfil(uri)
    };
    const metodosSeleccionadosFun = () => {
        const metodosConValor = Object.entries(metodos) //onvertir el objeto metodos en un array de pares clave-valor
            .filter(([_, metodo]) => metodo.value !== '')
            .map(([key, metodo]) => ({ id: metodo.id, nombre: key }));
        return metodosConValor
    }
    const onRegister = async () => {
        setIsLoading(true)
        const registroExitoso = await singUpTeacher({ apellidos, correo, descripcion, foto_perfil: imageBase64, nombres, numeroDoc, precio_ensenianza: precio_enseñanza, teacherType: typeSeleccionado, tipo })
        if (registroExitoso === true) {
            setIsLoading(false)
            setModalLoading(true)
            console.log('Exitoso')
        } else {
            setIsLoading(false)
            console.log('Fallido')
        }
    }
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
            <View style={{ marginTop: top + 20 }}>
                <HeadAuthComponent pantalla_='IdentifyRegister' titulo='Registro' />
            </View>
            <HeaderComponent title={`Registrarse como ${tipo}`} color='#000' />
            <Text style={{ ...globalStyles.text }}>Antes de empezar, se requiere que completes tu registro.</Text>
            <View>
                <HeaderComponent marginBottom={0} title='Nombres Completos' color='#000' fontSize={20} />
                <TextInputIconComponent value={nombres} onChangeText={value => onChange(value, 'nombres')} placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Ingrese sus nombre completos' style={[StylesRegisterTeacher.inputField, Platform.OS == 'ios' ? StylesRegisterTeacher.inputFieldIOS : StylesRegisterTeacher.inputField]} underlineColorAndroid="#000" />
            </View>
            <View>
                <HeaderComponent marginBottom={0} title='Apellidos Completos' color='#000' fontSize={20} />
                <TextInputIconComponent value={apellidos} onChangeText={value => onChange(value, 'apellidos')} placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Ingrese sus apellidos completos' style={[StylesRegisterTeacher.inputField, Platform.OS == 'ios' ? StylesRegisterTeacher.inputFieldIOS : StylesRegisterTeacher.inputField]} underlineColorAndroid="#000" />
            </View>
            <View>
                <HeaderComponent marginBottom={0} title='Correo de contacto' color='#000' fontSize={20} />
                <Text style={{ ...globalStyles.text }}>A este correo enviaremos sus credenciales</Text>
                <TextInputIconComponent value={correo} onChangeText={value => onChange(value, 'correo')} placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Ingrese un correo de contacto' style={[StylesRegisterTeacher.inputField, Platform.OS == 'ios' ? StylesRegisterTeacher.inputFieldIOS : StylesRegisterTeacher.inputField]} underlineColorAndroid="#000" />
            </View>
            <View>
                <HeaderComponent marginBottom={0} title='Numero de documento' color='#000' fontSize={20} />
                <TextInputIconComponent value={numeroDoc} onChangeText={value => onChange(value, 'numeroDoc')} placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Ingrese su numero de documento de identidad' style={[StylesRegisterTeacher.inputField, Platform.OS == 'ios' ? StylesRegisterTeacher.inputFieldIOS : StylesRegisterTeacher.inputField]} underlineColorAndroid="#000" />
            </View>
            <HeaderComponent title='Elije el tipo de profesor que eres' fontSize={20} color='#000' />
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Checkbox checked={typeTeahcer.Universitario} onPress={() => handleTeacherCheckboxPress('Universitario')} />
                <Text style={{ ...globalStyles.text }}>Profesor universitario</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Checkbox checked={typeTeahcer.Instituto} onPress={() => handleTeacherCheckboxPress('Instituto')} />
                <Text style={{ ...globalStyles.text }}>Profesor Instituto</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Checkbox checked={typeTeahcer.Independiente} onPress={() => handleTeacherCheckboxPress('Independiente')} />
                <Text style={{ ...globalStyles.text }}>Profesor independiente</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Checkbox checked={typeTeahcer.Colegio} onPress={() => handleTeacherCheckboxPress('Colegio')} />
                <Text style={{ ...globalStyles.text }}>Profesor Colegio</Text>
            </View>
            <View >
                <HeaderComponent title='¿Qué materias enseñas?' fontSize={20} color='#000' />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ ...globalStyles.text }}>Elije una o mas materias según tu especialidad (Esto permitira que el alumno interesado por la materia te pueda elegir)</Text>
                    </View>
                    <TouchableOpacity onPress={() => setIsVisible(true)} activeOpacity={0.5} style={{ justifyContent: 'center' }}>
                        <Icon name='add-circle-outline' size={40} color={'#000'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <HeaderComponent title='Establece un precio de enseñanza' color='#000' fontSize={20} />
                <TextInputIconComponent value={precio_enseñanza} onChangeText={value => onChange(value, 'precio_enseñanza')} keyboardType='numeric' placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Establece un precio a negociar' style={[StylesRegisterTeacher.inputField, Platform.OS == 'ios' ? StylesRegisterTeacher.inputFieldIOS : StylesRegisterTeacher.inputField]} underlineColorAndroid="#000" />
            </View>
            <View>
                <HeaderComponent title='Descripción breve de tus habilidades en tu materia' color='#000' fontSize={20} />
                <TextInputIconComponent value={descripcion} onChangeText={value => onChange(value, 'descripcion')} placeholderTextColor={'gray'} icon='pencil-outline' placeholder='Descripción breve de tus habilidades en tu materia' style={[StylesRegisterTeacher.inputField, Platform.OS == 'ios' ? StylesRegisterTeacher.inputFieldIOS : StylesRegisterTeacher.inputField]} underlineColorAndroid="#000" />
            </View>
            <View>
                <HeaderComponent title='Método de pago' color='#000' fontSize={20} />
                <Text style={{ ...globalStyles.text }}>Elja uno o más metodos de pago de tu preferencia</Text>
                <View style={{ ...StylesRegisterTeacher.containerBtn }}>
                    <ButtonComponent colorText={metodos.yape.value != '' ? "#fff" : '#000'} style={{ ...StylesRegisterTeacher.btnmethodsPay, backgroundColor: metodos.yape.value != '' ? ColorYape : '#fff' }} title='Yape' onPress={() => handleMethodToggle('yape')} />
                    <ButtonComponent colorText={metodos.plin.value != '' ? '#fff' : '#000'} style={{ ...StylesRegisterTeacher.btnmethodsPay, backgroundColor: metodos.plin.value != '' ? ColorPlin : '#fff' }} title='Plin' onPress={() => handleMethodToggle('plin')} />
                    <ButtonComponent colorText={metodos.efectivo.value != '' ? '#fff' : '#000'} style={{ ...StylesRegisterTeacher.btnmethodsPay, backgroundColor: metodos.efectivo.value != '' ? ColorPagoEfectivo : '#fff' }} title='Efectivo' onPress={() => handleMethodToggle('efectivo')} />
                </View>
            </View>
            <CameraComponent onImageSelected={handleImageSelected} />

            <ButtonComponent style={{ ...globalStyles.buttonsAuth, marginVertical: 10 }} title='Terminar' onPress={onRegister} />
            <ModalComponent isVisible={isVisible} closeModal={() => setIsVisible(false)}
                handleAceptar={handleAceptarCursos} />
            <LoadingModal activarActivity={false} mostrarBotonRegresar closeModal={() => setModalLoading(false)} title={'¡Registrado!'} subtitle={'¡Felicidades, en unos minutos te contactaremos para validar tu registro!'} isVisible={modalLoading} />
        </ScrollView>

    )
}
export default RegisterTeacherScreen
