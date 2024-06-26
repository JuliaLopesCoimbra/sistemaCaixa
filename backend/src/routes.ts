import { Router, Request, Response } from "express";
//resquest pega, response responde
import multer from "multer";
import { CreateUserController } from "./Controllers/user/CreateUserController";
import { AuthUserController } from "./Controllers/user/AuthUserController";
import { DetailUserController } from "./Controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./Controllers/category/CreateCategoryController";
import { ListCategoryController } from "./Controllers/category/ListCategoryController";
import { CreateProductController } from "./Controllers/product/CreateProductController";
import { ListByCategoryController } from "./Controllers/product/ListByProductController";
import { CreateOrderController } from "./Controllers/order/CreateOrderController";
import { RemoveOrderController } from "./Controllers/order/RemoveOrderController";
import Liost
import uploadConfig from "./config/multer";

//recebendo a capacidade rotas
const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//               TODAS AS MINHAS ROTAS
//cadastrando um usuario
router.post('/users', new CreateUserController().handle )

//login
router.post('/session', new AuthUserController().handle)

//buscar info dos users
router.get('/me', isAuthenticated, new DetailUserController().handle)

//cadastrar a categoria
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
//listar todas as categorias
router.get('/category', isAuthenticated, new ListCategoryController().handle);



//criar produto
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
//listar produtos de categoria
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)


//order
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrdersController().handle)




export {router};