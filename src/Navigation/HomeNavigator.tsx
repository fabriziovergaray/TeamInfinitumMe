import React, { useContext } from 'react'
import { TransitionSpecs, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeFile/home/HomeScreen';
import { ProfesorCercano } from '../Interfaces/appInterfaces';
import SearchTeacherScreen from '../Screens/HomeFile/SearchTeacher/SearchTeacherScreen';
import InfoTeacherScreen from '../Screens/HomeFile/InfoTeacher/InfoTeacherScreen';
import PaymentHistory from '../Screens/HomeFile/PaymentHistory/PaymentHistory';
import SecurityScreen from '../Screens/HomeFile/Security/SecurityScreen';
import SupportScreen from '../Screens/HomeFile/Support/SupportScreen';
import MethodPayScreen from '../Screens/HomeFile/MethodPay/MethodPayScreen';
import HelpScreen from '../Screens/HomeFile/Help/HelpScreen';
import AccountScreen from '../Screens/HomeFile/Account/AccountScreen';
import HomeTeacherScreen from '../Screens/HomeFile/home/homeTeacher/HomeTeacherScreen';
import ReportScreen from '../Screens/Report/ReportScreen';
import EditInfo from '../Screens/HomeFile/Teacher/EditInfo';
import { Platform } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

//Definir todas las pantallas que voy a tener la aplicacion, Definer todas las rutas permitidas  
//Por defecto ninguna pagina recibe nd undifine segun react 
//Definir los props de PersonaScreen
export type RootStackParamsHome = {
    HomeScreen: undefined
    SearchTeacher: undefined
    InfoTeacherScreen: { profesor: ProfesorCercano }
    PaymentHistory: undefined,
    SecurityScreen: undefined,
    SupportScreen: undefined,
    MethodPayScreen: undefined,
    HelpScreen: undefined,
    AccountScreen: undefined,
    HomeTeacherScreen: undefined,
    ReportScreen: undefined,
    EditInfoTeacher: undefined
};
////////////////////////////////////////////////////////////

const Stack = createStackNavigator<RootStackParamsHome>(); //Crear Stack Navigator

const HomeNavigator = () => {
    const { tipo_usuario } = useContext(AuthContext)
    return (
        <Stack.Navigator
            screenOptions={{
                transitionSpec: { open: Platform.OS === 'ios' ? TransitionSpecs.TransitionIOSSpec : TransitionSpecs.FadeInFromBottomAndroidSpec, close: Platform.OS === 'ios' ? TransitionSpecs.TransitionIOSSpec : TransitionSpecs.FadeOutToBottomAndroidSpec },
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fff', //Fondo de todas las tarjetas es blanco
                },
                headerStyle: {
                    elevation: 0, //Se quita la linea de las tarjetas 
                    shadowColor: 'transparent', //Lo mismo pero para IOS 

                },
            }}>
            {tipo_usuario === 'Profesor' ?
                <Stack.Screen
                    name="HomeTeacherScreen" //Nombre
                    component={HomeTeacherScreen} //Componente
                />
                :
                <Stack.Screen
                    name="HomeScreen" //Nombre
                    component={HomeScreen} //Componente
                />
            }

            <Stack.Screen
                name="SearchTeacher" //Nombre 
                component={SearchTeacherScreen} //Componente
            />
            <Stack.Screen
                name="InfoTeacherScreen" //Nombre 
                component={InfoTeacherScreen} //Componente
            />
            <Stack.Screen
                name="PaymentHistory" //Nombre 
                component={PaymentHistory} //Componente
            />
            <Stack.Screen
                name="SecurityScreen" //Nombre 
                component={SecurityScreen} //Componente
            />
            <Stack.Screen
                name="SupportScreen" //Nombre 
                component={SupportScreen} //Componente
            />
            <Stack.Screen
                name="MethodPayScreen" //Nombre 
                component={MethodPayScreen} //Componente
            />
            <Stack.Screen
                name="HelpScreen" //Nombre 
                component={HelpScreen} //Componente
            />
            <Stack.Screen
                name="AccountScreen" //Nombre 
                component={AccountScreen} //Componente
            />

            <Stack.Screen
                name="ReportScreen" //Nombre 
                component={ReportScreen} //Componente
            />
            <Stack.Screen
                name="EditInfoTeacher" //Nombre 
                component={EditInfo} //Componente
            />
        </Stack.Navigator >
    );
};
export default HomeNavigator



