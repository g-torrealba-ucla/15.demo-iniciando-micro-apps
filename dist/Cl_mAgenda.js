import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251101-2020";
import Cl_mContacto from "./Cl_mContacto.js";
export default class Cl_mAgenda {
    constructor() {
        this.tbContacto = "L25.2.Agenda.v01";
        this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
        this.agenda = [];
    }
    contacto(cedula) {
        return this.agenda.find((contacto) => contacto.cedula === cedula) || null;
    }
    agregarContacto({ contactoData, callback }) {
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
                if (!error)
                    this.cargar(objects);
                callback === null || callback === void 0 ? void 0 : callback(error);
            },
        });
    }
    cargar(callback) {
        this.db.listRecords({
            tabla: this.tbContacto,
            callback: ({ objects, error }) => {
                if (error)
                    alert(error);
                else {
                    this.agenda = [];
                    objects === null || objects === void 0 ? void 0 : objects.map((contacto) => this.agenda.push(new Cl_mContacto(contacto)));
                    callback === null || callback === void 0 ? void 0 : callback(error);
                }
            },
        });
    }
}
