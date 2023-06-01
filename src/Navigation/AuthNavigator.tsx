
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/Auth/LoginFile/LoginScreen';
import RegisterScreen from '../Screens/Auth/RegisterFile/RegisterScreen';
import IdentifyScreen from '../Screens/Auth/IdentifyFile/IdentifyScreen';
import IdentifyRegister from '../Screens/Auth/RegisterFile/IdentifyRegister';
import RegisterStudent from '../Screens/Auth/RegisterFile/RegisterStudent/RegisterStudent';
import RegisterTeacherScreen from '../Screens/Auth/RegisterFile/RegisterTeacher/RegisterTeacherScreen';

//Definir todas las pantallas que voy a tener la aplicacion, Definer todas las rutas permitidas  
//Por defecto ninguna pagina recibe nd undifine segun react 
//Definir los props de PersonaScreen
export type RootStackParamsAuth = {
    IdentifyScreen: undefined,
    LoginScreen: { tipo?: string, modal?: boolean },
    IdentifyRegister: undefined,
    RegisterScreen: { tipo: string },
    RegisterTeacherScreen: { tipo: string },
    RegisterStudentScreen: { tipo: string },

};
////////////////////////////////////////////////////////////
const Stack = createStackNavigator<RootStackParamsAuth>(); //Crear Stack Navigator
const AuthNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fff', //Fondo de todas las tarjetas es blanco
                },
                headerStyle: {
                    elevation: 0, //Se quita la linea de las tarjetas 
                    shadowColor: 'transparent', //Lo mismo pero para IOS 
                },
            }}>
            <Stack.Screen
                name="IdentifyScreen" //Nombre 
                component={IdentifyScreen} //Componente
            />
            <Stack.Screen
                name="LoginScreen" //Nombre 
                component={LoginScreen} //Componente
            />
            <Stack.Screen
                name="RegisterScreen" //Nombre 
                component={RegisterScreen} //Componente
            />
            <Stack.Screen
                name="IdentifyRegister" //Nombre 
                component={IdentifyRegister} //Componente
            />
            <Stack.Screen
                name="RegisterStudentScreen" //Nombre 
                component={RegisterStudent} //Componente
            />
            <Stack.Screen
                name="RegisterTeacherScreen" //Nombre 
                component={RegisterTeacherScreen} //Componente
            />

        </Stack.Navigator>
    );
};
export default AuthNavigator