import { Cita } from "./model";
import { emitEvent } from "./eventBus";
import { v4 as uuidv4 } from 'uuid';


export const solicitarCita = async (
    pacienteID: string,
    doctorID: string,
    especialidad: string,
    fechaHora: string,
    estado: string,
    pais: string,
    eventType: string
  ): Promise<Cita> => {

    const citaId = uuidv4();
  
    const nuevaCita: Cita = {
      id: citaId,
      pacienteID,
      doctorID,
      especialidad,
      fechaHora,
      estado,
      pais,
      eventType
    };
  
    await emitEvent(eventType, nuevaCita);
  
    console.log(`Evento ${eventType} enviado para la cita ${citaId}`);
  
    return nuevaCita;
  };