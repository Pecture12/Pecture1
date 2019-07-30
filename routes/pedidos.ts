import { Router, Request, Response } from "express";
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcrypt';
import Token from '../classes/token';
import { verificaToken } from '../middlewares/autenticacion';
import { Pedido } from '../models/pedido.model';

const pedidosRoutes = Router();

pedidosRoutes.get('/prueba', ( req: Request, res: Response ) => {
    res.json({
        ok: true,
        mensaje: 'Todo funciona bien'
    })
});

//crear usuario
pedidosRoutes.post('/crearpedido', ( req: Request, res: Response ) => {

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

    Pedido.create( pedido ).then( userDB => {

        res.json({
            ok: true,
            Pedido: userDB
        });

    }).catch( err => {

        res.json({
            ok: false,
            err
        });

    });
    
});


export default pedidosRoutes;