import Cl_mContacto, { iContacto } from "./Cl_mContacto.js";
import Cl_mAgenda from "./Cl_mAgenda.js";
import Cl_vContactos from "./Cl_vAgenda.js";

export default class Cl_controlador {
  public modelo: Cl_mAgenda;
  public vista: Cl_vContactos;
  constructor(modelo: Cl_mAgenda, vista: Cl_vContactos) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarContacto({
    contactoData,
    callback,
  }: {
    contactoData: iContacto;
    callback: Function;
  }): void {
    this.modelo.agregarContacto({
      contactoData,
      callback,
    });
  }
  contactosRegistrados(): iContacto[] {
    let contactos: iContacto[] = [];
    this.modelo.agenda.map((contacto) => {
      if (contacto.id) contactos.push(contacto.toJSON());
    });
    contactos.sort((a, b) => a.cedula - b.cedula);
    return contactos;
  }
}
