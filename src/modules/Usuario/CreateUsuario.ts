import internal from "stream";
import { Prisma } from "../../database/prismaCliente";
 
interface Usuario{
    nome : string;
    idade : internal;
    Email : string;
    Senha : string;
    PokeID: internal;
    Inventario: internal

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