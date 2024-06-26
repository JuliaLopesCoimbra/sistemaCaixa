import prismaClient from "../../prisma";
//criando a variavel tipada onde vai ser usada abaixo
interface OrderRequest{
    nr_pedido:number;
    name:string;
}

class CreateOrderService{
    //a funcao será realizando somente se passar o numero da mesa e o nome como criado na interface
    async execute({nr_pedido, name}: OrderRequest){
        const order = await prismaClient.order.create({
            data:{
                nr_pedido:nr_pedido,
                name:name
            }
        })

        return order
    }
}

export {CreateOrderService}