import { Router } from 'express'
import {TokenValidation} from '../middlewares/verifyToken'
import {findAll, getUser, addList,deleteUser, createUser, updateUser} from '../controllers/user.controller'
const router = Router();

//Para poder acceder a cualquier ruta debes estar registrado/logeado.
//Solo una persona registrada puede buscar, crear, elminar y actualizar un usuario.

router.get('/all', TokenValidation, findAll);
router.get('/:username', TokenValidation, getUser);
router.post('/list', TokenValidation, addList);
router.put('/:username', TokenValidation, updateUser)
router.post('/create', TokenValidation, createUser); 
router.delete('/:id',TokenValidation, deleteUser); //Se pasa el id del usuario a eliminar como parámetro

export default router;