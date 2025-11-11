/**
 * Una aplicación que sirva para guardar los contactos de personas.
 * Debe permitir añadir un nuevo contacto.
 * Cada contacto tiene una cédula, nombre y un teléfono.
 * Debe permitir buscar por operadora telefónica (Movistar, Digitel, Movilnet).
 * Debe permitir buscar por número agenda de teléfono.
 */

import Cl_controlador from "./Cl_controlador.js";
import Cl_mAgenda from "./Cl_mAgenda.js";
import Cl_vAgenda from "./Cl_vAgenda.js";
import { dtContactos } from "./data/dtContactos.js";

export default class Cl_index {
  public modelo: Cl_mAgenda;
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
  async cargarInicialDatos() {
    for (const contacto of dtContactos) {
      await new Promise((res) => setTimeout(res, 250)); // Espera 50ms
      this.modelo.agregarContacto({
        contactoData: contacto,
        callback: (error: string | false) => {
          if (error) console.error(error);
        },
      });
    }
  }
}
