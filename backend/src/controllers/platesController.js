import PlatesDataAccess from "../dataAccess/platesDataAcess.js";
import { ok, serverError } from "../utils/httpResponse.js";

export default class PlatesControllers {
    constructor(){
        this.dataAccess = new PlatesDataAccess()
    }

    async getPlates(){
        try{
            const plates = await this.dataAccess.getPlates()
            return ok(plates)
        }catch(erro){
            return serverError(erro)
        }
    }

    async getAvailablePlates(){
        try{
            const result = await this.dataAccess.getAvailablePlates()
            return ok(result)
        }catch(erro){
            return serverError(erro)
        }
    }

    async addPlate(plateData){
        try{
            const result = await this.dataAccess.addPlate(plateData)
            return ok(result)
        }catch(erro){
            return serverError(erro)
        }
    }

    async deletePlate(plateId){
        try{
            const result = await this.dataAccess.deletePlate(plateId)
            return ok(result)
        }catch(erro){
            return serverError(erro)
        }
    }

    async updatePlate(plateId, plateData){
        try{
            const result = await this.dataAccess.updatePlate(plateId, plateData)
            return ok(result)
        }catch(erro){
            return serverError(erro)
        }
    }
}