"use strict";


var Objeto = /** @class */ (function () {
    function Objeto(id1, id2, texto, linea, columna, listaAtributos, listaObjetos, agregar) {
        this.identificador1 = id1;
        this.identificador2 = id2;
        this.texto = texto;
        this.linea = linea;
        this.columna = columna;
        this.listaAtributos = listaAtributos;
        this.listaObjetos = listaObjetos;
        this.agregar = agregar;
        this.entorno = null;
    }

    Objeto.prototype.getEntorno = function () {
        return this.entorno;
    };

    Objeto.prototype.concatenarTexto = function (texto) {
        this.texto = this.texto + " " + texto;
    };
    return Objeto;
}());
