// Generated by https://quicktype.io

export interface LoginResponse {
    mensaje: string;
    userType: UserType;
    rpta: number;
    tipoUsuario: string;
    token: string;
}



export interface User {

    email: string;
    id: string;
    tipo: string;
}

export interface UserType {
    apellidos: string;
    nombres: string;
    usuarios_id?: string | null;
    tipo_de_usuario: string;
    fecha_creacion: string;
    id: string;
    foto_perfil: string;
    user: User;

    //Propio del Profesor
    correo_contacto?: string | null;
    descripcion?: string | null;
    estado?: string | null;
    numero_documento?: string | null;
    precio_ensenianza?: string | null;
    tipo_profesor?: string | null;

    //Propiedo del alumno
    edad?: string | null;
    grado_academico?: string | null;

}




