import 'react-native-gesture-handler';
import {
    useWindowDimensions,
} from 'react-native';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import MenuInterno from './MenuInterno';

const Drawer = createDrawerNavigator(); //Crear eL Drawer
const MenuLateral = () => {
    const { width } = useWindowDimensions(); //Dimensiones de la pantalla
    return (
        <Drawer.Navigator
        
            screenOptions={{
                headerShown: false,
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            
            drawerContent={props => <MenuInterno {...props} />}>
            <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
        </Drawer.Navigator>
    );
};



export default MenuLateral;
