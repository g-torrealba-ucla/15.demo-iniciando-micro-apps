import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251101-2020";
import { iContacto } from "./Cl_mContacto.js";
import Cl_mContacto from "./Cl_mContacto.js";
import { dtContactos } from "./data/dtContactos.js";
interface iResultObjects {
  objects: [iContacto] | null;
  error: string | false;
}
interface iResultEditObject {
  objects: [iContacto] | null;
  error: string | false;
}

export interface iAgregarContacto {
  contactoData: iContacto;
  callback: Function;
}

export default class Cl_mAgenda {
  public agenda: Cl_mContacto[];
  private db: Cl_dcytDb;
  readonly tbContacto: string = "L25.2.Agenda.v01";
  constructor() {
    this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
    this.agenda = [];
  }
  contacto(cedula: number): Cl_mContacto | null {
    return this.agenda.find((contacto) => contacto.cedula === cedula) || null;
  }

  agregarContacto({ contactoData, callback }: iAgregarContacto): void {
    let contacto = new Cl_mContacto(contactoData);
    if (!contacto.contactoOk()) {
      callback(contacto.contactoOk());
      return;
    }
    this.db.addRecord({
      tabla: this.tbContacto,
      registroAlias: contacto.cedula.toString(),
      object: contacto.toJSON(),
      callback: ({ id, objects, error }) => {
        if (!error) this.cargar(objects);
        callback?.(error);
      },
    });
  }
  cargar(callback: Function): void {
    this.db.listRecords({
      tabla: this.tbContacto,
      callback: ({ objects, error }: iResultObjects) => {
        if (error) alert(error);
        else {
          this.agenda = [];
          objects?.map((contacto) =>
            this.agenda.push(new Cl_mContacto(contacto))
          );
          callback?.(error);
        }
      },
    });
  }
}
