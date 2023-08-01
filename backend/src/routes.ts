import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { DetailUserController } from "./controllers/User/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";

import { CreateProductController } from "./controllers/Product/CreateProductController";


import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./imgProduts"))

/* -- Rotas User --- */
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

/* -- Rotas Category --- */
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

/* -- Rotas Product --- */
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

export { router }