import { Router } from 'express'
import {TokenValidation} from '../middlewares/verifyToken'
import {findAll, addList, getAsteroid, updateAsteroid, createAsteroid, deleteAsteroid} from '../controllers/asteroids.controller'
const router = Router();


//Solo una persona registrada puede crear, elminar y actualizar un asteroide.

router.get('/all', findAll);
router.get('/:fullname', getAsteroid);
router.post('/list', TokenValidation, addList);
router.put('/:fullname', TokenValidation, updateAsteroid)
router.post('/create', TokenValidation, createAsteroid); 
router.delete('/:fullname',TokenValidation, deleteAsteroid);


export default router;