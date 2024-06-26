import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();
//exportando para conseguir usar posteriormente nos codigos
export default prismaClient