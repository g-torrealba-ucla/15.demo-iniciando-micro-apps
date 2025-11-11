import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251101-2020";
import Cl_mContacto from "./Cl_mContacto.js";
import { dtContactos } from "./data/dtContactos.js";
export default class Cl_mAgenda {
  constructor() {
    this.tbContacto = "L25.2.Asist-agenda2";
    this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
    this.agenda = [];
  }
  contacto(cedula) {
    return this.agenda.find((contacto) => contacto.cedula === cedula) || null;
  }
  grabarContacto({ contacto, callback }) {
    this.db.addRecord({
      tabla: this.tbContacto,
      registroAlias: contacto.cedula.toString(),
      object: contacto.toJSON(),
      callback: ({ id, objects, error }) => {
        if (!error) this.setagenda(objects);
        callback === null || callback === void 0 ? void 0 : callback(error);
      },
    });
  }
  eliminarcontacto({ contacto, callback }) {
    this.db.deleteRecord({
      tabla: this.tbContacto,
      object: contacto.toJSON(),
      callback: ({ objects, error }) => {
        if (error) throw new Error(error);
        this.setagenda(objects);
        callback === null || callback === void 0 ? void 0 : callback(error);
      },
    });
  }
  cargar(callback) {
    this.db.listRecords({
      tabla: this.tbContacto,
      callback: ({ objects, error }) => {
        if (error) throw new Error(error);
        else {
          this.setagenda(objects);
          callback === null || callback === void 0 ? void 0 : callback(error);
        }
      },
    });
  }
  setagenda(objects) {
    this.agenda = [];
    dtContactos.map((contacto) => this.agenda.push(new Cl_mContacto(contacto)));
    objects === null || objects === void 0
      ? void 0
      : objects.map((contacto) => {
          let index = this.agenda.findIndex(
            (e) => e.cedula === contacto.cedula
          );
          if (index >= 0) this.agenda[index] = new Cl_mContacto(contacto);
        });
  }
}
