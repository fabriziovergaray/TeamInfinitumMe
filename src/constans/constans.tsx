import { Dimensions } from "react-native";
export const { width, height } = Dimensions.get('window');
const heightV = 732;
export const RADIO = height / heightV;

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const IconoYape = '';
export const ColorYape = '#742384';

export const IconoPlin = '';
export const ColorPlin = '#04DAD2'

export const IconoPagoEfectivo = '';
export const ColorPagoEfectivo = '#FFCC00'

export const DOMAIN = 'https://infinitum.intecsu.com'
export const RESTAPI = 'https://infinitum.intecsu.com/restapi'

export const metodosBd = [{ "id": 1, "nombre": "yape" }, { "id": 2, "nombre": "plin" }, { "id": 3, "nombre": "efectivo" }]
export const metodosbs2 = { "efectivo": { "id": 3, "value": "" }, "plin": { "id": 2, "value": "Seleccionado" }, "yape": { "id": 1, "value": "Seleccionado" } }