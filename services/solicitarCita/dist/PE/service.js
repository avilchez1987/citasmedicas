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
exports.solicitarCita = void 0;
const eventBus_1 = require("./eventBus");
const uuid_1 = require("uuid");
const solicitarCita = (pacienteID, doctorID, especialidad, fechaHora, estado, pais, eventType) => __awaiter(void 0, void 0, void 0, function* () {
    const citaId = (0, uuid_1.v4)();
    const nuevaCita = {
        id: citaId,
        pacienteID,
        doctorID,
        especialidad,
        fechaHora,
        estado,
        pais,
        eventType
    };
    yield (0, eventBus_1.emitEvent)(eventType, nuevaCita);
    console.log(`Evento ${eventType} enviado para la cita ${citaId}`);
    return nuevaCita;
});
exports.solicitarCita = solicitarCita;
//# sourceMappingURL=service.js.map