import { Request, Response } from "express";
import { CreateOrderService } from "../../Services/order/CreateOrderService";
class CreateOrderController{
    async handle(req:Request, res:Response){
        //requisitando as variaveis da interface lá no service
        const {nr_pedido, name} = req.body

        const createorderService = new CreateOrderService();

        const order = await createorderService.execute({
            nr_pedido,name
        });

        return res.json(order)


    }
}
export {CreateOrderController}