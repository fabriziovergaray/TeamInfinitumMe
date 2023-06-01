import { User, UserType } from "../Interfaces/pruebaInterface";

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  errorMessage: string;
  user: User | null;
  tipo_usuario: string | null;
  userType: UserType | null;
}

export type PartialUserType = Partial<UserType>;

type AuthAction =
  | { type: 'signUp'; payload: { token: string; user: User, tipo_usuario: string, userType: UserType } }
  | { type: 'addError'; payload: string }
  | { type: 'removeError' }
  | { type: 'notAuthenticated' }
  | { type: 'logOut' }
  | { type: 'updateUser'; payload: PartialUserType };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        user: null,
        status: 'not-authenticated',
        errorMessage: action.payload,
        token: null,
        tipo_usuario: null,
        userType: null
      };
    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };
    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
        tipo_usuario: action.payload.tipo_usuario,
        userType: action.payload.userType
      };
    case 'notAuthenticated':
    case 'logOut':
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        user: null,
        tipo_usuario: null,
        userType: null
      };
    case 'updateUser':
      return {
        ...state,
        userType: Object.assign({}, state.userType, action.payload),
      };
    default:
      return state;
  }
};
