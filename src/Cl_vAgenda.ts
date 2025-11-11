import Cl_mContacto, { iContacto } from "./Cl_mContacto.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vEquipos extends Cl_vGeneral {
  private inNombre: HTMLInputElement;
  private btAgregar: HTMLButtonElement;
  private divContactosRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "agenda" });
    this.inNombre = this.crearHTMLInputElement("inNombre", {
      refresh: () => {},
      oninput: () => this.actualizarContactosRegistrados(),
    });
    this.btAgregar = this.crearHTMLButtonElement("btAgregar", {
      onclick: () => this.agregarContacto(),
    });
    this.divContactosRegistrados = this.crearHTMLElement(
      "divContactosRegistrados",
      {
        type: tHTMLElement.CONTAINER,
        refresh: () => this.actualizarContactosRegistrados(),
      }
    ) as HTMLDivElement;
  }
  get nombre() {
    return this.inNombre.value.trim();
  }
  actualizarContactosRegistrados() {
    this.divContactosRegistrados.innerHTML = "";
    let contactos = this.controlador?.contactosRegistrados() || [];
    contactos = contactos.filter((contacto) => {
      return contacto.nombre.toLowerCase().includes(this.nombre.toLowerCase());
    });
    contactos.forEach((contacto) => {
      this.divContactosRegistrados.innerHTML += `${contacto.nombre}: ${contacto.telefono} (${contacto.cedula})<br>`;
    });
  }
  agregarContacto() {
    let cedula = prompt("Ingrese la cédula del nuevo contacto:");
    if (!cedula) return;
    let nombre = prompt("Ingrese el nombre:");
    if (!nombre) return;
    let telefono = prompt("Ingrese el teléfono:");
    if (!telefono) return;
    this.controlador?.agregarContacto({
      contactoData: {
        id: null,
        creadoEl: null,
        alias: null,
        cedula: +cedula,
        nombre: nombre,
        telefono: telefono,
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}
