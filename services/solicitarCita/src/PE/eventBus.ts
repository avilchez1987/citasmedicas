// /solicitarCita/src/eventBus.ts
import AWS = require('aws-sdk');
const eventBridge = new AWS.EventBridge;



export const emitEvent = async (eventType: string, detail: any) => {
  
    const params = {
    Entries: [
      {
        Source: 'custom.solicitarCita',
        DetailType: eventType,
        Detail: JSON.stringify(detail),
        EventBusName: process.env.EVENT_BUS_NAME, // EventBus configurado en serverless.yml
      },
    ],
  };

  try {
    const result = await eventBridge.putEvents(params).promise();
    console.log('Evento publicado correctamente:', result);
  } catch (error) {
    console.error('Error al publicar el evento:', error);
    throw error;
  }
};
