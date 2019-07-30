"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedido_model_1 = require("../models/pedido.model");
const pedidosRoutes = express_1.Router();
pedidosRoutes.get('/prueba', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo funciona bien'
    });
});
//crear usuario
pedidosRoutes.post('/crearpedido', (req, res) => {
    const pedido = {
        id: req.body.id,
        producto: req.body.producto,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        empresa: req.body.empresa,
        id_usuario: req.body.userid,
        direccion: req.body.direccion,
        estado: req.body.estado
    };
    pedido_model_1.Pedido.create(pedido).then(userDB => {
        res.json({
            ok: true,
            Pedido: userDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = pedidosRoutes;
