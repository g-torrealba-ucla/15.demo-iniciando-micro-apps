export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarContacto({ contactoData, callback, }) {
        this.modelo.agregarContacto({
            contactoData,
            callback,
        });
    }
    contactosRegistrados() {
        let contactos = [];
        this.modelo.agenda.map((contacto) => {
            if (contacto.id)
                contactos.push(contacto.toJSON());
        });
        contactos.sort((a, b) => a.cedula - b.cedula);
        return contactos;
    }
}
