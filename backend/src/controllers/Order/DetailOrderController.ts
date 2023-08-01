import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";


class DetailOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string
        const detailsOrderService = new DetailOrderService();

        const orders = await detailsOrderService.execute({
            order_id
        })

        return res.json(orders)

    }
}

export { DetailOrderController }