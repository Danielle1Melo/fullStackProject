import OrdersDataAccess from "../dataAccess/ordersDataAcess.js"
import { serverError } from "../utils/httpResponse.js"

export default class OrdersController {
    constructor() {
        this.dataAccess = new OrdersDataAccess
    }

    async getOrders(){
        try{
            const orders = await this.dataAccess.getOrders()

            return ok(orders)
        }catch (error){
            return serverError(error)
        }
    }

    async addOrder(orderData){
        try {
            const orders = await this.dataAccess.addOrder(orderData)

            return ok(orders)            
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteOrder(orderData){
        try {
            const result = await this.dataAccess.deleteOrder(orderData)

            return ok(result)            
        } catch (error) {
            return serverError(error)
        }
    }
}