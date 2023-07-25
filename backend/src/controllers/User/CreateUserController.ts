import { Request, Response, response } from "express";
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        /* Desconstruindo as informações recebidas do req.body */
        const { name, email, password } = req.body;
        /* Chama o Serviço */
        const createUserService = new CreateUserService();
        /* Envia os dados desconstruidos para o serviço (await espera a função do servico finalizar para ir pro return) */
        const user = await createUserService.execute({ name, email, password });

        return res.json(user)
    }
}

export { CreateUserController }