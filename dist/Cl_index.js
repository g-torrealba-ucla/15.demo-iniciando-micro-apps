/**
 * Una aplicación que sirva para guardar los contactos de personas.
 * Debe permitir añadir un nuevo contacto.
 * Cada contacto tiene una cédula, nombre y un teléfono.
 * Debe permitir buscar por operadora telefónica (Movistar, Digitel, Movilnet).
 * Debe permitir buscar por número agenda de teléfono.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Cl_mAgenda from "./Cl_mAgenda.js";
import { dtContactos } from "./data/dtContactos.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mAgenda();
        this.cargarInicialDatos();
        // modelo.cargar((error: string | false) => {
        //   if (error) alert(error);
        //   if (error) throw new Error(error);
        //   let vista = new Cl_vAgenda();
        //   let controlador = new Cl_controlador(modelo, vista);
        //   vista.controlador = controlador;
        //   vista.refresh();
        // });
    }
    cargarInicialDatos() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const contacto of dtContactos) {
                yield new Promise((res) => setTimeout(res, 250)); // Espera 50ms
                this.modelo.agregarContacto({
                    contactoData: contacto,
                    callback: (error) => {
                        if (error)
                            console.error(error);
                    },
                });
            }
        });
    }
}
