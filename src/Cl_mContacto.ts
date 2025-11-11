export interface iContacto {
  id: number | null;
  creadoEl: string | null;
  alias: string | null;
  cedula: number;
  nombre: string;
  telefono: string;
}
export default class Cl_mContacto {
  private _id: number | null = null;
  private _creadoEl: string | null = null;
  private _alias: string | null = null;
  private _cedula: number = 0;
  private _nombre: string = "";
  private _telefono: string = "";
  constructor(
    {
      id = null,
      creadoEl = null,
      alias = null,
      cedula = 0,
      nombre = "",
      telefono = "",
    }: iContacto = {
      id: null,
      creadoEl: null,
      alias: null,
      cedula: 0,
      nombre: "",
      telefono: "",
    }
  ) {
    this.id = id;
    this.creadoEl = creadoEl;
    this.alias = alias;
    this.cedula = cedula;
    this.nombre = nombre;
    this.telefono = telefono;
  }
  set id(id: number | null) {
    this._id = id ? +id : null;
  }
  get id() {
    return this._id;
  }
  set creadoEl(creadoEl: string | null) {
    this._creadoEl = creadoEl;
  }
  get creadoEl() {
    return this._creadoEl;
  }
  set alias(alias: string | null) {
    this._alias = alias ? alias.trim() : null;
  }
  get alias() {
    return this._alias;
  }
  set cedula(cedula: number) {
    this._cedula = +cedula;
  }
  get cedula() {
    return this._cedula;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim();
  }
  get nombre() {
    return this._nombre;
  }
  set telefono(telefono: string) {
    this._telefono = telefono;
  }
  get telefono() {
    return this._telefono;
  }
  contactoOk(): string | true {
    if (this.cedula <= 1000000 || this.cedula >= 99999999)
      return "Cédula inválida.";
    if (this.nombre === "") return "Nombre inválido.";
    if (this.telefono.length < 11) return "Teléfono inválido.";
    if (
      ["0412", "0422", "0414", "0424", "0416", "0426"].indexOf(
        this.telefono.substring(0, 4)
      ) < 0
    )
      return "Operadora telefónica inválida.";
    return true;
  }
  toJSON() {
    return {
      id: this._id,
      creadoEl: this._creadoEl,
      alias: this._alias,
      cedula: this._cedula,
      nombre: this._nombre,
      telefono: this._telefono,
    };
  }
}
