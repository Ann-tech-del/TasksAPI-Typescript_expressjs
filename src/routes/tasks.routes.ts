import { Router} from 'express'
const router =Router();
import { createTasks, deleteTask, getAllTasks, getSpecificTask, modifyTask } from '../controllers/tasks.controller';
import { validateTasks } from '../middleware/validateTask';


router.get("/",getAllTasks)
router.post("/", validateTasks,createTasks )
router.get("/:id",getSpecificTask)
router.patch("/:id",modifyTask)
router.delete("/:id",deleteTask)




export default router;
