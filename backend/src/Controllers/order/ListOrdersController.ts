import { Request,Response } from "express";
import { ListOrdersService } from "../../Services/order/ListOrdersService";
import { ListByCategoryService } from "../../Services/product/ListByCategoryService";
class ListOrdersController{
    async handle(req:Request, res:Response){
        const listOrdersService = new ListOrdersService();

        const orders = await listOrdersService.execute();

        return res.json(orders)
    }
}
export {ListOrdersController}