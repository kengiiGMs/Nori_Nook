import { Router } from "express";

import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
AuthUserController
const router = Router();

/* -- Rotas User --- */
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

export { router }