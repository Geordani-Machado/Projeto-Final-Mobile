import { Prisma } from "../../database/prismaCliente";
 
interface IMotorista{
    nome : string;
    telefone : string;
    idade : string;
    sexo : string;
}

export class CreateMotorista{
    async execute({nome, telefone, idade, sexo} : IMotorista){
       
        //salvar o motorista no banco de dados
        const Motorista = await Prisma.motorista.create({
            data:{
                nome,
                telefone,
                idade,
                sexo
            }
        })

        return Motorista;
    }
}