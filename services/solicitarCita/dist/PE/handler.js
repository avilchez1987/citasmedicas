"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicitarCitaHandler = void 0;
const service_1 = require("./service");
const solicitarCitaHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requestBody = JSON.parse(event.body || '{}');
        console.log("Req: " + requestBody);
        const { pacienteID, doctorID, especialidad, fechaHora, estado, pais, eventType } = requestBody;
        const nuevaCita = yield (0, service_1.solicitarCita)(pacienteID, doctorID, especialidad, fechaHora, estado, pais, eventType);
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: 'Cita solicitada correctamente.',
                cita: nuevaCita,
            }),
        };
    }
    catch (error) {
        console.error('Error al solicitar cita:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error interno del servidor al solicitar la cita.',
                error: error.message,
            }),
        };
    }
});
exports.solicitarCitaHandler = solicitarCitaHandler;
//# sourceMappingURL=handler.js.map