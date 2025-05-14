import UserDataAccess from "../dataAccess/usersDataAcess.js";
import { ok, serverError } from "../utils/httpResponse.js"

export default class UsersControllers {
    constructor(){
        this.dataAccess = new UserDataAccess()
    }

    async getUsers(){
        try{
            const users = this.dataAccess.getUsers()

            return ok(users)
        }catch(error){
            return serverError(error)
        }
    }
}