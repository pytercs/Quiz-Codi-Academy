import { Router } from "express";
const router = Router();

/*Importação dos controladores */
import * as controller from '../controllers/controller.js';

/* API das Rotas de Perguntas*/
router.route('/questions')
    .get(controller.getQuestions) /* GET */
    .post(controller.insertQuestions) /* POST */
    .delete(controller.dropQuestions) /* DELETE */

router.route('/results')
    .get(controller.getResults) /* GET */
    .post(controller.insertResults) /* POST */
    .delete(controller.dropResults) /* DELETE */

export default router;