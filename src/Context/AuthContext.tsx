import { createContext, useEffect, useReducer } from "react";
import { LoginData, RegisterDataStudent, RegisterDataTeacher } from "../Interfaces/cursosInterfaces";
import { AuthState, PartialUserType, authReducer } from "./AuthReducer";
import teamInfinitum from "../Api/teamInfinitum";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User, LoginResponse, UserType } from "../Interfaces/pruebaInterface";

type AuthContextProps = {
  errorMessage: string;
  token?: string | null;
  tipo_usuario: string | null;
  user: User | null;
  userType: UserType | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  updateUser: (payload: PartialUserType) => void;
  singUpStudent: (registerDataStudent: RegisterDataStudent) => Promise<boolean>;
  singUpTeacher: (RegisterDataTeacher: RegisterDataTeacher) => Promise<boolean>;
  singIng: (loginData: LoginData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  logOut: () => void;
  removeError: () => void;
  singIngTeacher: (loginData: LoginData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
}
const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  errorMessage: '',
  user: null,
  tipo_usuario: null,
  userType: null
};
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  useEffect(() => {
    cheackToken()
  }, [])

  const cheackToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const userString = await AsyncStorage.getItem('user');
    const tipo_usuario = await AsyncStorage.getItem('tipo_usuario');
    const userType = await AsyncStorage.getItem('userType');
    if (!token) return dispatch({ type: 'notAuthenticated' });
    if (!userType) return;
    if (!tipo_usuario) return;
    let user: User | null = null;
    if (userString) {
      user = JSON.parse(userString) as User;
    }

    if (user) return dispatch({ type: 'signUp', payload: { token, user, tipo_usuario, userType: JSON.parse(userType) } })

  };
  const updateUser = (payload: PartialUserType) => {
    dispatch({ type: 'updateUser', payload });

    AsyncStorage.getItem('userType').then((userTypeString) => {
      if (userTypeString) {
        const userType = JSON.parse(userTypeString) as UserType;
        const updatedUserType = { ...userType, ...payload };
        AsyncStorage.setItem('userType', JSON.stringify(updatedUserType));
      }
    });
  };

  const singUpStudent = async ({ apellidos, contrasena, correo, edad, nombres, tipo, gradoAcademico }: RegisterDataStudent) => {
    const data = new FormData()
    data.append('apellidos', apellidos)
    data.append('contrasena', contrasena)
    data.append('correo', correo)
    data.append('edad', edad)
    data.append('nombres', nombres)
    data.append('tipo', tipo)
    data.append('grado_academico', gradoAcademico)
    try {
      const response = await teamInfinitum.post(`/registro-${tipo}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (!apellidos || !contrasena || !correo || !edad || !nombres || !tipo) {
        dispatch({ type: 'addError', payload: 'Debe completar todos los campos para continuar' })
        return false
      }
      if (response.data.rpta === 0) {
        dispatch({ type: 'addError', payload: response.data.mensaje || 'Error en el registro' })
        return false
      }
      return true;
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const singUpTeacher = async ({ apellidos, correo, descripcion, foto_perfil, nombres, numeroDoc, precio_ensenianza, teacherType, tipo }: RegisterDataTeacher) => {
    const data = new FormData()
    data.append('apellidos', apellidos);
    data.append('correo', correo);
    data.append('descripcion', descripcion);
    data.append('foto_perfil', foto_perfil);
    data.append('nombres', nombres);
    data.append('numeroDoc', numeroDoc);
    data.append('precio_ensenianza', precio_ensenianza);
    data.append('teacherType', teacherType);
    data.append('tipo', tipo);

    try {
      if (!apellidos || !correo || !descripcion || !foto_perfil || !nombres || !numeroDoc || !precio_ensenianza || !teacherType || !tipo) {
        dispatch({ type: 'addError', payload: 'Debe completar todos los campos para continuar' })
        return false
      }
      const response = await teamInfinitum.post(`registro-${tipo}`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
      if (response.data.rpta === 0) {
        dispatch({ type: 'addError', payload: response.data.mensaje || 'Error en el registro' })
        return false
      }
      return true;
    } catch (error) {
      console.log(error)
      return false

    }

  }
  const singIng = async ({ correo, password, tipo_usuario }: LoginData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true)
    const data = new FormData()
    data.append('email', correo)
    data.append('contrasena', password)
    data.append('tipo', tipo_usuario)

    teamInfinitum.post<LoginResponse>('/login', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      setLoading(false)
      console.log(response.data)

      dispatch({
        payload: { tipo_usuario: response.data.tipoUsuario, user: response.data.userType.user, token: response.data.token, userType: response.data.userType }, type: 'signUp'
      })

      if (response.data.rpta === 0) {
        dispatch({ type: 'addError', payload: response.data.mensaje || 'Credenciales incorrectas' })
      } else {
        AsyncStorage.setItem('token', response.data.token)
        AsyncStorage.setItem('user', JSON.stringify(response.data.userType.user))
        AsyncStorage.setItem('userType', JSON.stringify(response.data.userType))
        AsyncStorage.setItem('tipo_usuario', response.data.tipoUsuario)
      }
    }).catch((error) => {
      setLoading(false)
      console.log(error)
    })
  }
  const singIngTeacher = async ({ correo, password, tipo_usuario }: LoginData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true)
    const data = new FormData()
    data.append('email', correo);
    data.append('contrasena', password)
    data.append('tipo', tipo_usuario)

    teamInfinitum.post<LoginResponse>('/login', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        setLoading(false)
        console.log(response.data)
        dispatch({
          payload: { userType: response.data.userType, tipo_usuario: response.data.tipoUsuario, token: response.data.token, user: response.data.userType.user }, type: 'signUp'
        })
        if (response.data.rpta === 0) {
          dispatch({ type: 'addError', payload: response.data.mensaje || 'Credenciales incorrectas' })
        } else {
          AsyncStorage.setItem('token', response.data.token)
          AsyncStorage.setItem('user', JSON.stringify(response.data.userType.user))
          AsyncStorage.setItem('tipo_usuario', response.data.tipoUsuario)
          AsyncStorage.setItem('userType', JSON.stringify(response.data.userType))

        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  const logOut = async () => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('user')
    await AsyncStorage.removeItem('tipo_usuario')
    dispatch({ type: "logOut" })

  }
  const removeError = () => {
    dispatch({ type: 'removeError' });

  }
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  return (
    <AuthContext.Provider value={{
      ...state,
      singIng, logOut, removeError, singUpStudent, singUpTeacher, singIngTeacher, updateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}