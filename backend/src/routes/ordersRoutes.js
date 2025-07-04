import OrdersController from "../controllers/ordersController.js";
import express from 'express'

const ordersRouter = express.Router();

const ordersControllers = new OrdersController();

ordersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.getOrders();

    res.status(statusCode).send({ success, statusCode, body });
})

ordersRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.addOrder(req.body);

    res.status(statusCode).send({ success, statusCode, body });
})

ordersRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.deleteOrder(req.params.id);

    res.status(statusCode).send({ success, statusCode, body });
})

ordersRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.updateOrder(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body });
})



export default ordersRouter