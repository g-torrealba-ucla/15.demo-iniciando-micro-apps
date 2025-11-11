import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vEquipos extends Cl_vGeneral {
    constructor() {
        super({ formName: "agenda" });
        this.inNombre = this.crearHTMLInputElement("inNombre", {
            refresh: () => { },
            oninput: () => this.actualizarContactosRegistrados(),
        });
        this.btAgregar = this.crearHTMLButtonElement("btAgregar", {
            onclick: () => this.agregarContacto(),
        });
        this.divContactosRegistrados = this.crearHTMLElement("divRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => { },
        });
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    actualizarContactosRegistrados() {
        var _a;
        this.divContactosRegistrados.innerHTML = "";
        let contactos = ((_a = this.controlador) === null || _a === void 0 ? void 0 : _a.contactosRegistrados()) || [];
        contactos = contactos.filter((contacto) => {
            return contacto.nombre.toLowerCase().includes(this.nombre.toLowerCase());
        });
        contactos.forEach((contacto) => {
            this.divContactosRegistrados.innerHTML += `${contacto.nombre}: ${contacto.telefono} (${contacto.cedula})<br>`;
        });
    }
    agregarContacto() {
        var _a;
        let cedula = prompt("Ingrese la cédula del nuevo contacto:");
        if (!cedula)
            return;
        let nombre = prompt("Ingrese el nombre:");
        if (!nombre)
            return;
        let telefono = prompt("Ingrese el teléfono:");
        if (!telefono)
            return;
        (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.agregarContacto({
            contactoData: {
                id: null,
                creadoEl: null,
                alias: null,
                cedula: +cedula,
                nombre: nombre,
                telefono: telefono,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
