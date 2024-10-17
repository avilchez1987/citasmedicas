// /solicitarCita/src/handler.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { solicitarCita } from './service';



export const solicitarCitaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  try {
    // Parsear el cuerpo de la solicitud
    const requestBody = JSON.parse(event.body || '{}');

    console.log("Req: " + requestBody);

    const {
      pacienteID,
      doctorID,
      especialidad,
      fechaHora,
      estado,
      pais,
      eventType
    } = requestBody;


    // Llamar al servicio de solicitar cita
    const nuevaCita = await solicitarCita(
      pacienteID,
      doctorID,
      especialidad,
      fechaHora,
      estado,
      pais,
      eventType
    );

    // Devolver la respuesta con la nueva cita
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Cita solicitada correctamente.',
        cita: nuevaCita,
      }),
    };
  } catch (error) {
    console.error('Error al solicitar cita:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error interno del servidor al solicitar la cita.',
        error: (error as Error).message,
      }),
    };
  }
};
