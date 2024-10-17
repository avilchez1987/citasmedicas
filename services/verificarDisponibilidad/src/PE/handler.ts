import { SQSEvent, SQSHandler } from 'aws-lambda';

export const verificarDisponibilidadHandler: SQSHandler = async (event: SQSEvent) => {

    for (const record of event.Records) {
        
        const messageBody = JSON.parse(record.body);    

            console.log("Mensaje recibido:", messageBody);

    }
};
