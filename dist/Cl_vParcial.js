import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vEquipos extends Cl_vGeneral {
  constructor() {
    super({ formName: "agenda" });
    this.contacto1 = null;
    this.contacto2 = null;
    this.contacto3 = null;
    this.contacto4 = null;
    this.contacto5 = null;
    this.inCedulaBuscar = this.crearHTMLInputElement("inCedulaBuscar", {
      refresh: () => {},
      oninput: () => this.actualizarBotones(),
    });
    this.btBorrarCedula = this.crearHTMLButtonElement("btBorrarCedula", {
      onclick: () => {
        this.inCedulaBuscar.value = "";
        this.actualizarBotones();
      },
      refresh: () => (this.btBorrarCedula.hidden = !this.cedula),
    });
    this.btCedula1 = this.crearHTMLButtonElement("btCedula1", {
      onclick: () => this.grabarContacto(+this.btCedula1.innerHTML),
    });
    this.btEliminar1 = this.crearHTMLButtonElement("btEliminar1", {
      onclick: () => this.eliminarcontacto(+this.btCedula1.innerHTML),
      refresh: () => {
        var _a;
        return (this.btEliminar1.hidden = !((_a = this.contacto1) === null ||
        _a === void 0
          ? void 0
          : _a.id));
      },
    });
    this.btConsultar1 = this.crearHTMLButtonElement("btConsultar1", {
      onclick: () => this.consultarcontacto(this.contacto1),
      refresh: () => (this.btConsultar1.hidden = !this.contacto1),
    });
    this.lblcontacto1 = this.crearHTMLElement("lblcontacto1", {
      type: tHTMLElement.LABEL,
    });
    this.btCedula2 = this.crearHTMLButtonElement("btCedula2", {
      onclick: () => this.grabarContacto(+this.btCedula2.innerHTML),
    });
    this.btEliminar2 = this.crearHTMLButtonElement("btEliminar2", {
      onclick: () => this.eliminarcontacto(+this.btCedula2.innerHTML),
      refresh: () => {
        var _a;
        return (this.btEliminar2.hidden = !((_a = this.contacto2) === null ||
        _a === void 0
          ? void 0
          : _a.id));
      },
    });
    this.btConsultar2 = this.crearHTMLButtonElement("btConsultar2", {
      onclick: () => this.consultarcontacto(this.contacto2),
      refresh: () => (this.btConsultar2.hidden = !this.contacto2),
    });
    this.lblcontacto2 = this.crearHTMLElement("lblcontacto2", {
      type: tHTMLElement.LABEL,
    });
    this.btCedula3 = this.crearHTMLButtonElement("btCedula3", {
      onclick: () => this.grabarContacto(+this.btCedula3.innerHTML),
    });
    this.btEliminar3 = this.crearHTMLButtonElement("btEliminar3", {
      onclick: () => this.eliminarcontacto(+this.btCedula3.innerHTML),
      refresh: () => {
        var _a;
        return (this.btEliminar3.hidden = !((_a = this.contacto3) === null ||
        _a === void 0
          ? void 0
          : _a.id));
      },
    });
    this.btConsultar3 = this.crearHTMLButtonElement("btConsultar3", {
      onclick: () => this.consultarcontacto(this.contacto3),
      refresh: () => (this.btConsultar3.hidden = !this.contacto3),
    });
    this.lblcontacto3 = this.crearHTMLElement("lblcontacto3", {
      type: tHTMLElement.LABEL,
    });
    this.btCedula4 = this.crearHTMLButtonElement("btCedula4", {
      onclick: () => this.grabarContacto(+this.btCedula4.innerHTML),
      refresh: () => {
        var _a;
        return (this.btCedula4.disabled = Boolean(
          (_a = this.contacto4) === null || _a === void 0 ? void 0 : _a.id
        ));
      },
    });
    this.btEliminar4 = this.crearHTMLButtonElement("btEliminar4", {
      onclick: () => this.eliminarcontacto(+this.btCedula4.innerHTML),
      refresh: () => {
        var _a;
        return (this.btEliminar4.hidden = !((_a = this.contacto4) === null ||
        _a === void 0
          ? void 0
          : _a.id));
      },
    });
    this.btConsultar4 = this.crearHTMLButtonElement("btConsultar4", {
      onclick: () => this.consultarcontacto(this.contacto4),
      refresh: () => (this.btConsultar4.hidden = !this.contacto4),
    });
    this.lblcontacto4 = this.crearHTMLElement("lblcontacto4", {
      type: tHTMLElement.LABEL,
    });
    this.btCedula5 = this.crearHTMLButtonElement("btCedula5", {
      onclick: () => this.grabarContacto(+this.btCedula5.innerHTML),
      refresh: () => {
        var _a;
        return (this.btCedula5.disabled = Boolean(
          (_a = this.contacto5) === null || _a === void 0 ? void 0 : _a.id
        ));
      },
    });
    this.btEliminar5 = this.crearHTMLButtonElement("btEliminar5", {
      onclick: () => this.eliminarcontacto(+this.btCedula5.innerHTML),
      refresh: () => {
        var _a;
        return (this.btEliminar5.hidden = !((_a = this.contacto5) === null ||
        _a === void 0
          ? void 0
          : _a.id));
      },
    });
    this.btConsultar5 = this.crearHTMLButtonElement("btConsultar5", {
      onclick: () => this.consultarcontacto(this.contacto5),
      refresh: () => (this.btConsultar5.hidden = !this.contacto5),
    });
    this.lblcontacto5 = this.crearHTMLElement("lblcontacto5", {
      type: tHTMLElement.LABEL,
    });
    this.divRegistrados = this.crearHTMLElement("divRegistrados", {
      type: tHTMLElement.CONTAINER,
      refresh: () => {
        var _a;
        this.divRegistrados.innerHTML = "";
        (_a = this.controlador) === null || _a === void 0
          ? void 0
          : _a.registrados().forEach((contacto) => {
              this.divRegistrados.innerHTML += `
          <li><b>${contacto.cedula}
          (${contacto.numero})</b>: ${contacto.nombre}<br>
          (${contacto.profesor} 
          ${contacto.materia}-S${contacto.seccion})
          ${contacto.creadoEl}</li>`;
            });
      },
    });
    this.contacto1 = null;
    this.contacto2 = null;
    this.contacto3 = null;
    this.contacto4 = null;
    this.contacto5 = null;
  }
  get cedula() {
    return +this.inCedulaBuscar.value;
  }
  actualizarBotones() {
    var _a;
    let contactos =
        (_a = this.controlador) === null || _a === void 0
          ? void 0
          : _a.buscarCedulaagenda(this.cedula),
      activateButton = (contacto, button, label) => {
        button.innerHTML = contacto ? contacto.cedula.toString() : "";
        label.innerHTML = contacto
          ? `${contacto.numero}.${contacto.nombre}
                (${contacto.profesor})`
          : "";
      };
    if (!contactos) return;
    this.contacto1 = contactos[0];
    this.contacto2 = contactos[1];
    this.contacto3 = contactos[2];
    this.contacto4 = contactos[3];
    this.contacto5 = contactos[4];
    activateButton(contactos[0], this.btCedula1, this.lblcontacto1);
    activateButton(contactos[1], this.btCedula2, this.lblcontacto2);
    activateButton(contactos[2], this.btCedula3, this.lblcontacto3);
    activateButton(contactos[3], this.btCedula4, this.lblcontacto4);
    activateButton(contactos[4], this.btCedula5, this.lblcontacto5);
    this.refresh();
  }
  grabarContacto(cedula) {
    var _a;
    (_a = this.controlador) === null || _a === void 0
      ? void 0
      : _a.grabarContacto({
          cedula,
          callback: (error) => {
            if (error) alert(error);
            this.inCedulaBuscar.value = "";
            this.actualizarBotones();
            this.refresh();
          },
        });
  }
  eliminarcontacto(cedula) {
    var _a;
    if (!confirm(`¿Seguro de eliminar el contacto ${cedula}?`)) return;
    (_a = this.controlador) === null || _a === void 0
      ? void 0
      : _a.eliminarcontacto({
          cedula,
          callback: (error) => {
            if (error) alert(error);
            this.actualizarBotones();
            this.refresh();
          },
        });
  }
  consultarcontacto(contacto) {
    if (!contacto) return;
    alert(`
      N°: ${contacto.numero}
      Cédula: ${contacto.cedula}
      Nombre: ${contacto.nombre}
      Profesor: ${contacto.profesor}
      Materia: ${contacto.materia}
      Seccion: ${contacto.seccion}
      Creado el: ${contacto.creadoEl}`);
  }
}
