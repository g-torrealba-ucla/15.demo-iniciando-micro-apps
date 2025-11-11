export default class Cl_mContacto {
  constructor(
    {
      id = 0,
      creadoEl = null,
      alias = null,
      numero = 0,
      cedula = 0,
      nombre = "",
      materia = "",
      seccion = 0,
      profesor = "",
    } = {
      id: null,
      creadoEl: null,
      alias: null,
      numero: 0,
      cedula: 0,
      nombre: "",
      materia: "",
      seccion: 0,
      profesor: "",
    }
  ) {
    this._id = null;
    this._creadoEl = null;
    this._alias = null;
    this._numero = 0;
    this._cedula = 0;
    this._nombre = "";
    this._materia = "";
    this._seccion = 0;
    this._profesor = "";
    this.id = id;
    this.creadoEl = creadoEl;
    alias = alias;
    this.numero = numero;
    this.cedula = cedula;
    this.nombre = nombre;
    this.materia = materia;
    this.seccion = seccion;
    this.profesor = profesor;
  }
  set id(id) {
    this._id = id ? +id : null;
  }
  get id() {
    return this._id;
  }
  set creadoEl(creadoEl) {
    this._creadoEl = creadoEl;
  }
  get creadoEl() {
    return this._creadoEl;
  }
  set numero(numero) {
    this._numero = +numero;
  }
  get numero() {
    return this._numero;
  }
  set cedula(cedula) {
    this._cedula = +cedula;
  }
  get cedula() {
    return this._cedula;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get nombre() {
    return this._nombre;
  }
  set materia(materia) {
    this._materia = materia;
  }
  get materia() {
    return this._materia;
  }
  set seccion(seccion) {
    this._seccion = +seccion;
  }
  get seccion() {
    return this._seccion;
  }
  set profesor(profesor) {
    this._profesor = profesor;
  }
  get profesor() {
    return this._profesor;
  }
  tieneCedulaagenda(numero) {
    return this.cedula.toString().includes(numero.toString());
  }
  toJSON() {
    return {
      id: this._id,
      creadoEl: this._creadoEl,
      alias: this._alias,
      numero: this._numero,
      cedula: this._cedula,
      nombre: this._nombre,
      materia: this._materia,
      seccion: this._seccion,
      profesor: this._profesor,
    };
  }
}
