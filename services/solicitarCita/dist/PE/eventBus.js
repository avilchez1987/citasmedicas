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
exports.emitEvent = void 0;
const AWS = require("aws-sdk");
const eventBridge = new AWS.EventBridge;
const emitEvent = (eventType, detail) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        Entries: [
            {
                Source: 'custom.solicitarCita',
                DetailType: eventType,
                Detail: JSON.stringify(detail),
                EventBusName: process.env.EVENT_BUS_NAME,
            },
        ],
    };
    try {
        const result = yield eventBridge.putEvents(params).promise();
        console.log('Evento publicado correctamente:', result);
    }
    catch (error) {
        console.error('Error al publicar el evento:', error);
        throw error;
    }
});
exports.emitEvent = emitEvent;
//# sourceMappingURL=eventBus.js.map