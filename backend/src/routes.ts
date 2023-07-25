import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
const router = Router();

/* -- Rotas User --- */
router.post('/users', new CreateUserController().handle)

export { router }