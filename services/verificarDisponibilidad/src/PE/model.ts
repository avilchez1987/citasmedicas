
export interface VerificarDisponibilidadRequest {
    fechaHora: string;
    medicoiD: string;
    pais: string
}

export interface Disponibilidad {
    disponible: boolean;
    mensaje: string;
}