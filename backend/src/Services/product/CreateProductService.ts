import prismaClient from "../../prisma";

//quem usar essa nossa função precisa forcencer os dados abaixo
interface ProductRequest{
    name:string,
    price:string,
    description:string,
    banner:string,
    category_id:string;
}

class CreateProductService{
    async execute({name,price,description,banner,category_id}:ProductRequest){
        //criando o produto lá no banco de dados
        const product = await prismaClient.product.create({
            data:{
                name:name,
                price:price,
                description:description,
                banner:banner,
                category_id:category_id,
            }
        })
        return product

    }
}

export {CreateProductService}