export default class Cl_mContacto {
    constructor({ id = null, creadoEl = null, alias = null, cedula = 0, nombre = "", telefono = "", } = {
        id: null,
        creadoEl: null,
        alias: null,
        cedula: 0,
        nombre: "",
        telefono: "",
    }) {
        this._id = null;
        this._creadoEl = null;
        this._alias = null;
        this._cedula = 0;
        this._nombre = "";
        this._telefono = "";
        this.id = id;
        this.creadoEl = creadoEl;
        this.alias = alias;
        this.cedula = cedula;
        this.nombre = nombre;
        this.telefono = telefono;
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
    set alias(alias) {
        this._alias = alias ? alias.trim() : null;
    }
    get alias() {
        return this._alias;
    }
    set cedula(cedula) {
        this._cedula = +cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }
    get telefono() {
        return this._telefono;
    }
    contactoOk() {
        if (this.cedula <= 1000000 || this.cedula >= 99999999)
            return "Cédula inválida.";
        if (this.nombre === "")
            return "Nombre inválido.";
        if (this.telefono.length < 11)
            return "Teléfono inválido.";
        if (["0412", "0422", "0414", "0424", "0416", "0426"].indexOf(this.telefono.substring(0, 4)) < 0)
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
